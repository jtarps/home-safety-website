import { Twilio } from "twilio"

// Initialize Twilio client
const twilioClient = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

export interface SMSData {
  to: string
  customerName: string
  bookingId: string
  service: string
  date: string
  time: string
  postalCode: string
}

export async function sendBookingConfirmationSMS(data: SMSData) {
  try {
    const message = `Hi ${data.customerName}! 🏠

Your Safe Home Installers booking is CONFIRMED:

📋 Booking ID: ${data.bookingId}
🔧 Service: ${data.service}
📅 Date: ${data.date}
⏰ Time: ${data.time}
📍 Area: ${data.postalCode}

We'll call you within 2 hours to confirm details.

Questions? Call (647) 371-0899

Thank you for choosing Safe Home Installers!`

    const result = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: data.to,
    })

    console.log("SMS sent successfully:", result.sid)
    return { success: true, messageSid: result.sid }
  } catch (error) {
    console.error("Failed to send SMS:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function sendBookingReminderSMS(data: SMSData) {
  try {
    const message = `Reminder: Your Safe Home Installers appointment is tomorrow!

📋 ${data.bookingId}
🔧 ${data.service}
📅 ${data.date}
⏰ ${data.time}

Our certified installer will arrive on time with all equipment. No payment required until job is complete.

Need to reschedule? Call (647) 371-0899

See you tomorrow! 👷‍♂️`

    const result = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: data.to,
    })

    console.log("Reminder SMS sent successfully:", result.sid)
    return { success: true, messageSid: result.sid }
  } catch (error) {
    console.error("Failed to send reminder SMS:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

// Utility function to format phone number for Twilio
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "")

  // Add +1 if it's a 10-digit North American number
  if (digits.length === 10) {
    return `+1${digits}`
  }

  // Add + if it doesn't start with it
  if (digits.length > 10 && !phone.startsWith("+")) {
    return `+${digits}`
  }

  return phone
}
