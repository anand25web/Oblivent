import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "You've been successfully subscribed to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-electric-violet/10 via-sky-blue/10 to-neon-lime/10 dark:from-electric-violet/20 dark:via-sky-blue/20 dark:to-neon-lime/20" data-testid="newsletter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
          Stay <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Connected</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Get the latest digital marketing insights, design trends, and exclusive tips delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-2xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 focus:border-electric-violet focus:outline-none transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
            data-testid="email-input"
            required
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-electric-violet to-sky-blue text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-electric-violet/25 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
            data-testid="subscribe-button"
          >
            {isLoading ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </form>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
