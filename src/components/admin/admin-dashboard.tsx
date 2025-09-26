"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Users, Settings, LogOut, FileText, LayoutDashboard, Plus, Search, Pin } from "lucide-react"
import { useLogout } from "@/features/auth/api/use-logout"
import { FcMoneyTransfer } from "react-icons/fc"
import { AdminUser } from "@/features/auth/types"

const sections = [
  {
    title: "General",
    items: [
      { title: "Dashboard Overview", desc: "Quick stats & system health", href: "/admin", icon: LayoutDashboard },
      { title: "Reports", desc: "Generate and export reports", href: "/admin/reports", icon: FileText },
      { title: "Quicklinks", desc: "Add, Update or Delete quicklinks content", href: "/admin/cms/resources/quicklinks", icon: Pin },
      { title: "Tax Refund Tracker", desc: "Add, Update or Delete tax refund tracker link", href: "/admin/cms/resources/taxrefund", icon: FcMoneyTransfer }
    ],
  },
  {
    title: "Management",
    items: [
      { title: "Users", desc: "Manage user accounts & roles", href: "/admin/users", icon: Users },
      { title: "Settings", desc: "System configuration", href: "/admin/settings", icon: Settings },
    ],
  },
  {
    title: "Account",
    items: [
      { title: "Logout", desc: "Sign out of the admin panel", href: "/admin/logout", icon: LogOut },
    ],
  },
]

export default function AdminDashboardClient({ user }: { user: AdminUser }) {
  const [query, setQuery] = useState("")
  const { mutate: logout } = useLogout()

  const filteredSections = useMemo(() => {
    if (!query.trim()) return sections
    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.desc.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((section) => section.items.length > 0)
  }, [query])

  return (
    <div className="min-h-screen flex">
      <main className="relative flex-1 p-10 pt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
        <p className="text-gray-500">Welcome, {user.name ?? "Admin"} 👋</p>

        {/* Search + Quick Actions */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative w-full sm:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users, reports, settings..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div className="flex gap-3">
            <Link
              href="/admin/users/new"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              <Plus className="w-4 h-4" /> Add User
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition"
            >
              <Settings className="w-4 h-4" /> Settings
            </Link>
          </div>
        </div>

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4 tracking-wide">
                  {section.title}
                </h3>
                <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden bg-white">
                  {section.items.map((item) =>
                    item.title === "Logout" ? (
                      <button
                        key={item.title}
                        onClick={() => logout()}
                        className="flex items-center gap-4 p-5 w-full text-left hover:bg-gray-50 transition hover:cursor-pointer"
                      >
                        <div className="p-2 rounded-md bg-gray-100 text-gray-700">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </button>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-4 p-5 hover:bg-gray-50 transition"
                      >
                        <div className="p-2 rounded-md bg-gray-100 text-gray-700">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No results found.</p>
          )}
        </div>
      </main>
    </div>
  )
}
