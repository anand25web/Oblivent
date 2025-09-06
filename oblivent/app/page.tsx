import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to <span className="text-blue-400">Oblivent</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto">
            Building the future of digital platforms with comprehensive solutions 
            for education, commerce, agencies, and software development.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/platforms"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:shadow-xl"
            >
              Explore Platforms
            </Link>
            <Link
              href="/auth/login"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-lg rounded-2xl transition-all border border-white/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Platforms Section */}
      <div className="py-16 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Platforms
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/platforms/elearning" className="group">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">E-Learning</h3>
                <p className="text-blue-200">Advanced online education platforms with interactive courses</p>
              </div>
            </Link>

            <Link href="/platforms/mart" className="group">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-3xl">🛒</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Mart</h3>
                <p className="text-blue-200">Complete e-commerce marketplace solutions</p>
              </div>
            </Link>

            <Link href="/platforms/agency" className="group">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Agency</h3>
                <p className="text-blue-200">Digital agency management and client tools</p>
              </div>
            </Link>

            <Link href="/platforms/software" className="group">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-3xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Software</h3>
                <p className="text-blue-200">Developer tools and platform solutions</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Why Choose Oblivent?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast & Modern</h3>
              <p className="text-blue-200">Built with the latest technologies for optimal performance</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Customizable</h3>
              <p className="text-blue-200">Tailor each platform to match your specific requirements</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scalable</h3>
              <p className="text-blue-200">Grows with your business from startup to enterprise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
