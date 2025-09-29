"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useGetTrs } from "@/features/taxrefund/api/use-get-trs"
import { TaxRefundType } from "@/features/taxrefund/types"

export default function TaxRefundTrackerSection() {
  const { data, isLoading, isError } = useGetTrs()
  const [selectedState, setSelectedState] = useState("")
  const [stateLinks, setStateLinks] = useState<{ [key: string]: string }>({})
  const [recentStates, setRecentStates] = useState<string[]>([])

  // Load recent states from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("recentStates")
    if (stored) setRecentStates(JSON.parse(stored))
  }, [])

  // Populate stateLinks from fetched data
  useEffect(() => {
    if (data?.documents) {
      const links: { [key: string]: string } = {}
      data.documents.forEach((doc: TaxRefundType) => {
        links[doc.state] = doc.href
      })
      setStateLinks(links)
    }
  }, [data])

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const state = e.target.value
    setSelectedState(state)
    if (stateLinks[state]) {
      // Save state to recent list
      const updated = [state, ...recentStates.filter((s) => s !== state)].slice(0, 5)
      setRecentStates(updated)
      localStorage.setItem("recentStates", JSON.stringify(updated))

      window.open(stateLinks[state], "_blank")
    }
  }

  const handleRecentClick = (state: string) => {
    if (stateLinks[state]) {
      window.open(stateLinks[state], "_blank")
    }
  }

  if (isLoading) return <p className="text-center py-20">Loading tax refund states...</p>
  if (isError) return <p className="text-center py-20">Failed to load states</p>

  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f7fa] to-[#eaeef3]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Track Your Tax Refund
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Quickly check your state tax refund status. Select your state from the
          dropdown below and we’ll take you to the official refund tracking
          website.
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md mx-auto">
          <label
            htmlFor="state-select"
            className="block text-sm font-medium text-gray-700 mb-2 text-left"
          >
            Choose your state
          </label>

          <div className="relative">
            <select
              id="state-select"
              value={selectedState}
              onChange={handleSelectChange}
              className="block w-full appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 shadow-sm focus:ring-2 focus:ring-[#867343] focus:border-[#867343] text-gray-900 cursor-pointer"
            >
              <option value="">Select Your State</option>
              {Object.keys(stateLinks).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
          </div>

          <p className="mt-3 text-xs text-gray-500">
            You’ll be redirected to the official state tax refund tracker.
          </p>

          {/* Recently Accessed Section */}
          {recentStates.length > 0 && (
            <div className="mt-6 text-left">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Recently Accessed:
              </p>
              <ul className="space-y-1">
                {recentStates.map((state) => (
                  <li key={state}>
                    <button
                      onClick={() => handleRecentClick(state)}
                      className="text-[#867343] hover:underline hover:cursor-pointer text-sm"
                    >
                      {state} Tax Refund Tracker
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
