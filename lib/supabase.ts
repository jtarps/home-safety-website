import { createClient } from "@supabase/supabase-js"

// Use the correct environment variable names from your available variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Validate required environment variables
if (!supabaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL environment variable")
}

if (!supabaseAnonKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable")
}

// Client-side Supabase client (uses anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side Supabase client (uses service role key for admin operations)
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceKey || supabaseAnonKey, // Fallback to anon key if service key not available
)

// Helper functions
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey)
}

export const isSupabaseAdminConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey && supabaseServiceKey)
}

// Log configuration status (only in development)
if (process.env.NODE_ENV === "development") {
  console.log("Supabase Configuration:")
  console.log("- URL:", supabaseUrl ? "✓ Configured" : "✗ Missing NEXT_PUBLIC_SUPABASE_URL")
  console.log("- Anon Key:", supabaseAnonKey ? "✓ Configured" : "✗ Missing NEXT_PUBLIC_SUPABASE_ANON_KEY")
  console.log(
    "- Service Key:",
    supabaseServiceKey ? "✓ Configured" : "⚠ Missing SUPABASE_SERVICE_ROLE_KEY (using anon key fallback)",
  )
}
