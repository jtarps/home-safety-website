"use client";

import { useState, useEffect } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  Filter,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import type { Booking, Contractor, BookingStatus } from "@/lib/types";
import { AdminAuthGuard } from "@/components/admin-auth-guard";

function exportBookingsToCSV(bookings: any[]) {
  const headers = [
    "Service(s)",
    "Date",
    "Time",
    "Client Name",
    "Client Email",
    "Status",
    "Notes",
  ];
  const rows = bookings.map((booking) => [
    booking.service,
    booking.date,
    booking.time_slot,
    booking.clients?.name,
    booking.clients?.email,
    booking.status,
    booking.notes?.replace(/\n/g, " ") || "",
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
    `bookings-${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setError(
        "Supabase configuration error. Please check environment variables."
      );
      setLoading(false);
      return;
    }

    fetchData();

    // Set up real-time subscription
    const channel = supabase
      .channel("public:bookings")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "bookings",
        },
        (payload) => {
          console.log("Booking change:", payload);
          fetchBookings(); // Refresh bookings on any change
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchData = async () => {
    await Promise.all([fetchBookings(), fetchContractors()]);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select(
          `
          *,
          clients (
            id,
            name,
            phone,
            email,
            address
          ),
          contractors (
            id,
            name,
            region
          )
        `
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      setBookings(data || []);
      setError(null);
    } catch (error: any) {
      console.error("Error fetching bookings:", error);

      if (
        error.message?.includes("relation") &&
        error.message?.includes("does not exist")
      ) {
        setError(
          "Database tables not found. Please run the setup SQL script in your Supabase dashboard."
        );
      } else if (error.message?.includes("JWT")) {
        setError("Authentication error. Please check your Supabase keys.");
      } else {
        setError(
          `Failed to fetch bookings: ${error.message || "Unknown error"}`
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchContractors = async () => {
    try {
      const { data, error } = await supabase
        .from("contractors")
        .select("*")
        .eq("status", "active");

      if (error) throw error;
      setContractors(data || []);
    } catch (error) {
      console.error("Error fetching contractors:", error);
    }
  };

  const updateBookingStatus = async (
    bookingId: string,
    status: BookingStatus
  ) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status })
        .eq("id", bookingId);

      if (error) throw error;

      // Update local state
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === bookingId ? { ...booking, status } : booking
        )
      );
    } catch (error) {
      console.error("Error updating booking status:", error);
      setError("Failed to update booking status.");
    }
  };

  const assignContractor = async (bookingId: string, contractorId: string) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({
          contractor_id: contractorId,
          status: "scheduled",
        })
        .eq("id", bookingId);

      if (error) throw error;

      fetchBookings(); // Refresh to get updated contractor info
    } catch (error) {
      console.error("Error assigning contractor:", error);
      setError("Failed to assign contractor.");
    }
  };

  const getStatusColor = (status: string) => {
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

  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;
    const matchesSearch =
      !searchTerm ||
      booking.clients?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.clients?.email
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      booking.service?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading bookings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Database Setup Required</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">
              If you haven't set up the database tables yet, please run the
              setup SQL script in your Supabase dashboard:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
              <li>Go to your Supabase project dashboard</li>
              <li>Navigate to the SQL Editor</li>
              <li>
                Copy and paste the contents of{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  scripts/setup-database.sql
                </code>
              </li>
              <li>Click "Run" to create the tables and sample data</li>
            </ol>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Retry Connection
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <AdminAuthGuard>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Bookings</h2>
            <p className="text-gray-600">
              {filteredBookings.length} total bookings
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => exportBookingsToCSV(filteredBookings)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium"
            >
              Export to CSV
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center gap-2 bg-transparent"
            >
              <RefreshCw
                className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>

            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Input
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {filteredBookings.map((booking) => (
            <Card key={booking.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{booking.service}</CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{booking.time_slot}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Client Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">
                      Client Information
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>{booking.clients?.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{booking.clients?.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{booking.clients?.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-xs">
                          {booking.clients?.address}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Assignment</h4>
                    <div className="space-y-3">
                      <Select
                        value={booking.contractor_id || ""}
                        onValueChange={(value) =>
                          assignContractor(booking.id, value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Assign contractor" />
                        </SelectTrigger>
                        <SelectContent>
                          {contractors.map((contractor) => (
                            <SelectItem
                              key={contractor.id}
                              value={contractor.id}
                            >
                              {contractor.name} ({contractor.region})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select
                        value={booking.status}
                        onValueChange={(value: BookingStatus) =>
                          updateBookingStatus(booking.id, value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {booking.notes && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Notes</h4>
                    <p className="text-sm text-gray-600">{booking.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBookings.length === 0 && !error && (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No bookings found
            </h3>
            <p className="text-gray-600">
              {statusFilter !== "all" || searchTerm
                ? "Try adjusting your filters or search terms."
                : "New bookings will appear here after customers complete the booking process."}
            </p>
            <Button
              onClick={() => window.open("/booking", "_blank")}
              className="mt-4"
              variant="outline"
            >
              Test Booking Process
            </Button>
          </div>
        )}
      </div>
    </AdminAuthGuard>
  );
}
