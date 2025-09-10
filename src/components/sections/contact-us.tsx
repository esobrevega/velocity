import { Mail, MapPin, Phone } from "lucide-react"

export const ContactUs = () => {
    return (
        <section id="contact" className="min-h-screen relative flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 m-3 top-25">
                <img
                    src="/about.jpg"
                    alt="Background"
                    className="w-full h-full object-cover rounded-3xl"
                />
            </div>

            <div className="px-4 sm:px-6 lg:px-8 z-10 mt-25">
                <div className="grid lg:grid-cols-3 gap-8 z-10">
                    <div className="lg:col-span-2 flex items-center">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-4xl font-extralight text-gray-900 mb-6">Send us a message</h3>
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
                                <button className="w-full bg-gradient-to-r from-[#867343] to-[#a08c5c] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center h-auto w-auto">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#867343] to-[#a08c5c] rounded-xl flex items-center justify-center mb-4">
                                <Phone className="text-white" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600">(623) 387-5086</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center h-auto">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#867343] to-[#a08c5c] rounded-xl flex items-center justify-center mb-4">
                                <Mail className="text-white" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600">VelocityTaxExpress@gmail.com</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center h-auto">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#867343] to-[#a08c5c] rounded-xl flex items-center justify-center mb-4">
                                <MapPin className="text-white" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600">
                                11371 N 145th Ln <br />
                                Surprise, AZ 85379
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}