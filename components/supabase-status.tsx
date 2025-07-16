"use client"

import { isSupabaseConfigured, isSupabaseAdminConfigured } from "@/lib/supabase"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle } from "lucide-react"

export function SupabaseStatus() {
  const isConfigured = isSupabaseConfigured()
  const isAdminConfigured = isSupabaseAdminConfigured()

  if (!isConfigured) {
    return null // Don't show anything if basic config is missing
  }

  if (isAdminConfigured) {
    return (
      <Alert className="border-green-200 bg-green-50">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          Database connected and ready for admin operations.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert className="border-yellow-200 bg-yellow-50">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertDescription className="text-yellow-800">
        Database connected with limited admin privileges. Service role key recommended for production.
      </AlertDescription>
    </Alert>
  )
}
