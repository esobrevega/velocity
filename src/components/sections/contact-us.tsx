import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export const ContactUs = () => {
    return (
        <section
            id="contact"
            className="min-h-screen relative flex items-center overflow-hidden rounded-b-[30px]"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/about.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left side (form) */}
                    <div className="lg:col-span-2 flex items-center">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-4xl font-extralight text-gray-900 mb-6">
                                Send us a message
                            </h3>
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

                    {/* Right side (contact cards) */}
                    <div className="space-y-5">
                        <a
                            href="tel:6233875086"
                            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-[#867343] to-[#a08c5c] rounded-xl flex items-center justify-center mb-4">
                                <Phone className="text-white" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-gray-600">(623) 387-5086</p>
                        </a>

                        <a
                            href="mailto:VelocityTaxExpress@gmail.com"
                            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-[#867343] to-[#a08c5c] rounded-xl flex items-center justify-center mb-4">
                                <Mail className="text-white" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-gray-600">VelocityTaxExpress@gmail.com</p>
                        </a>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=11371+N+145th+Ln,+Surprise,+AZ+85379"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-[#867343] to-[#a08c5c] rounded-xl flex items-center justify-center mb-4">
                                <MapPin className="text-white" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-gray-600">
                                11371 N 145th Ln <br />
                                Surprise, AZ 85379
                            </p>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}
