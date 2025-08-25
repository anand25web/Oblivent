import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Megaphone, Video, Palette, Search, BarChart } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Design & Development",
    description: "Custom websites that convert visitors into customers with stunning design and seamless functionality.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Integration", 
      "Performance Optimization",
      "SEO Foundation"
    ],
    gradient: "from-electric-violet to-sky-blue",
    price: "Starting from $5,000"
  },
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    description: "Targeted advertising campaigns that reach your ideal audience and maximize your ROI across all platforms.",
    features: [
      "Facebook & Instagram Ads",
      "Google Ads Management",
      "LinkedIn Campaigns",
      "TikTok Advertising",
      "Performance Analytics"
    ],
    gradient: "from-sky-blue to-neon-lime",
    price: "Starting from $2,500/month"
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Engaging video content that tells your story and connects with your audience on an emotional level.",
    features: [
      "Brand Videos",
      "Product Demos",
      "Social Media Content",
      "Animation & Motion Graphics",
      "Video Marketing Strategy"
    ],
    gradient: "from-neon-lime to-electric-violet",
    price: "Starting from $3,000"
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Complete brand identity solutions that make your business memorable and distinguish you from competitors.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity System",
      "Packaging Design",
      "Brand Strategy"
    ],
    gradient: "from-electric-violet via-sky-blue to-neon-lime",
    price: "Starting from $4,000"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Strategy",
      "Local SEO"
    ],
    gradient: "from-sky-blue to-electric-violet",
    price: "Starting from $1,500/month"
  },
  {
    icon: BarChart,
    title: "Digital Strategy & Analytics",
    description: "Data-driven strategies that align with your business goals and deliver measurable results.",
    features: [
      "Market Research",
      "Competitor Analysis",
      "Growth Strategy",
      "Performance Tracking",
      "ROI Optimization"
    ],
    gradient: "from-neon-lime to-sky-blue",
    price: "Starting from $2,000"
  }
];

const benefits = [
  "Expert team with 5+ years experience",
  "Proven track record of 300% ROI increase",
  "24/7 support and maintenance",
  "Money-back guarantee",
  "Custom solutions for every business",
  "Industry-leading tools and technologies"
];

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/10 via-sky-blue/10 to-neon-lime/10 dark:from-electric-violet/20 dark:via-sky-blue/20 dark:to-neon-lime/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
            Our <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to accelerate your business growth and maximize your online presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              What We <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Offer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20"
                data-testid={`service-${index}`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-4 group-hover:text-electric-violet transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-electric-violet rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-electric-violet">{service.price}</span>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-electric-violet to-sky-blue text-white hover:shadow-lg transition-all duration-300"
                    data-testid={`request-quote-${index}`}
                  >
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/5 via-sky-blue/5 to-neon-lime/5 dark:from-electric-violet/10 dark:via-sky-blue/10 dark:to-neon-lime/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Services?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 p-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-xl border border-white/20 dark:border-gray-700/20"
                data-testid={`benefit-${index}`}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-electric-violet to-sky-blue rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Ready to Get <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-electric-violet to-sky-blue text-white px-8 py-4"
              data-testid="get-quote-cta"
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-electric-violet text-electric-violet hover:bg-electric-violet hover:text-white px-8 py-4"
              data-testid="contact-cta"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
