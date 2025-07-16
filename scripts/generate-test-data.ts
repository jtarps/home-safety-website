import { supabaseAdmin } from "@/lib/supabase"

// Test data generators
const generateTestClients = () => [
  {
    name: "John Smith",
    phone: "+1-416-555-0123",
    email: "john.smith@email.com",
    address: "123 Main St, Toronto, ON M4W 2A1",
    referral_source: "Dr. Watson",
    first_job_date: "2024-06-15",
    notes: "Needs grab bars in master bathroom",
  },
  {
    name: "Mary Johnson",
    phone: "+1-604-555-0456",
    email: "mary.johnson@email.com",
    address: "456 Oak Ave, Vancouver, BC V6B 1A1",
    referral_source: "website",
    first_job_date: "2024-06-20",
    notes: "Stairlift consultation requested",
  },
  {
    name: "Robert Chen",
    phone: "+1-514-555-0789",
    email: "robert.chen@email.com",
    address: "789 Pine St, Montreal, QC H3A 1A1",
    referral_source: "Dr. Chang",
    first_job_date: "2024-06-18",
    notes: "Complete bathroom safety package",
  },
]

const generateTestBookings = (clientIds: string[], contractorIds: string[]) => [
  {
    client_id: clientIds[0],
    contractor_id: contractorIds[0],
    service: "Grab Bar Installation ($149)",
    status: "new",
    date: "2024-07-03",
    time_slot: "10:30am - 12:30pm",
    deposit_paid: false,
    notes: "Customer prefers morning appointments",
  },
  {
    client_id: clientIds[1],
    contractor_id: contractorIds[1],
    service: "Stairlift Installation (Custom Quote)",
    status: "scheduled",
    date: "2024-07-05",
    time_slot: "2:30pm - 4:30pm",
    deposit_paid: true,
    notes: "Curved stairlift required",
  },
  {
    client_id: clientIds[2],
    service: "Bathroom Safety Package ($249)",
    status: "completed",
    date: "2024-06-25",
    time_slot: "8:30am - 10:30am",
    deposit_paid: true,
    notes: "Installation completed successfully",
  },
]

export async function generateTestData() {
  try {
    console.log("🔄 Generating test data...")

    // 1. Insert test clients
    const { data: clients, error: clientError } = await supabaseAdmin
      .from("clients")
      .insert(generateTestClients())
      .select()

    if (clientError) throw clientError
    console.log(`✅ Created ${clients.length} test clients`)

    // 2. Get contractor IDs
    const { data: contractors, error: contractorError } = await supabaseAdmin.from("contractors").select("id").limit(3)

    if (contractorError) throw contractorError

    // 3. Insert test bookings
    const clientIds = clients.map((c) => c.id)
    const contractorIds = contractors.map((c) => c.id)
    const testBookings = generateTestBookings(clientIds, contractorIds)

    const { data: bookings, error: bookingError } = await supabaseAdmin.from("bookings").insert(testBookings).select()

    if (bookingError) throw bookingError
    console.log(`✅ Created ${bookings.length} test bookings`)

    return {
      success: true,
      message: `Successfully created ${clients.length} clients and ${bookings.length} bookings`,
      data: {
        clients: clients.length,
        bookings: bookings.length,
      },
    }
  } catch (error) {
    console.error("❌ Error generating test data:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

export async function clearTestData() {
  try {
    console.log("🔄 Clearing test data...")

    // Delete in reverse order due to foreign key constraints
    await supabaseAdmin.from("bookings").delete().neq("id", "00000000-0000-0000-0000-000000000000")
    await supabaseAdmin.from("clients").delete().neq("id", "00000000-0000-0000-0000-000000000000")

    console.log("✅ Test data cleared")
    return { success: true, message: "Test data cleared successfully" }
  } catch (error) {
    console.error("❌ Error clearing test data:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
