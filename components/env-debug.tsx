"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EnvDebug() {
  // Only show in development
  if (process.env.NODE_ENV !== "development") {
    return null
  }

  const envVars = [
    { name: "NEXT_PUBLIC_SUPABASE_URL", value: process.env.NEXT_PUBLIC_SUPABASE_URL },
    { name: "NEXT_PUBLIC_SUPABASE_ANON_KEY", value: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY },
    { name: "SUPABASE_SERVICE_ROLE_KEY", value: process.env.SUPABASE_SERVICE_ROLE_KEY },
    // Also check for the other variants
    { name: "SUPABASE_URL", value: process.env.SUPABASE_URL },
    { name: "SUPABASE_ANON_KEY", value: process.env.SUPABASE_ANON_KEY },
  ]

  return (
    <Card className="mb-6 border-yellow-200 bg-yellow-50">
      <CardHeader>
        <CardTitle className="text-sm text-yellow-800">Environment Variables Debug (Development Only)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {envVars.map((env) => (
            <div key={env.name} className="flex items-center justify-between text-sm">
              <span className="font-mono">{env.name}</span>
              <Badge variant={env.value ? "default" : "destructive"}>{env.value ? "✓ Set" : "✗ Missing"}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
