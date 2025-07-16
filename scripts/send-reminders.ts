// This script would typically be run as a scheduled job (cron job)
// to send reminder SMS messages to customers with appointments tomorrow

import { sendBookingReminderSMS, type SMSData } from "../lib/sms"

interface BookingRecord {
  id: string
  customerName: string
  phone: string
  service: string
  date: string
  time: string
  postalCode: string
  appointmentDate: Date
}

// Mock function to get tomorrow's bookings
// In a real app, this would query your database
async function getTomorrowsBookings(): Promise<BookingRecord[]> {
  // This is mock data - replace with actual database query
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  return [
    {
      id: "SH-1234567890-ABC123",
      customerName: "John Smith",
      phone: "+1234567890",
      service: "Grab Bar Installation ($149)",
      date: "Wednesday, July 3rd",
      time: "10:30am - 12:30pm",
      postalCode: "M4W 0A2",
      appointmentDate: tomorrow,
    },
    // More bookings would be loaded from database
  ]
}

async function sendDailyReminders() {
  console.log("Starting daily reminder SMS job...")

  try {
    const bookings = await getTomorrowsBookings()
    console.log(`Found ${bookings.length} bookings for tomorrow`)

    const results = await Promise.allSettled(
      bookings.map(async (booking) => {
        const smsData: SMSData = {
          to: booking.phone,
          customerName: booking.customerName.split(" ")[0],
          bookingId: booking.id,
          service: booking.service,
          date: booking.date,
          time: booking.time,
          postalCode: booking.postalCode,
        }

        return sendBookingReminderSMS(smsData)
      }),
    )

    const successful = results.filter((result) => result.status === "fulfilled" && result.value.success).length

    const failed = results.length - successful

    console.log(`Reminder SMS job completed: ${successful} sent, ${failed} failed`)

    return {
      total: bookings.length,
      successful,
      failed,
    }
  } catch (error) {
    console.error("Error in daily reminder job:", error)
    throw error
  }
}

// Run the reminder job
if (require.main === module) {
  sendDailyReminders()
    .then((result) => {
      console.log("Daily reminder job finished:", result)
      process.exit(0)
    })
    .catch((error) => {
      console.error("Daily reminder job failed:", error)
      process.exit(1)
    })
}

export { sendDailyReminders }
