import { useState } from "react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern online store with seamless checkout experience",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    gradient: "from-electric-violet/80 to-transparent"
  },
  {
    id: 2,
    title: "Corporate Branding",
    description: "Complete brand identity for tech startup",
    category: "branding",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    gradient: "from-sky-blue/80 to-transparent"
  },
  {
    id: 3,
    title: "Brand Video Campaign",
    description: "Engaging promotional video that increased conversions by 250%",
    category: "video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    gradient: "from-neon-lime/80 to-transparent"
  },
  {
    id: 4,
    title: "FinTech Mobile App",
    description: "User-friendly financial app with advanced security features",
    category: "web",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    gradient: "from-electric-violet/80 to-transparent"
  },
  {
    id: 5,
    title: "Restaurant Branding",
    description: "Modern packaging design that increased brand recognition",
    category: "branding",
    image: "https://images.unsplash.com/photo-1607827448387-a67db1383b59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    gradient: "from-sky-blue/80 to-transparent"
  },
  {
    id: 6,
    title: "Social Media Campaign",
    description: "Viral video content that reached 2M+ views",
    category: "video",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    gradient: "from-neon-lime/80 to-transparent"
  }
];

const filterButtons = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Design" },
  { id: "branding", label: "Branding" },
  { id: "video", label: "Video" }
];

export default function PortfolioPreview() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20" data-testid="portfolio-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Our <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our latest projects and see how we've helped brands achieve digital excellence.
          </p>

          {/* Filter Buttons */}
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500"
              data-testid={`portfolio-item-${item.id}`}
            >
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-poppins font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-electric-violet to-sky-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-electric-violet/25 transition-all duration-300 hover:-translate-y-1"
            data-testid="view-all-projects"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
