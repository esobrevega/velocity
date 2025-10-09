"use client";

import Image from "next/image";

const teamMembers = [
    {
        name: "Melani",
        languages: "English - Tagalog",
        bio: "Tax Professional, Bookkeeper / Accountant / Payroll Specialist and Life & Health Insurance Agent",
        image: "/mel_allen.jpg",
    },
    {
        name: "Crystal",
        languages: "English - Spanish",
        bio: "Tax Professional and Life & Health Insurance Agent",
        image: "/crystal-mata.JPG",
    },
    {
        name: "Monica",
        languages: "English - Spanish",
        bio: "Tax Professional, Real Estate Agent, Life & Health Insurance Agent, Business Consultant, Legal Document Preparer and Notary Public",
        image: "/monica1.jpg",
    },
    {
        name: "Mila",
        languages: "English - Tagalog - Ilocano",
        bio: "Tax Professional, Real Estate Agent, Life & Health / Medicare Insurance Agent, Notary Public and Military Veteran",
        image: "/mila1.JPG",
    },
    {
        name: "Joseph",
        languages: "English - Tagalog - Ilocano",
        bio: "Tax Professional, Real Estate Agent, Life & Health / Medicare Insurance Agent",
        image: "/joseph.JPG",
    },
    {
        name: "Angelica",
        languages: "English - Spanish",
        bio: "Tax Professional & Notary Public",
        image: "/angelica.jpg",
    },
    {
        name: "Jeng",
        languages: "English - Tagalog - Ilocano",
        bio: "Tax Professional, Life & Health Insurance Agent",
        image: "/jeng.JPG",
    },
];

export default function MeetTheTeamPage() {
    return (
        <section className="rounded-b-3xl space-y-12 min-h-screen bg-white overflow-hidden">
            {/* About Us Section */}
            <div className="bg-[#f9f1e6] text-center">
                <h1 className="pt-40 pb-30 text-6xl font-thin bg-[#f9f1e6]">About Us</h1>
            </div>

            <div className="mb-10">
                <div className="max-w-3xl mx-auto text-center px-6 py-16 space-y-10">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <Image
                            src="/logo-vte.png"
                            alt="Velocity Tax Express Logo"
                            width={250}
                            height={250}
                            className="sm:w-40 lg:w-100 rounded-full border-3 border-[#867343] shadow-xl object-cover"
                        />
                    </div>

                    {/* Intro */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We are a passionate team dedicated to delivering outstanding services and solutions.
                        Our mission is to empower individuals and businesses to achieve their goals with
                        innovation, creativity, and integrity.
                    </p>

                    {/* Mission */}
                    <div className="space-y-3">
                        <h2 className="text-3xl font-semibold text-[#867343]">Our Mission</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We are here to ensure that all of your financial decisions are made carefully and
                            with your best interests in mind.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="space-y-3">
                        <h2 className="text-3xl font-semibold text-[#867343]">Our Vision</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We are ready and able to serve and guide you along your path to success.
                        </p>
                    </div>
                </div>



                {/* Meet the Team Section */}
                <div className="mt-16">
                    <h2 className="text-5xl font-thin text-center mb-10">Meet the Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 mx-10">
                        {teamMembers.map((member, i) => {
                            const isDefaultHovered = i === 3
                            const orderClasses = [
                                "order-4 sm:order-1",
                                "order-5 sm:order-2",
                                "order-2 sm:order-3",
                                "order-1 sm:order-4",
                                "order-3 sm:order-5",
                                "order-6 sm:order-6",
                                "order-7 sm:order-7",
                            ]

                            return (
                                <div
                                    key={i}
                                    className={`relative rounded-2xl p-4 flex flex-col items-center text-center 
                                                transition-transform duration-300 ease-in-out
                                                sm:hover:scale-110 sm:hover:shadow-2xl sm:hover:z-50
                                                ${isDefaultHovered ? "sm:scale-110 sm:shadow-2xl sm:z-40" : ""}
                                                ${orderClasses[i]}`}
                                >
                                    <div className="w-65 h-65 relative mb-4 rounded-full border-4 border-[#867343] overflow-hidden">
                                        <div className="w-full h-full relative rounded-full overflow-hidden">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <p className="text-gray-700 text-xs">{member.languages}</p>
                                    <p className="text-gray-900 text-sm mt-4">{member.bio}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
