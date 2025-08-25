import { Code, Megaphone, Video, Palette } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Design",
    description: "Custom websites that convert visitors into customers with stunning design and seamless functionality.",
    gradient: "from-electric-violet to-sky-blue",
    hoverColor: "hover:border-electric-violet/50 hover:shadow-electric-violet/20",
    textColor: "group-hover:text-electric-violet"
  },
  {
    icon: Megaphone,
    title: "Social Media Ads",
    description: "Targeted advertising campaigns that reach your ideal audience and maximize your ROI across all platforms.",
    gradient: "from-sky-blue to-neon-lime",
    hoverColor: "hover:border-sky-blue/50 hover:shadow-sky-blue/20",
    textColor: "group-hover:text-sky-blue"
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Engaging video content that tells your story and connects with your audience on an emotional level.",
    gradient: "from-neon-lime to-electric-violet",
    hoverColor: "hover:border-neon-lime/50 hover:shadow-neon-lime/20",
    textColor: "group-hover:text-neon-lime"
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Complete brand identity solutions that make your business memorable and distinguish you from competitors.",
    gradient: "from-electric-violet via-sky-blue to-neon-lime",
    hoverColor: "hover:border-electric-violet/50 hover:shadow-electric-violet/20",
    textColor: "group-hover:text-electric-violet"
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-20 relative" data-testid="services-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Our <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to transform your brand and accelerate your business growth.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group service-card bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 ${service.hoverColor} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
              data-testid={`service-card-${index}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white text-2xl w-8 h-8" />
              </div>
              <h3 className={`font-poppins font-semibold text-xl mb-4 ${service.textColor} transition-colors duration-300`}>
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>
              <div className={`flex items-center font-medium group-hover:translate-x-2 transition-transform duration-300 ${service.textColor.replace('group-hover:', '')}`}>
                Learn More <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
