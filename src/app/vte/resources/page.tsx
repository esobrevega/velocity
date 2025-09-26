"use client"

import { useState, useEffect } from "react"
import TaxRefundTrackerSection from "@/components/resources/quicklinks/tax-refund"
import { ContactUs } from "@/components/sections/contact-us"
import { useGetQls } from "@/features/quicklinks/api/use-get-qls"
import { ExternalLink } from "lucide-react"
import { getFileUrl } from "@/lib/utils"
import { Quicklinks, QuicklinkType } from "@/features/quicklinks/types"
import Image from "next/image"

export default function ResourcesPage() {
  const { data, isLoading, isError } = useGetQls()
  const [search, setSearch] = useState("")
  const [quicklinks, setQuicklinks] = useState<QuicklinkType[]>([])

  // Map backend quicklinks into state
  useEffect(() => {
    if (data) {
      setQuicklinks(
        data.documents.map((doc: Quicklinks) => ({
          id: doc.$id,
          title: doc.title,
          href: doc.href,
          img: getFileUrl(doc.imageUrl),
          desc: doc.description,
        }))
      )
    }
  }, [data])

  // Filter client-side by search
  const filteredLinks = quicklinks.filter(
    (link) =>
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      link.desc.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <section className="min-h-screen bg-gray-200">
        {/* Hero Section */}
        <div className="relative mx-5 top-20">
          <Image
            src="/resource.jpg"
            alt="Background"
            width={800}
            height={200}
            className="w-full h-50 object-cover rounded-3xl"
          />
          <div className="absolute inset-0 h-50 rounded-3xl bg-black/60"></div>
          <div className="absolute inset-0 h-50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-light tracking-wide">
              RESOURCES
            </h1>
          </div>
        </div>


        {/* Search + Quicklinks */}
        <div className="max-w-full mx-10 px-6 py-20 mt-10">
          <h1 className="text-3xl font-bold mb-8">📌 Quicklinks</h1>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search quicklinks..."
            className="w-full max-w-md px-4 py-2 mb-8 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#867343] focus:outline-none"
          />

          {isLoading ? (
            <p className="text-gray-600">Loading quicklinks...</p>
          ) : isError ? (
            <p className="text-red-500">Failed to fetch quicklinks.</p>
          ) : filteredLinks.length === 0 ? (
            <p className="text-gray-500">No quicklinks found.</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
                >
                  {link.img ? (
                    <Image
                      src={link.img as string}
                      alt={link.title}
                      width={400}       
                      height={160}      
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <h1 className="text-lg font-semibold text-[#867343]">
                        {link.title}
                      </h1>
                      <ExternalLink className="w-4 h-4 text-[#867343]" />
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-3 mt-2">
                      {link.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Other sections */}
      <TaxRefundTrackerSection />
      <ContactUs />
    </div>
  )
}
