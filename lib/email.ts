import axios from "axios";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "RESEND_API_KEY_PLACEHOLDER"; // <-- Replace with your real Resend API key
const SENDER_EMAIL = "noreply@yourdomain.com"; // <-- Replace with your sender email
const ADMIN_EMAIL = "admin@yourdomain.com"; // <-- Replace with your admin email

export async function sendBookingConfirmationEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const response = await axios.post(
      "https://api.resend.com/emails",
      {
        from: SENDER_EMAIL,
        to,
        subject,
        html,
      },
      {
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    return null;
  }
}

export async function sendBookingNotifications({
  customerEmail,
  customerName,
  bookingDetailsHtml,
}: {
  customerEmail: string;
  customerName: string;
  bookingDetailsHtml: string;
}) {
  // Send to customer
  await sendBookingConfirmationEmail({
    to: customerEmail,
    subject: "Your Booking Confirmation",
    html: `<p>Hi ${customerName},</p>${bookingDetailsHtml}`,
  });
  // Send to admin
  await sendBookingConfirmationEmail({
    to: ADMIN_EMAIL,
    subject: "New Booking Received",
    html: `<p>New booking from ${customerName} (${customerEmail}):</p>${bookingDetailsHtml}`,
  });
}

// Call Supabase Edge Function for email (alternative to Resend direct API)
export async function sendEmailViaSupabaseFunction({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const response = await fetch("/functions/v1/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, subject, html }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Failed to send email");
    return data;
  } catch (error) {
    console.error("Error calling Supabase Edge Function:", error);
    return null;
  }
}

// Example usage:
// await sendEmailViaSupabaseFunction({
//   to: "user@example.com",
//   subject: "Test Email",
//   html: "<p>Hello from Supabase Edge Function!</p>",
// }); 