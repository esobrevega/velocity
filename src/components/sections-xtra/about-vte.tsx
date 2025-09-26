import { Users } from "lucide-react"
import { StatsCount } from "../stats-counting"

export const AboutVte = () => {
    return (
        <section id="about" className="min-h-screen py-30 bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-2">
                <div className="grid lg:grid-cols-[70%_30%] gap-10 items-center">

                    {/* Left Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-[#867343] text-sm font-medium">
                                <Users className="w-4 h-4 mr-2" />
                                Why Choose Us
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                Your Trusted
                                <span className="block bg-gradient-to-r from-[#867343] to-[#a08c5c] bg-clip-text text-transparent">
                                    Tax & Financial Partners
                                </span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                VELOCITY TAX EXPRESS provides unparalleled personalized tax services. As your Tax & Financial Professionals, we are here to ensure that all of your financial decisions are made carefully and with your best interests in mind. We are ready and able to serve as your financial professional and guide along your path to success.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Personalized Approach",
                                    desc: "Every client receives customized solutions tailored to their unique financial situation and goals."
                                },
                                {
                                    title: "Expert Guidance",
                                    desc: "Our experienced team stays current with tax laws and financial strategies to serve you better."
                                },
                                {
                                    title: "Long-term Partnership",
                                    desc: "We're committed to being your trusted advisor throughout your financial journey."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-[#867343] to-[#a08c5c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-white font-bold text-sm">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative">
                        <img
                            src="/herobg2.png"
                            alt="Our Team"
                            className="w-full h-auto rounded-2xl shadow-lg object-cover"
                        />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-14">
                    <StatsCount />
                </div>
            </div>
        </section>
    )
}
