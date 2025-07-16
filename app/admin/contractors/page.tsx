"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Wrench, MapPin, Award, Plus } from "lucide-react";
import type { Contractor } from "@/lib/types";
import { AdminAuthGuard } from "@/components/admin-auth-guard";

export default function ContractorsPage() {
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [newContractor, setNewContractor] = useState({
    name: "",
    region: "",
    skills: "",
    availability: "",
    rating: "",
  });

  useEffect(() => {
    fetchContractors();
  }, []);

  const fetchContractors = async () => {
    try {
      const { data, error } = await supabase
        .from("contractors")
        .select("*")
        .order("name");

      if (error) throw error;
      setContractors(data || []);
    } catch (error) {
      console.error("Error fetching contractors:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleContractorStatus = async (
    contractorId: string,
    currentStatus: string
  ) => {
    const newStatus = currentStatus === "active" ? "on_leave" : "active";

    try {
      const { error } = await supabase
        .from("contractors")
        .update({ status: newStatus })
        .eq("id", contractorId);

      if (error) throw error;

      setContractors((prev) =>
        prev.map((contractor) =>
          contractor.id === contractorId
            ? { ...contractor, status: newStatus }
            : contractor
        )
      );
    } catch (error) {
      console.error("Error updating contractor status:", error);
    }
  };

  const handleAddContractor = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const skillsArray = newContractor.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0);

      const { data, error } = await supabase
        .from("contractors")
        .insert({
          name: newContractor.name,
          region: newContractor.region,
          skills: skillsArray,
          availability: newContractor.availability,
          rating: newContractor.rating
            ? Number.parseFloat(newContractor.rating)
            : null,
          completed_jobs: 0,
          status: "active",
        })
        .select()
        .single();

      if (error) throw error;

      setContractors((prev) => [...prev, data]);
      setNewContractor({
        name: "",
        region: "",
        skills: "",
        availability: "",
        rating: "",
      });
      setIsAddDialogOpen(false);
    } catch (error) {
      console.error("Error adding contractor:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active"
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-800";
  };

  const renderStars = (rating: number | null) => {
    if (!rating) return <span className="text-gray-400">No rating</span>;

    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">
          ({rating.toFixed(1)})
        </span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600">Loading contractors...</div>
      </div>
    );
  }

  return (
    <AdminAuthGuard>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Contractors</h2>
            <p className="text-gray-600">
              {contractors.filter((c) => c.status === "active").length} active,{" "}
              {contractors.filter((c) => c.status === "on_leave").length} on
              leave
            </p>
          </div>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add New Contractor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Contractor</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddContractor} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={newContractor.name}
                    onChange={(e) =>
                      setNewContractor((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="region">Region *</Label>
                  <Select
                    value={newContractor.region}
                    onValueChange={(value) =>
                      setNewContractor((prev) => ({ ...prev, region: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Toronto">Toronto</SelectItem>
                      <SelectItem value="Vancouver">Vancouver</SelectItem>
                      <SelectItem value="Montreal">Montreal</SelectItem>
                      <SelectItem value="Calgary">Calgary</SelectItem>
                      <SelectItem value="Ottawa">Ottawa</SelectItem>
                      <SelectItem value="Edmonton">Edmonton</SelectItem>
                      <SelectItem value="Winnipeg">Winnipeg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="skills">Skills (comma-separated)</Label>
                  <Input
                    id="skills"
                    value={newContractor.skills}
                    onChange={(e) =>
                      setNewContractor((prev) => ({
                        ...prev,
                        skills: e.target.value,
                      }))
                    }
                    placeholder="e.g., Grab Bars, Railings, Stairlifts"
                  />
                </div>

                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Input
                    id="availability"
                    value={newContractor.availability}
                    onChange={(e) =>
                      setNewContractor((prev) => ({
                        ...prev,
                        availability: e.target.value,
                      }))
                    }
                    placeholder="e.g., Mon-Fri 8AM-6PM"
                  />
                </div>

                <div>
                  <Label htmlFor="rating">Initial Rating (1-5)</Label>
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    value={newContractor.rating}
                    onChange={(e) =>
                      setNewContractor((prev) => ({
                        ...prev,
                        rating: e.target.value,
                      }))
                    }
                    placeholder="4.5"
                  />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsAddDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Adding..." : "Add Contractor"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contractors.map((contractor) => (
            <Card key={contractor.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{contractor.name}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {contractor.region}
                      </span>
                    </div>
                  </div>
                  <Badge
                    className={getStatusColor(contractor.status || "active")}
                  >
                    {contractor.status || "active"}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {contractor.skills?.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      )) || (
                        <span className="text-sm text-gray-500">
                          No skills listed
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Award className="w-4 h-4" />
                        <span>Jobs completed</span>
                      </div>
                      <div className="font-semibold text-lg">
                        {contractor.completed_jobs}
                      </div>
                    </div>

                    <div>
                      <div className="text-gray-600 mb-1">Rating</div>
                      {renderStars(contractor.rating)}
                    </div>
                  </div>

                  <div>
                    <div className="text-gray-600 text-sm mb-1">
                      Availability
                    </div>
                    <div className="text-sm">
                      {contractor.availability || "Not specified"}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm font-medium">
                      {contractor.status === "active" ? "Active" : "On Leave"}
                    </span>
                    <Switch
                      checked={contractor.status === "active"}
                      onCheckedChange={() =>
                        toggleContractorStatus(
                          contractor.id,
                          contractor.status || "active"
                        )
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {contractors.length === 0 && (
          <div className="text-center py-12">
            <Wrench className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No contractors found
            </h3>
            <p className="text-gray-600">
              Add contractors to manage your installation team.
            </p>
          </div>
        )}
      </div>
    </AdminAuthGuard>
  );
}
