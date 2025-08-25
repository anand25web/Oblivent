import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, ArrowRight, Search, User, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Marketing: AI and Personalization",
    excerpt: "Discover how artificial intelligence is revolutionizing digital marketing and how brands can leverage personalization to create more meaningful customer experiences that drive conversions and build lasting relationships.",
    content: "Artificial Intelligence is transforming the digital marketing landscape in unprecedented ways. From predictive analytics to personalized content recommendations, AI is enabling marketers to create more targeted and effective campaigns...",
    category: "Digital Marketing",
    readTime: "5 min read",
    date: "Dec 15, 2023",
    author: "Alex Rivera",
    authorImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    featured: true,
    tags: ["AI", "Personalization", "Marketing Automation"]
  },
  {
    id: 2,
    title: "2024 Web Design Trends That Will Dominate",
    excerpt: "Explore the cutting-edge design trends that will shape websites in 2024, from immersive 3D experiences to minimalist aesthetics.",
    content: "Web design continues to evolve at a rapid pace. In 2024, we're seeing a shift towards more immersive experiences, sustainable design practices, and user-centric interfaces...",
    category: "Web Design",
    readTime: "3 min read",
    date: "Dec 12, 2023",
    author: "Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    featured: false,
    tags: ["Design Trends", "UX/UI", "Web Development"]
  },
  {
    id: 3,
    title: "Maximizing ROI with Social Media Advertising",
    excerpt: "Learn proven strategies to optimize your social media advertising campaigns and achieve better returns on investment.",
    content: "Social media advertising has become an essential component of digital marketing strategies. With the right approach, businesses can achieve remarkable ROI...",
    category: "Social Media",
    readTime: "4 min read",
    date: "Dec 10, 2023",
    author: "Mike Johnson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    featured: false,
    tags: ["Social Media", "ROI", "Advertising"]
  },
  {
    id: 4,
    title: "Building Brand Identity in the Digital Age",
    excerpt: "How to create a strong, cohesive brand identity that resonates with your target audience across all digital touchpoints.",
    content: "In today's digital landscape, building a strong brand identity requires a comprehensive understanding of your audience and consistent execution across all platforms...",
    category: "Branding",
    readTime: "6 min read",
    date: "Dec 8, 2023",
    author: "Emily Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    featured: false,
    tags: ["Branding", "Digital Identity", "Brand Strategy"]
  },
  {
    id: 5,
    title: "The Power of Video Marketing in 2024",
    excerpt: "Why video content continues to dominate digital marketing and how to create compelling videos that drive engagement.",
    content: "Video marketing has become the cornerstone of successful digital campaigns. With the rise of short-form content and interactive videos...",
    category: "Video Marketing",
    readTime: "5 min read",
    date: "Dec 5, 2023",
    author: "David Park",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    featured: false,
    tags: ["Video Marketing", "Content Creation", "Engagement"]
  },
  {
    id: 6,
    title: "SEO Strategies for E-commerce Success",
    excerpt: "Essential SEO techniques to improve your e-commerce site's visibility and drive more organic traffic.",
    content: "E-commerce SEO requires a unique approach that combines traditional SEO techniques with product-specific optimization strategies...",
    category: "SEO",
    readTime: "7 min read",
    date: "Dec 3, 2023",
    author: "Lisa Wang",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    featured: false,
    tags: ["SEO", "E-commerce", "Organic Traffic"]
  }
];

const categories = [
  "All",
  "Digital Marketing", 
  "Web Design",
  "Social Media",
  "Branding",
  "Video Marketing",
  "SEO"
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Digital Marketing":
      return "bg-electric-violet/10 text-electric-violet";
    case "Web Design":
      return "bg-sky-blue/10 text-sky-blue";
    case "Social Media":
      return "bg-neon-lime/10 text-neon-lime";
    case "Branding":
      return "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300";
    case "Video Marketing":
      return "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300";
    case "SEO":
      return "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300";
    default:
      return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300";
  }
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/10 via-sky-blue/10 to-neon-lime/10 dark:from-electric-violet/20 dark:via-sky-blue/20 dark:to-neon-lime/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
            Our <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Stay updated with the latest trends in digital marketing, design, and technology insights from our expert team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-2xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 focus:border-electric-violet"
              data-testid="search-input"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-electric-violet text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-electric-violet hover:text-white"
                }`}
                data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No articles found matching your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured Article */}
              {featuredPost && (
                <div className="lg:col-span-2">
                  <Card 
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 cursor-pointer"
                    onClick={() => setSelectedPost(featuredPost)}
                    data-testid="featured-post"
                  >
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500" 
                    />
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className={getCategoryColor(featuredPost.category)}>
                          {featuredPost.category}
                        </Badge>
                        <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h2 className="font-poppins font-bold text-2xl mb-4 group-hover:text-electric-violet transition-colors duration-300">
                        {featuredPost.title}
                      </h2>
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
                            <div className="font-medium flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              {featuredPost.author}
                            </div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {featuredPost.date}
                            </div>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          className="text-electric-violet hover:text-sky-blue transition-colors duration-300 font-medium"
                          data-testid="read-featured"
                        >
                          Read More <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Regular Articles */}
              <div className="lg:col-span-1 space-y-8">
                {regularPosts.slice(0, 3).map((post) => (
                  <Card 
                    key={post.id}
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                    data-testid={`post-${post.id}`}
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-32 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500" 
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                        <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-poppins font-semibold text-lg mb-3 group-hover:text-electric-violet transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {post.excerpt.substring(0, 100)}...
                      </p>
                      <Button 
                        variant="ghost" 
                        className="text-neon-lime hover:text-electric-violet transition-colors duration-300 font-medium text-sm p-0"
                        data-testid={`read-more-${post.id}`}
                      >
                        Read More <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* More Articles Grid */}
          {regularPosts.length > 3 && (
            <div className="mt-16">
              <h2 className="font-poppins font-bold text-3xl mb-8 text-center">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.slice(3).map((post) => (
                  <Card 
                    key={post.id}
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border-white/20 dark:border-gray-700/20 cursor-pointer"
                    onClick={() => setSelectedPost(post)}
                    data-testid={`more-post-${post.id}`}
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500" 
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                        <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-poppins font-semibold text-lg mb-3 group-hover:text-electric-violet transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {post.excerpt.substring(0, 120)}...
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{post.author}</span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <Badge className={getCategoryColor(selectedPost.category)}>
                  {selectedPost.category}
                </Badge>
                <Button 
                  variant="ghost" 
                  onClick={() => setSelectedPost(null)}
                  data-testid="close-article"
                >
                  ✕
                </Button>
              </div>
              
              <h1 className="font-poppins font-bold text-3xl mb-4">{selectedPost.title}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={selectedPost.authorImage} 
                  alt={selectedPost.author}
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                  <div className="font-medium">{selectedPost.author}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-4">
                    <span>{selectedPost.date}</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
              </div>
              
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedPost.excerpt}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedPost.content}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-electric-violet/5 via-sky-blue/5 to-neon-lime/5 dark:from-electric-violet/10 dark:via-sky-blue/10 dark:to-neon-lime/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Never Miss an <span className="bg-gradient-to-r from-electric-violet to-sky-blue bg-clip-text text-transparent">Update</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights delivered straight to your inbox.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-electric-violet to-sky-blue text-white px-8 py-4"
            data-testid="subscribe-newsletter"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </div>
  );
}
