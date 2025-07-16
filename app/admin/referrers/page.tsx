"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Building, Mail, Calendar, TrendingUp } from "lucide-react";
import type { Referrer } from "@/lib/types";
import { AdminAuthGuard } from "@/components/admin-auth-guard";

export default function ReferrersPage() {
  const [referrers, setReferrers] = useState<Referrer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReferrers();
  }, []);

  const fetchReferrers = async () => {
    try {
      const { data, error } = await supabase
        .from("referrers")
        .select("*")
        .order("total_referrals", { ascending: false });

      if (error) throw error;
      setReferrers(data || []);
    } catch (error) {
      console.error("Error fetching referrers:", error);
    } finally {
      setLoading(false);
    }
  };

  const getReferralBadge = (count: number) => {
    if (count >= 50)
      return { text: "Top Referrer", color: "bg-purple-100 text-purple-800" };
    if (count >= 20)
      return { text: "High Volume", color: "bg-blue-100 text-blue-800" };
    if (count >= 10)
      return { text: "Active", color: "bg-green-100 text-green-800" };
    if (count >= 5)
      return { text: "Regular", color: "bg-yellow-100 text-yellow-800" };
    return { text: "New", color: "bg-gray-100 text-gray-800" };
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading referrers...</div>
      </div>
    );
  }

  return (
    <AdminAuthGuard>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Referrers</h2>
            <p className="text-gray-600">
              {referrers.length} total referrers,{" "}
              {referrers.reduce((sum, r) => sum + r.total_referrals, 0)} total
              referrals
            </p>
          </div>
        </div>

        {/* Top Referrers Summary */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {Math.max(...referrers.map((r) => r.total_referrals), 0)}
                  </div>
                  <div className="text-sm text-gray-600">Top Referrer</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {referrers.filter((r) => r.total_referrals >= 10).length}
                  </div>
                  <div className="text-sm text-gray-600">Active Referrers</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Building className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {new Set(referrers.map((r) => r.clinic)).size}
                  </div>
                  <div className="text-sm text-gray-600">Partner Clinics</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4">
          {referrers.map((referrer) => {
            const badge = getReferralBadge(referrer.total_referrals);

            return (
              <Card key={referrer.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{referrer.name}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span>{referrer.clinic}</span>
                        </div>
                        {referrer.last_referral_date && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              Last referral: {referrer.last_referral_date}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={badge.color}>{badge.text}</Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {referrer.total_referrals}
                        </div>
                        <div className="text-xs text-gray-500">referrals</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{referrer.email}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {referrers.length === 0 && (
          <div className="text-center py-12">
            <UserCheck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No referrers found
            </h3>
            <p className="text-gray-600">
              Referrer data will appear here as clients specify referral
              sources.
            </p>
          </div>
        )}
      </div>
    </AdminAuthGuard>
  );
}
