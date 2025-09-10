import { Mail, MapPin, Phone } from "lucide-react"

export const ContactUsVte = () => {
    return(
        <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-blue-600 text-sm font-medium shadow-sm">
              <Phone className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Start Your Financial
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Journey Today
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  ></textarea>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">info@velocitytaxexpress.com</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Business Ave<br />Suite 100<br />City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}