// app/resource/taxrefund/page.tsx (Server Component)
import { redirect } from "next/navigation"
import { getCurrent } from "@/features/auth/queries"
import MessagesPageClient from "./client"

export default async function MessagesPage() {
  const user = await getCurrent()
  if (!user) redirect("/admin/sign-in")

  return <MessagesPageClient />
}