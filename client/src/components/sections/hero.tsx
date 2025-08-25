import { useTypewriter } from "@/hooks/use-typewriter";
import { useCounter } from "@/hooks/use-counter";
import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

export default function Hero() {
  const typewriterText = useTypewriter([
    "We Create Digital",
    "We Design Amazing", 
    "We Build Future",
    "We Create Digital"
  ], 100, 2000);

  const projectsCount = useCounter(500, 100);
  const clientsCount = useCounter(100, 100);
  const teamCount = useCounter(50, 100);
  const experienceCount = useCounter(5, 100);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-violet/10 via-sky-blue/10 to-neon-lime/10 dark:from-electric-violet/20 dark:via-sky-blue/20 dark:to-neon-lime/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)] animate-pulse"></div>
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-electric-violet/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-sky-blue/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-neon-lime/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-electric-violet/30 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <div className="mb-8">
          <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            <span className="bg-gradient-to-r from-electric-violet via-sky-blue to-neon-lime bg-clip-text text-transparent bg-size-200 animate-gradient">
              <span data-testid="typewriter-text">{typewriterText}</span>
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Magic For Brands</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Delivering impactful, high-performance digital experiences that drive measurable business growth through cutting-edge design and technology.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-electric-violet to-sky-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-electric-violet/25 transition-all duration-300 hover:-translate-y-1"
            data-testid="start-project-button"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start Your Project
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-electric-violet text-electric-violet dark:text-electric-violet px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-electric-violet hover:text-white transition-all duration-300 backdrop-blur-sm"
            data-testid="watch-work-button"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Our Work
          </Button>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent"
              data-testid="projects-counter"
            >
              {projectsCount}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-blue to-neon-lime bg-clip-text text-transparent"
              data-testid="clients-counter"
            >
              {clientsCount}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-lime to-electric-violet bg-clip-text text-transparent"
              data-testid="team-counter"
            >
              {teamCount}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Team Members</div>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-violet to-neon-lime bg-clip-text text-transparent"
              data-testid="experience-counter"
            >
              {experienceCount}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
