"use client";

import { useEffect, useState } from "react";
import { Pencil, Plus, ExternalLink } from "lucide-react";
import AddQLForm from "@/components/resources/quicklinks/create-ql-form";
import { useGetQls } from "@/features/quicklinks/api/use-get-qls";
import { getFileUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EditQLForm } from "@/components/resources/quicklinks/update-ql-form";
import { useDeleteQuicklink } from "@/features/quicklinks/api/use-delete-ql";
import { ConfirmDeleteDialog } from "@/components/ConfimDeleteDialog";
import { Quicklinks, QuicklinkType } from "@/features/quicklinks/types";
import Image from "next/image";


const formatUrl = (url: string) =>
  url.startsWith("http://") || url.startsWith("https://")
    ? url
    : "https://" + url;

export default function QuicklinksCMSClient() {
  const { data, isLoading, isError } = useGetQls();
  const { mutate: deleteQL, isPending: isDeleting } = useDeleteQuicklink();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [adding, setAdding] = useState(false);
  const [links, setLinks] = useState<QuicklinkType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Map backend data to include proper image URL
  useEffect(() => {
    if (data) {
      setLinks(
        data.documents.map((doc: Quicklinks) => ({
          id: doc.$id,
          title: doc.title,
          href: doc.href,
          img: getFileUrl(doc.imageUrl),
          desc: doc.description,
        }))
      );
    }
  }, [data]);

  // Filter client-side
  const filteredLinks = links.filter(
    (link) =>
      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.href.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <p>Loading quicklinks...</p>;
  if (isError) return <p>Error fetching quicklinks</p>;

  return (
    <div className="relative min-h-screen p-8 mx-20 top-20">
      <h1 className="text-3xl font-bold mb-8">📌 Quicklinks CMS</h1>

      {/* Search bar */}
      <div className="mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search quicklinks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-sm px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#867343]"
        />
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredLinks.map((link) =>
          editingId === link.id ? (
            <EditQLForm key={link.id} link={link} setEditingId={setEditingId} />
          ) : (
            <div
              key={link.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border"
            >
              {link.img ? (
                <Image
                  src={link.img as string}
                  alt={link.title}
                  width={400}         
                  height={128}        
                  className="w-full h-32 object-cover"
                />
              ) : (
                <div className="w-full h-32 bg-gray-100 flex items-center justify-center rounded-md text-gray-400">
                  No Image
                </div>
              )}

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg text-[#867343]">
                    {link.title}
                  </h2>
                  <a
                    href={formatUrl(link.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 text-[#867343]" />
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-2">{link.desc}</p>
                <div className="flex justify-end gap-3 mt-3">
                  <Button
                    onClick={() => {
                      setEditingId(link.id);
                    }}
                    className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200"
                  >
                    <Pencil className="w-4 h-4 text-yellow-700" />
                  </Button>
                  <ConfirmDeleteDialog
                    title={link.title}
                    description={`This will permanently delete "${link.title}".`}
                    isLoading={isDeleting}
                    onConfirm={() => deleteQL({ param: { qlsId: link.id } })}
                  />
                </div>
              </div>
            </div>
          )
        )}

        {adding ? (
          <AddQLForm setAdding={setAdding} />
        ) : (
          <Button
            onClick={() => setAdding(true)}
            className="w-full h-full flex flex-col items-center justify-center bg-gray-100/90 rounded-xl border-2 border-dashed text-gray-500 hover:bg-gray-200 transition"
          >
            <Plus className="w-8 h-8 mb-2" />
            <span>Add Quicklink</span>
          </Button>
        )}
      </div>
    </div>
  );
}
