export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About Oblivent</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We are building the future of digital platforms with comprehensive solutions 
              for education, commerce, agencies, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">E-Learning</h3>
              <p className="text-blue-200">Advanced online education platforms</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mart</h3>
              <p className="text-blue-200">E-commerce marketplace solutions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Agency</h3>
              <p className="text-blue-200">Digital agency management tools</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Software</h3>
              <p className="text-blue-200">Developer tools and platforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}