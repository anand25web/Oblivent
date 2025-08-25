import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/15559876543"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        data-testid="whatsapp-button"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-electric-violet to-sky-blue text-white w-12 h-12 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300"
          data-testid="back-to-top"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}

      {/* Sticky Get Quote Button */}
      <div className="fixed bottom-24 right-6 z-40">
        <Button className="bg-gradient-to-r from-electric-violet to-sky-blue text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow">
          <Quote className="w-4 h-4 mr-2" />
          Get Quote
        </Button>
      </div>
    </>
  );
}
