import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern online store with seamless checkout experience that increased conversions by 250%",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    results: "250% increase in conversions, 40% faster load times",
    client: "TechCommerce Ltd",
    year: "2023",
    link: "#",
    featured: true
  },
  {
    id: 2,
    title: "Corporate Branding Package",
    description: "Complete brand identity for tech startup including logo, guidelines, and marketing materials",
    category: "branding",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
    results: "300% increase in brand recognition, secured $2M funding",
    client: "InnovateAI",
    year: "2023",
    link: "#",
    featured: false
  },
  {
    id: 3,
    title: "Viral Marketing Campaign",
    description: "Engaging promotional video that increased conversions by 250% and reached 2M+ views",
    category: "video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["After Effects", "Premiere Pro", "Cinema 4D"],
    results: "2M+ views, 250% conversion increase, 500% engagement boost",
    client: "GrowthBrand",
    year: "2023",
    link: "#",
    featured: true
  },
  {
    id: 4,
    title: "FinTech Mobile App",
    description: "User-friendly financial app with advanced security features and seamless UX",
    category: "web",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["React Native", "Firebase", "Plaid API"],
    results: "50K+ downloads, 4.8 app store rating, $1M+ transactions",
    client: "FinanceFlow",
    year: "2023",
    link: "#",
    featured: false
  },
  {
    id: 5,
    title: "Restaurant Brand Redesign",
    description: "Modern packaging design that increased brand recognition and customer loyalty",
    category: "branding",
    image: "https://images.unsplash.com/photo-1607827448387-a67db1383b59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Packaging Design", "Print Design", "Photography"],
    results: "35% increase in repeat customers, award-winning design",
    client: "Artisan Bistro",
    year: "2022",
    link: "#",
    featured: false
  },
  {
    id: 6,
    title: "Social Media Campaign",
    description: "Viral video content that reached 2M+ views and drove massive engagement",
    category: "video",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    technologies: ["Social Media Strategy", "Video Production", "Analytics"],
    results: "2M+ views, 300% follower growth, 150% sales increase",
    client: "FashionForward",
    year: "2022",
    link: "#",
    featured: false
  }
];

const filterButtons = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "branding", label: "Branding" },
  { id: "video", label: "Video Production" }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/10 via-sky-blue/10 to-neon-lime/10 dark:from-electric-violet/20 dark:via-sky-blue/20 dark:to-neon-lime/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
            Our <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped brands achieve digital excellence and measurable growth.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filterButtons.map((button) => (
              <Button
                key={button.id}
                variant={activeFilter === button.id ? "default" : "outline"}
                onClick={() => setActiveFilter(button.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === button.id
                    ? "bg-electric-violet text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-electric-violet hover:text-white"
                }`}
                data-testid={`filter-${button.id}`}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 cursor-pointer"
                onClick={() => setSelectedProject(item)}
                data-testid={`portfolio-item-${item.id}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-electric-violet/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-lg text-white border-white/30 hover:bg-white/30"
                      data-testid={`view-details-${item.id}`}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-electric-violet/10 text-electric-violet">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-2 group-hover:text-electric-violet transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{item.client}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-electric-violet transition-colors duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-poppins font-bold text-3xl mb-2">{selectedProject.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{selectedProject.client} • {selectedProject.year}</p>
                </div>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedProject(null)}
                  data-testid="close-modal"
                >
                  ✕
                </Button>
              </div>
              
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">Project Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  
                  <h4 className="font-medium mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">Results</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.results}
                  </p>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-electric-violet to-sky-blue text-white"
                    data-testid="view-live-project"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/5 via-sky-blue/5 to-neon-lime/5 dark:from-electric-violet/10 dark:via-sky-blue/10 dark:to-neon-lime/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Ready to Start Your <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Project?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today to discuss your project requirements.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-electric-violet to-sky-blue text-white px-8 py-4"
            data-testid="start-project-cta"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
