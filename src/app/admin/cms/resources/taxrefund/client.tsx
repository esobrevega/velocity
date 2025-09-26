"use client"

import { useEffect, useState, useMemo } from "react"
import { Pencil, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useGetTrs } from "@/features/taxrefund/api/use-get-trs"
import { useDeleteTaxrefund } from "@/features/taxrefund/api/use-delete-tr"
import AddTRForm from "@/components/resources/taxrefund/create-tr-form"
import EditTRForm from "@/components/resources/taxrefund/edit-tr-form"
import { ConfirmDeleteDialog } from "@/components/ConfimDeleteDialog"
import { TaxRefunds } from "@/features/taxrefund/types"

type TRType = {
  id: string
  state: string
  href: string
}

export default function TaxRefundCMS() {
  const { data, isLoading, isError } = useGetTrs()
  const { mutate: deleteTR, isPending: isDeleting } = useDeleteTaxrefund()

  const [trs, setTRs] = useState<TRType[]>([])
  const [adding, setAdding] = useState(false)
  const [editingTR, setEditingTR] = useState<TRType | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (data) {
      setTRs(data.documents.map((doc: TaxRefunds) => ({
        id: doc.$id,
        state: doc.state,
        href: doc.href
      })))
    }
  }, [data])

  const handleDelete = (id: string) => {
    deleteTR({ param: { trsId: id } })
  }

  const filteredTRs = useMemo(() => {
    return trs.filter(tr =>
      tr.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tr.href.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [trs, searchQuery])

  if (isLoading) return <p>Loading tax refund states...</p>
  if (isError) return <p>Error loading data</p>

  return (
    <div className="flex flex-col p-8 mt-20">
      <h1 className="text-3xl font-bold mb-6">💰 Tax Refund Tracker CMS</h1>

      {/* Search + Add */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search states or URLs..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#867343] focus:border-[#867343]"
        />

        <Dialog open={adding} onOpenChange={setAdding}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white">
              <Plus className="w-5 h-5" /> Add New State
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Tax Refund State</DialogTitle>
            </DialogHeader>
            <AddTRForm setAdding={setAdding} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow border">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">State</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Tax Refund URL</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTRs.map(tr => (
              <tr key={tr.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4">{tr.state}</td>
                <td className="px-6 py-4 max-w-xs">
                  <a
                    href={tr.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline block truncate"
                    title={tr.href} // shows full URL on hover
                  >
                    {tr.href}
                  </a>
                </td>
                <td className="px-6 py-4 flex justify-end gap-2">

                  {/* Edit Modal */}
                  <Dialog open={editingTR?.id === tr.id} onOpenChange={() => setEditingTR(null)}>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit {tr.state}</DialogTitle>
                      </DialogHeader>
                      <EditTRForm tr={tr} setEditingId={() => setEditingTR(null)} />
                    </DialogContent>
                    <Button
                      onClick={() => setEditingTR(tr)}
                      className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200"
                    >
                      <Pencil className="w-4 h-4 text-yellow-700" />
                    </Button>
                  </Dialog>

                  {/* Delete */}
                  <ConfirmDeleteDialog
                    title={tr.state}
                    description={`This will permanently delete "${tr.state}"`}
                    isLoading={isDeleting}
                    onConfirm={() => handleDelete(tr.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
