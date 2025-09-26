// app/admin/page.tsx (Server Component)
import { redirect } from "next/navigation"
import { getCurrent } from "@/features/auth/queries"
import AdminDashboardClient from "@/components/admin/admin-dashboard"

export default async function AdminDashboard() {
  const user = await getCurrent()
  if (!user) redirect("/admin/sign-in")

  return <AdminDashboardClient user={user} />
}
