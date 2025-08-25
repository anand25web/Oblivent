import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Check for required fields
      if (!validatedData.firstName || !validatedData.lastName || !validatedData.email || !validatedData.message) {
        return res.status(400).json({ 
          message: "Missing required fields: firstName, lastName, email, and message are required" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(validatedData.email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address" 
        });
      }

      const contact = await storage.createContact(validatedData);
      
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        id: contact.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        });
      }
      
      console.error("Error creating contact:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all contacts (for admin use)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Update contact replied status
  app.patch("/api/contacts/:id/replied", async (req, res) => {
    try {
      const { id } = req.params;
      const { replied } = req.body;

      if (typeof replied !== "boolean") {
        return res.status(400).json({ message: "replied field must be a boolean" });
      }

      const contact = await storage.updateContactReplied(id, replied);
      
      if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
      }

      res.json(contact);
    } catch (error) {
      console.error("Error updating contact:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(validatedData.email)) {
        return res.status(400).json({ 
          message: "Please provide a valid email address" 
        });
      }

      // Check if email already exists
      const existingSubscription = await storage.getNewsletterSubscription(validatedData.email);
      if (existingSubscription) {
        if (existingSubscription.active) {
          return res.status(409).json({ 
            message: "This email is already subscribed to our newsletter" 
          });
        } else {
          // Reactivate existing subscription
          const reactivated = await storage.updateNewsletterSubscriptionStatus(validatedData.email, true);
          return res.json({ 
            message: "Newsletter subscription reactivated successfully",
            id: reactivated?.id
          });
        }
      }

      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      res.status(201).json({ 
        message: "Newsletter subscription successful",
        id: subscription.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        });
      }
      
      console.error("Error creating newsletter subscription:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Unsubscribe from newsletter
  app.post("/api/newsletter/unsubscribe", async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      const subscription = await storage.updateNewsletterSubscriptionStatus(email, false);
      
      if (!subscription) {
        return res.status(404).json({ message: "Subscription not found" });
      }

      res.json({ message: "Successfully unsubscribed from newsletter" });
    } catch (error) {
      console.error("Error unsubscribing from newsletter:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get newsletter subscriptions (for admin use)
  app.get("/api/newsletter/subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getAllNewsletterSubscriptions();
      res.json(subscriptions);
    } catch (error) {
      console.error("Error fetching newsletter subscriptions:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Oblivent API is running" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
