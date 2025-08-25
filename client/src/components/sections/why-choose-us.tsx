import { Rocket, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast Delivery",
    description: "We deliver projects 50% faster than industry standards without compromising on quality.",
    gradient: "from-electric-violet to-sky-blue"
  },
  {
    icon: Award,
    title: "Award-Winning Team",
    description: "Our team has won multiple international design and development awards.",
    gradient: "from-sky-blue to-neon-lime"
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our clients see an average of 300% increase in conversion rates within 6 months.",
    gradient: "from-neon-lime to-electric-violet"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-electric-violet/5 via-sky-blue/5 to-neon-lime/5 dark:from-electric-violet/10 dark:via-sky-blue/10 dark:to-neon-lime/10" data-testid="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Why Choose <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Oblivent?</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center group" data-testid={`feature-${index}`}>
              <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
