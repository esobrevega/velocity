import TestPdf from "@/components/test-pdf";
import { redirect } from "next/navigation";

export default function Test() {
  redirect("/")

  return <TestPdf/>  ;
}
