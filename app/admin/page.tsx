"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TestDataManager } from "@/components/test-data-manager";
import {
  Calendar,
  Users,
  Wrench,
  UserCheck,
  Clock,
  CheckCircle,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { AdminAuthGuard } from "@/components/admin-auth-guard";

interface DashboardStats {
  totalBookings: number;
  newBookings: number;
  scheduledBookings: number;
  completedBookings: number;
  totalClients: number;
  activeContractors: number;
  totalReferrers: number;
  recentBookings: any[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalBookings: 0,
    newBookings: 0,
    scheduledBookings: 0,
    completedBookings: 0,
    totalClients: 0,
    activeContractors: 0,
    totalReferrers: 0,
    recentBookings: [],
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchDashboardStats();
    setRefreshing(false);
  };

  const fetchDashboardStats = async () => {
    try {
      // Fetch bookings stats
      const { data: bookings } = await supabase.from("bookings").select("*");
      const { data: clients } = await supabase.from("clients").select("id");
      const { data: contractors } = await supabase
        .from("contractors")
        .select("*")
        .eq("status", "active");
      const { data: referrers } = await supabase.from("referrers").select("id");

      // Fetch recent bookings with client info
      const { data: recentBookings } = await supabase
        .from("bookings")
        .select(
          `
          *,
          clients (
            name,
            email
          )
        `
        )
        .order("created_at", { ascending: false })
        .limit(5);

      setStats({
        totalBookings: bookings?.length || 0,
        newBookings: bookings?.filter((b) => b.status === "new").length || 0,
        scheduledBookings:
          bookings?.filter((b) => b.status === "scheduled").length || 0,
        completedBookings:
          bookings?.filter((b) => b.status === "completed").length || 0,
        totalClients: clients?.length || 0,
        activeContractors: contractors?.length || 0,
        totalReferrers: referrers?.length || 0,
        recentBookings: recentBookings || [],
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new":
        return <AlertCircle className="w-4 h-4 text-blue-600" />;
      case "scheduled":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />;
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <AdminAuthGuard>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Dashboard Overview
            </h2>
            <p className="text-gray-600">
              Welcome to your Safe Home Installers admin dashboard
            </p>
          </div>
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
        </div>

        {/* Test Data Manager */}
        <TestDataManager />

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stats.totalBookings}
                  </div>
                  <div className="text-sm text-gray-600">Total Bookings</div>
                  <div className="text-xs text-blue-600 mt-1">
                    {stats.newBookings} new
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stats.totalClients}
                  </div>
                  <div className="text-sm text-gray-600">Total Clients</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Wrench className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stats.activeContractors}
                  </div>
                  <div className="text-sm text-gray-600">
                    Active Contractors
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <UserCheck className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stats.totalReferrers}
                  </div>
                  <div className="text-sm text-gray-600">Referrers</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Status Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {stats.newBookings}
                  </div>
                  <div className="text-sm text-gray-600">New Bookings</div>
                </div>
                <AlertCircle className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-yellow-600">
                    {stats.scheduledBookings}
                  </div>
                  <div className="text-sm text-gray-600">Scheduled</div>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {stats.completedBookings}
                  </div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Bookings</CardTitle>
              <Link
                href="/admin/bookings"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                View all →
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(booking.status)}
                    <div>
                      <div className="font-medium">{booking.service}</div>
                      <div className="text-sm text-gray-600">
                        {booking.clients?.name} • {booking.date} at{" "}
                        {booking.time_slot}
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status}
                  </Badge>
                </div>
              ))}

              {stats.recentBookings.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No recent bookings</p>
                  <Button
                    onClick={() => window.open("/booking", "_blank")}
                    className="mt-2"
                    variant="outline"
                    size="sm"
                  >
                    Test Booking Process
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/admin/bookings">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-medium">Manage Bookings</div>
                <div className="text-sm text-gray-600">
                  View and update bookings
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/clients">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="font-medium">Client Directory</div>
                <div className="text-sm text-gray-600">
                  View client information
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/contractors">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <Wrench className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="font-medium">Contractor Management</div>
                <div className="text-sm text-gray-600">Manage your team</div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/referrers">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <UserCheck className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="font-medium">Referrer Network</div>
                <div className="text-sm text-gray-600">
                  Track referral sources
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </AdminAuthGuard>
  );
}
