import { type User, type InsertUser, type Contact, type InsertContact, type NewsletterSubscription, type InsertNewsletterSubscription } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Contact methods
  getContact(id: string): Promise<Contact | undefined>;
  getAllContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  updateContactReplied(id: string, replied: boolean): Promise<Contact | undefined>;

  // Newsletter methods
  getNewsletterSubscription(email: string): Promise<NewsletterSubscription | undefined>;
  getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  updateNewsletterSubscriptionStatus(email: string, active: boolean): Promise<NewsletterSubscription | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletterSubscriptions = new Map();
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact methods
  async getContact(id: string): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }

  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
      replied: false,
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async updateContactReplied(id: string, replied: boolean): Promise<Contact | undefined> {
    const contact = this.contacts.get(id);
    if (contact) {
      const updatedContact = { ...contact, replied };
      this.contacts.set(id, updatedContact);
      return updatedContact;
    }
    return undefined;
  }

  // Newsletter methods
  async getNewsletterSubscription(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === email
    );
  }

  async getAllNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values()).filter(
      (sub) => sub.active
    ).sort(
      (a, b) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime()
    );
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = randomUUID();
    const subscription: NewsletterSubscription = {
      ...insertSubscription,
      id,
      subscribedAt: new Date(),
      active: true,
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async updateNewsletterSubscriptionStatus(email: string, active: boolean): Promise<NewsletterSubscription | undefined> {
    const subscription = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === email
    );
    if (subscription) {
      const updatedSubscription = { ...subscription, active };
      this.newsletterSubscriptions.set(subscription.id, updatedSubscription);
      return updatedSubscription;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
