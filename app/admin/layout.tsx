"use client";

import type React from "react";
import { Header } from "@/components/header";
import { SupabaseStatus } from "@/components/supabase-status";
import { EnvDebug } from "@/components/env-debug";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Users,
  Wrench,
  UserCheck,
  LayoutDashboard,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      href: "/admin",
      icon: LayoutDashboard,
      label: "Dashboard",
      color: "text-gray-600",
    },
    {
      href: "/admin/bookings",
      icon: Calendar,
      label: "Bookings",
      color: "text-blue-600",
    },
    {
      href: "/admin/clients",
      icon: Users,
      label: "Clients",
      color: "text-green-600",
    },
    {
      href: "/admin/contractors",
      icon: Wrench,
      label: "Contractors",
      color: "text-orange-600",
    },
    {
      href: "/admin/referrers",
      icon: UserCheck,
      label: "Referrers",
      color: "text-purple-600",
    },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mb-4">
            Manage bookings, clients, contractors, and referrers
          </p>
          <EnvDebug />
          <SupabaseStatus />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-2 mb-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg border transition-colors ${
                      isActive
                        ? "bg-blue-50 border-blue-200 text-blue-900"
                        : "bg-white border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        isActive ? "text-blue-600" : item.color
                      }`}
                    />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            <Button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 text-white mt-4"
            >
              Log Out
            </Button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
