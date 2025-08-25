import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users, Award, Rocket, TrendingUp } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    bio: "Digital marketing visionary with 10+ years of experience building successful brands."
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    bio: "Award-winning designer passionate about creating meaningful brand experiences."
  },
  {
    name: "Mike Johnson",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    bio: "Full-stack developer specializing in high-performance web applications."
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
    bio: "Data-driven marketer focused on delivering measurable ROI for our clients."
  }
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with cutting-edge digital solutions that drive real growth and meaningful connections with their audience."
  },
  {
    icon: Eye,
    title: "Vision", 
    description: "To be the world's most trusted digital marketing agency, setting new standards for creativity, innovation, and results."
  },
  {
    icon: Users,
    title: "Values",
    description: "We believe in transparency, creativity, excellence, and building long-term partnerships with our clients."
  }
];

const achievements = [
  {
    icon: Award,
    title: "50+ Awards Won",
    description: "International recognition for our innovative campaigns"
  },
  {
    icon: Rocket,
    title: "500+ Projects",
    description: "Successfully completed projects across various industries"
  },
  {
    icon: TrendingUp,
    title: "300% Average ROI",
    description: "Average return on investment for our clients"
  }
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/10 via-sky-blue/10 to-neon-lime/10 dark:from-electric-violet/20 dark:via-sky-blue/20 dark:to-neon-lime/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
            About <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Oblivent</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a team of passionate creators, strategists, and innovators dedicated to transforming businesses through the power of digital marketing and design.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-4xl mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded in 2019, Oblivent began as a small team of digital enthusiasts with a big vision: to help businesses create authentic connections with their audiences in the digital world.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                What started as a passion project has grown into a full-service digital marketing agency that has helped hundreds of brands achieve their goals and exceed their expectations.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Today, we're proud to be recognized as industry leaders, but we never forget our roots - we're still the same passionate team that believes every brand has a unique story worth telling.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-electric-violet to-sky-blue text-white"
                data-testid="contact-cta"
              >
                Get in Touch
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Our team working together"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/5 via-sky-blue/5 to-neon-lime/5 dark:from-electric-violet/10 dark:via-sky-blue/10 dark:to-neon-lime/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Our <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Foundation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-electric-violet to-sky-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Meet Our <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The creative minds behind Oblivent's success. Our diverse team brings together expertise from design, development, marketing, and strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="font-poppins font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-electric-violet font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/5 via-sky-blue/5 to-neon-lime/5 dark:from-electric-violet/10 dark:via-sky-blue/10 dark:to-neon-lime/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
              Our <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-electric-violet to-sky-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-2xl mb-4">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
