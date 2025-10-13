"use client";

import { useState } from "react";
import { useGetContacts } from "@/features/contact/api/use-get-contacts";
import {
  Loader2,
  Mail,
  User,
  Phone,
  Briefcase,
  Clock,
  MessageSquare,
} from "lucide-react";
import { ContactUs } from "@/features/contact/types";

export default function MessagesPageClient() {
  const { data, isLoading, isError } = useGetContacts();
  const [selected, setSelected] = useState<any | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <Loader2 className="w-5 h-5 animate-spin mr-2" />
        Loading messages...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load messages.
      </div>
    );
  }

  const messages = data?.documents || [];

  return (
    <section className="relative top-20 mb-20 h-[calc(100vh-80px)] flex border border-gray-200 rounded-xl overflow-hidden">
      {/* Sidebar */}
      <aside className="w-1/3 border-r border-gray-200 bg-gray-50 overflow-y-auto">
        <div className="p-4 border-b bg-white font-semibold text-gray-700">
          Inbox ({messages.length})
        </div>

        {messages.length === 0 ? (
          <p className="text-gray-500 text-sm p-4">No messages yet.</p>
        ) : (
          <ul>
            {messages.map((msg: ContactUs) => (
              <li
                key={msg.$id}
                onClick={() => setSelected(msg)}
                className={`p-4 border-b cursor-pointer hover:bg-gray-100 transition ${
                  selected?.$id === msg.$id ? "bg-gray-100" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-800 truncate">
                    {msg.name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {new Date(msg.$createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-xs text-gray-500 truncate">{msg.email}</p>
                <p className="text-sm text-gray-700 truncate mt-1">
                  {msg.message || "No message provided"}
                </p>
              </li>
            ))}
          </ul>
        )}
      </aside>

      {/* Message Details */}
      <main className="flex-1 p-6 bg-white overflow-y-auto">
        {selected ? (
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                New {" "} {selected.service} Inquiry 
              </h2>
              <p className="text-gray-500 text-sm">
                Received:{" "}
                {new Date(selected.$createdAt).toLocaleString(undefined, {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-500" />
                <span className="font-medium">{selected.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>{selected.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>{selected.phoneNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-gray-500" />
                <span>{selected.service}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{selected.time}</span>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-gray-500" />
                <h3 className="font-medium text-gray-800">Message</h3>
              </div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selected.message || "No message provided."}
              </p>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            Select a message to view details
          </div>
        )}
      </main>
    </section>
  );
}
