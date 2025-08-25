import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  timeline: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const projectTypes = [
  "Website Design & Development",
  "Social Media Marketing",
  "Video Production",
  "Branding & Identity",
  "SEO Optimization",
  "Digital Strategy",
  "Complete Digital Transformation"
];

const budgetRanges = [
  "$5,000 - $10,000",
  "$10,000 - $25,000", 
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+"
];

const timelineOptions = [
  "ASAP",
  "1-2 months",
  "3-6 months",
  "6+ months",
  "Just exploring"
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
      timeline: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 2 hours during business hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/10 via-sky-blue/10 to-neon-lime/10 dark:from-electric-violet/20 dark:via-sky-blue/20 dark:to-neon-lime/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
            Let's <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Discuss</span> Your Project
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch with our team and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
              <CardContent className="p-8">
                <h2 className="font-poppins font-bold text-2xl mb-6">Send us a Message</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John" 
                                {...field} 
                                className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-white/30 dark:border-gray-700/30 focus:border-electric-violet"
                                data-testid="first-name-input"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Doe" 
                                {...field} 
                                className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-white/30 dark:border-gray-700/30 focus:border-electric-violet"
                                data-testid="last-name-input"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="john@company.com" 
                                {...field} 
                                className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-white/30 dark:border-gray-700/30 focus:border-electric-violet"
                                data-testid="email-input"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel"
                                placeholder="+1 (555) 123-4567" 
                                {...field} 
                                className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-white/30 dark:border-gray-700/30 focus:border-electric-violet"
                                data-testid="phone-input"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Company" 
                              {...field} 
                              className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-white/30 dark:border-gray-700/30 focus:border-electric-violet"
                              data-testid="company-input"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger 
                                  className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-white/30 dark:border-gray-700/30 focus:border-electric-violet"
                                  data-testid="project-type-select"
                                >
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {projectTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Budget *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger 
                                  className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-white/30 dark:border-gray-700/30 focus:border-electric-violet"
                                  data-testid="budget-select"
                                >
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {budgetRanges.map((budget) => (
                                  <SelectItem key={budget} value={budget}>
                                    {budget}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Timeline</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-white/30 dark:border-gray-700/30 focus:border-electric-violet"
                                data-testid="timeline-select"
                              >
                                <SelectValue placeholder="When do you need this completed?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timelineOptions.map((timeline) => (
                                <SelectItem key={timeline} value={timeline}>
                                  {timeline}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description *</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={5}
                              placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                              {...field} 
                              className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-white/30 dark:border-gray-700/30 focus:border-electric-violet resize-none"
                              data-testid="message-textarea"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-electric-violet to-sky-blue text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-electric-violet/25 transition-all duration-300 hover:-translate-y-1"
                      data-testid="submit-button"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Project Details
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="p-8">
                  <h3 className="font-poppins font-semibold text-2xl mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-electric-violet to-sky-blue rounded-xl flex items-center justify-center">
                        <Mail className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Email Us</div>
                        <div className="text-gray-600 dark:text-gray-300">hello@oblivent.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-sky-blue to-neon-lime rounded-xl flex items-center justify-center">
                        <Phone className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Call Us</div>
                        <div className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-neon-lime to-electric-violet rounded-xl flex items-center justify-center">
                        <MessageCircle className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-gray-600 dark:text-gray-300">+1 (555) 987-6543</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-electric-violet to-sky-blue rounded-xl flex items-center justify-center">
                        <MapPin className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Visit Us</div>
                        <div className="text-gray-600 dark:text-gray-300">123 Innovation St, Tech City, TC 12345</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-sky-blue to-neon-lime rounded-xl flex items-center justify-center">
                        <Clock className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-gray-600 dark:text-gray-300">Mon-Fri 9AM-6PM PST</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Response Guarantee */}
              <Card className="bg-gradient-to-br from-electric-violet/10 to-sky-blue/10 dark:from-electric-violet/20 dark:to-sky-blue/20 border-electric-violet/20">
                <CardContent className="p-8">
                  <h3 className="font-poppins font-semibold text-xl mb-4">Quick Response Guarantee</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We respond to all inquiries within 2 hours during business hours. For urgent projects, use our WhatsApp for immediate assistance.
                  </p>
                  <div className="flex items-center text-electric-violet font-medium">
                    <Clock className="w-5 h-5 mr-2" />
                    Average response time: 45 minutes
                  </div>
                </CardContent>
              </Card>

              {/* Social Proof */}
              <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="p-8">
                  <h3 className="font-poppins font-semibold text-xl mb-4">Why Choose Oblivent?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-electric-violet rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">500+ successful projects completed</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-sky-blue rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">300% average ROI increase</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-neon-lime rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">50+ international awards</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-electric-violet rounded-full mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-300">24/7 support & maintenance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
