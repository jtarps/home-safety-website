"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, Phone, Mail, MapPin, Calendar, Search } from "lucide-react";
import type { Client, Booking } from "@/lib/types";
import Link from "next/link";
import { AdminAuthGuard } from "@/components/admin-auth-guard";

interface ClientWithBookings extends Client {
  bookings: Booking[];
}

function exportClientsToCSV(clients: any[]) {
  const headers = [
    "Name",
    "Email",
    "Phone",
    "Address",
    "Referral Source",
    "Notes",
  ];
  const rows = clients.map((client) => [
    client.name,
    client.email,
    client.phone,
    client.address,
    client.referral_source,
    client.notes?.replace(/\n/g, " ") || "",
  ]);
  const csvContent = [headers, ...rows]
    .map((e) => e.map((x) => `"${(x || "").replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute(
    "download",
    `clients-${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function ClientsPage() {
  const [clients, setClients] = useState<ClientWithBookings[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from("clients")
        .select(
          `
          *,
          bookings (
            id,
            service,
            status,
            date,
            time_slot
          )
        `
        )
        .order("name");

      if (error) throw error;
      setClients(data || []);
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredClients = clients.filter((client) => {
    if (!searchTerm) return true;

    const searchLower = searchTerm.toLowerCase();
    return (
      client.name?.toLowerCase().includes(searchLower) ||
      client.email?.toLowerCase().includes(searchLower) ||
      client.phone?.includes(searchTerm)
    );
  });

  const getBookingStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "scheduled":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading clients...</div>
      </div>
    );
  }

  return (
    <AdminAuthGuard>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Clients</h2>
            <p className="text-gray-600">
              {filteredClients.length} total clients
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => exportClientsToCSV(filteredClients)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium"
            >
              Export to CSV
            </button>
            <Search className="w-4 h-4 text-gray-500" />
            <Input
              placeholder="Search clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {filteredClients.map((client) => (
            <Card key={client.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{client.name}</CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>First job: {client.first_job_date || "N/A"}</span>
                      </div>
                      <Badge variant="outline">
                        {client.bookings?.length || 0} booking
                        {client.bookings?.length !== 1 ? "s" : ""}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">
                      Contact Information
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{client.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{client.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-xs">{client.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">
                      Recent Bookings
                    </h4>
                    <div className="space-y-2">
                      {client.bookings?.slice(0, 3).map((booking) => (
                        <div
                          key={booking.id}
                          className="flex items-center justify-between text-sm"
                        >
                          <span>{booking.service}</span>
                          <Badge
                            className={getBookingStatusColor(booking.status)}
                            variant="secondary"
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      ))}
                      {client.bookings?.length === 0 && (
                        <p className="text-sm text-gray-500">No bookings yet</p>
                      )}
                      {client.bookings && client.bookings.length > 3 && (
                        <Link
                          href={`/admin/bookings?client=${client.id}`}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          View all {client.bookings.length} bookings →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {client.notes && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Notes</h4>
                    <p className="text-sm text-gray-600">{client.notes}</p>
                  </div>
                )}

                {client.referral_source && (
                  <div className="text-sm text-gray-600">
                    <strong>Referral source:</strong> {client.referral_source}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No clients found
            </h3>
            <p className="text-gray-600">
              {searchTerm
                ? "Try adjusting your search terms."
                : "New clients will appear here when they make bookings."}
            </p>
          </div>
        )}
      </div>
    </AdminAuthGuard>
  );
}
