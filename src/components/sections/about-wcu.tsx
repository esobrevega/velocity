"use client"

import { Handshake, ShieldCheck, Star, Users } from "lucide-react"
import { StatsCount } from "../stats-counting"
import Image from "next/image"

export const AboutVteWCU = () => {
    const features = [
        {
            title: "Personalized Approach",
            desc: "Tailored solutions for your unique financial goals.",
            icon: <Users className="w-6 h-6" />,
        },
        {
            title: "Expert Guidance",
            desc: "Up-to-date strategies from experienced professionals.",
            icon: <Star className="w-6 h-6" />,
        },
        {
            title: "Long-term Partnership",
            desc: "Support through every stage of your financial journey.",
            icon: <Handshake className="w-6 h-6" />,
        },
        {
            title: "Transparent Process",
            desc: "Clear communication and full visibility at every step.",
            icon: <ShieldCheck className="w-6 h-6" />,
        },
    ]

    return (
        <section
            id="about"
            className="relative min-h-screen py-20 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="mx-6 sm:mx-10 lg:mx-16 px-4 sm:px-6 lg:px-8 space-y-10">
                {/* Top Logo */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/logo-vte.png"
                        alt="VELOCITY TAX EXPRESS Logo"
                        width={150}   
                        height={150} 
                        className="w-40 sm:w-52 lg:w-150 rounded-full border-4 border-[#867343] object-cover"
                    />
                </div>

                {/* Header */}
                <div className="space-y-4 text-start mb-20">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-[#867343] text-sm font-medium">
                        <Users className="w-4 h-4 mr-2" />
                        Why Choose Us
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 lg:mb-0">
                            Your Trusted{" "}
                            <span className="block bg-gradient-to-r from-[#867343] to-[#a08c5c] bg-clip-text text-transparent">
                                Tax & Financial Partners
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-black max-w-md lg:max-w-sm">
                            VELOCITY TAX EXPRESS provides unparalleled personalized tax
                            services. We ensure that all your financial decisions are made
                            carefully and with your best interests in mind.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8 px-6 sm:px-10 lg:px-16">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="relative p-6 rounded-2xl bg-white shadow-lg transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl group"
                            style={{ zIndex: features.length - i }}
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 flex items-center justify-center bg-white text-[#867343] rounded-2xl mb-4 text-2xl group-hover:bg-white group-hover:text-[#867343] transition-colors duration-300">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm sm:text-sm text-gray-700 group-hover:text-white transition-colors duration-300">
                                {feature.desc}
                            </p>

                            {/* Card background inversion */}
                            <div className="absolute inset-0 rounded-2xl bg-[#867343] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[-1]"></div>
                        </div>
                    ))}
                </div>
            </div>




            {/* Stats */}
            <div className="flex flex-col items-center mt-20">
                <StatsCount />
            </div>
        </section >
    )
}
