import Hero from "@/components/sections/hero";
import ServicesPreview from "@/components/sections/services-preview";
import WhyChooseUs from "@/components/sections/why-choose-us";
import PortfolioPreview from "@/components/sections/portfolio-preview";
import Testimonials from "@/components/sections/testimonials";
import BlogPreview from "@/components/sections/blog-preview";
import Newsletter from "@/components/sections/newsletter";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
    </div>
  );
}
