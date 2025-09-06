export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Get in touch with our team to discuss your project requirements and discover how 
              we can help transform your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-200 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Email</p>
                      <p className="text-white">contact@oblivent.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white">📱</span>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Phone</p>
                      <p className="text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white">📍</span>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Office</p>
                      <p className="text-white">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}