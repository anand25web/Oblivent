import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Marketing: AI and Personalization",
    excerpt: "Discover how artificial intelligence is revolutionizing digital marketing and how brands can leverage personalization to create more meaningful customer experiences.",
    category: "Digital Marketing",
    readTime: "5 min read",
    date: "Dec 15, 2023",
    author: "Alex Rivera",
    authorImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: true
  },
  {
    id: 2,
    title: "2024 Web Design Trends That Will Dominate",
    excerpt: "Explore the cutting-edge design trends that will shape websites in 2024...",
    category: "Web Design",
    readTime: "3 min read",
    date: "Dec 12, 2023",
    author: "Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    featured: false
  },
  {
    id: 3,
    title: "Maximizing ROI with Social Media Ads",
    excerpt: "Learn proven strategies to optimize your social media advertising campaigns...",
    category: "Social Media",
    readTime: "4 min read",
    date: "Dec 10, 2023",
    author: "Mike Johnson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200",
    featured: false
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Digital Marketing":
      return "bg-electric-violet/10 text-electric-violet";
    case "Web Design":
      return "bg-sky-blue/10 text-sky-blue";
    case "Social Media":
      return "bg-neon-lime/10 text-neon-lime";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default function BlogPreview() {
  const featuredPost = blogPosts.find(post => post.featured);
  const sidePosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-20" data-testid="blog-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Latest <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends in digital marketing, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Featured Article */}
          {featuredPost && (
            <div className="lg:col-span-2">
              <article className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="font-poppins font-bold text-2xl mb-4 group-hover:text-electric-violet transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={featuredPost.authorImage} 
                        alt={featuredPost.author}
                        className="w-10 h-10 rounded-full object-cover" 
                      />
                      <div>
                        <div className="font-medium">{featuredPost.author}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">{featuredPost.date}</div>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="text-electric-violet hover:text-sky-blue transition-colors duration-300 font-medium"
                      data-testid="read-more-featured"
                    >
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Side Articles */}
          <div className="space-y-8">
            {sidePosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3 group-hover:text-sky-blue transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-neon-lime hover:text-electric-violet transition-colors duration-300 font-medium text-sm p-0"
                    data-testid={`read-more-${post.id}`}
                  >
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-electric-violet to-sky-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-electric-violet/25 transition-all duration-300 hover:-translate-y-1"
            data-testid="view-all-articles"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
