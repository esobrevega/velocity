// app/resource/quicklinks/page.tsx (Server Component)
import { redirect } from "next/navigation"
import { getCurrent } from "@/features/auth/queries"
import QuicklinksCMSClient from "./client"

export default async function ServicesCMS() {
  const user = await getCurrent()
  if (!user) redirect("/admin/sign-in")

  return <QuicklinksCMSClient />
}
