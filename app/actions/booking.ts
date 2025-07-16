"use server"

import { supabaseAdmin, isSupabaseAdminConfigured } from "@/lib/supabase"
import { sendBookingNotifications } from "@/lib/email";

export interface BookingData {
  postalCode: string
  selectedDate: string
  selectedTime: string
  name: string
  phone: string
  email: string
  address: string
  services: string[]
  notes: string
  referredBy: string
  referralCode: string
  marketingOptIn: boolean
}

export async function submitBooking(formData: FormData) {
  // Check if Supabase is configured
  if (!isSupabaseAdminConfigured()) {
    console.warn("Supabase not fully configured, using mock booking flow")

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Generate mock booking ID
    const mockBookingId = `MOCK-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    return {
      success: true,
      bookingId: mockBookingId,
      message: "Thank you! Your booking is confirmed. We'll be in touch soon to finalize details.",
    }
  }

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const bookingData: BookingData = {
    postalCode: formData.get("postalCode") as string,
    selectedDate: formData.get("selectedDate") as string,
    selectedTime: formData.get("selectedTime") as string,
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    address: formData.get("address") as string,
    services: JSON.parse(formData.get("services") as string),
    notes: formData.get("notes") as string,
    referredBy: formData.get("referredBy") as string,
    referralCode: formData.get("referralCode") as string,
    marketingOptIn: formData.get("marketingOptIn") === "true",
  }

  // Validate required fields
  if (
    !bookingData.name ||
    !bookingData.phone ||
    !bookingData.email ||
    !bookingData.address ||
    bookingData.services.length === 0
  ) {
    return {
      success: false,
      error: "Please complete all required fields before submitting your booking.",
    }
  }

  try {
    // Calculate total estimate
    let totalEstimate = 0
    bookingData.services.forEach((service) => {
      const priceMatch = service.match(/\$(\d+)/)
      if (priceMatch) {
        totalEstimate += Number.parseInt(priceMatch[1])
      }
    })

    // Apply referral code discount if valid
    let discountAmount = 0
    if (bookingData.referralCode) {
      const { data: referralCode } = await supabaseAdmin
        .from("referral_codes")
        .select("*")
        .eq("code", bookingData.referralCode)
        .eq("active", true)
        .single()

      if (referralCode && referralCode.expires_at && new Date(referralCode.expires_at) > new Date()) {
        if (referralCode.discount_type === "percentage") {
          discountAmount = (totalEstimate * referralCode.discount_amount) / 100
        } else {
          discountAmount = referralCode.discount_amount
        }
        totalEstimate = Math.max(0, totalEstimate - discountAmount)

        // Update usage count
        await supabaseAdmin
          .from("referral_codes")
          .update({ used_count: referralCode.used_count + 1 })
          .eq("id", referralCode.id)
      }
    }

    // 1. Upsert client (match on email or phone)
    const { data: existingClient } = await supabaseAdmin
      .from("clients")
      .select("*")
      .or(`email.eq.${bookingData.email},phone.eq.${bookingData.phone}`)
      .single()

    let clientId: string

    if (existingClient) {
      // Update existing client
      const { data: updatedClient, error: updateError } = await supabaseAdmin
        .from("clients")
        .update({
          name: bookingData.name,
          phone: bookingData.phone,
          email: bookingData.email,
          address: bookingData.address,
          notes: bookingData.notes,
          referral_code: bookingData.referralCode || existingClient.referral_code,
          marketing_opt_in: bookingData.marketingOptIn,
        })
        .eq("id", existingClient.id)
        .select()
        .single()

      if (updateError) throw updateError
      clientId = updatedClient.id
    } else {
      // Create new client
      const { data: newClient, error: insertError } = await supabaseAdmin
        .from("clients")
        .insert({
          name: bookingData.name,
          phone: bookingData.phone,
          email: bookingData.email,
          address: bookingData.address,
          referral_source: bookingData.referredBy || "website",
          referral_code: bookingData.referralCode,
          first_job_date: bookingData.selectedDate,
          notes: bookingData.notes,
          marketing_opt_in: bookingData.marketingOptIn,
        })
        .select()
        .single()

      if (insertError) throw insertError
      clientId = newClient.id
    }

    // 2. Insert booking with multiple services
    const { data: booking, error: bookingError } = await supabaseAdmin
      .from("bookings")
      .insert({
        client_id: clientId,
        services: bookingData.services,
        service: bookingData.services.join(", "), // Keep for backward compatibility
        status: "new",
        date: bookingData.selectedDate,
        time_slot: bookingData.selectedTime,
        deposit_paid: false,
        total_estimate: totalEstimate,
        notes: bookingData.notes,
      })
      .select()
      .single()

    if (bookingError) throw bookingError

    console.log("Booking created successfully:", booking.id)

    // Send email notifications (Resend)
    try {
      const bookingDetailsHtml = `
        <ul>
          <li><strong>Services:</strong> ${bookingData.services.join(", ")}</li>
          <li><strong>Date:</strong> ${bookingData.selectedDate}</li>
          <li><strong>Time:</strong> ${bookingData.selectedTime}</li>
          <li><strong>Address:</strong> ${bookingData.address}</li>
          <li><strong>Phone:</strong> ${bookingData.phone}</li>
        </ul>
      `;
      await sendBookingNotifications({
        customerEmail: bookingData.email,
        customerName: bookingData.name,
        bookingDetailsHtml,
      });
    } catch (e) {
      console.error("Failed to send booking notification emails:", e);
    }

    return {
      success: true,
      bookingId: booking.id,
      message: "Thank you! Your booking is confirmed. We look forward to serving you.",
    }
  } catch (error) {
    console.error("Error creating booking:", error)
    return {
      success: false,
      error: "Oops! Something went wrong. Please try again or contact us at 1-800-HOME-HERO for assistance.",
    }
  }
}

export async function checkAvailability(postalCode: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  const supportedAreas = ["M4W", "M5V", "M6G", "L4C", "L5B", "K1A", "H3A", "V6B", "T2P", "S7K", "L4T"]
  const prefix = postalCode.substring(0, 3).toUpperCase()

  return {
    available: supportedAreas.includes(prefix),
    postalCode: postalCode.toUpperCase(),
  }
}

export async function validateReferralCode(code: string) {
  if (!isSupabaseAdminConfigured()) {
    // Mock validation for development
    const mockCodes = ["WELCOME10", "SAFETY15", "NEWCLIENT"]
    return {
      valid: mockCodes.includes(code.toUpperCase()),
      discount_amount: 10,
      discount_type: "fixed",
      message: mockCodes.includes(code.toUpperCase()) ? "Valid code!" : "Invalid referral code",
    }
  }

  try {
    const { data: referralCode, error } = await supabaseAdmin
      .from("referral_codes")
      .select("*")
      .eq("code", code)
      .eq("active", true)
      .single()

    if (error || !referralCode) {
      return {
        valid: false,
        message: "Invalid referral code",
      }
    }

    // Check if expired
    if (referralCode.expires_at && new Date(referralCode.expires_at) < new Date()) {
      return {
        valid: false,
        message: "This referral code has expired",
      }
    }

    // Check usage limit
    if (referralCode.usage_limit && referralCode.used_count >= referralCode.usage_limit) {
      return {
        valid: false,
        message: "This referral code has reached its usage limit",
      }
    }

    return {
      valid: true,
      ...referralCode,
      message: "Valid code!",
    }
  } catch (error) {
    console.error("Error validating referral code:", error)
    return {
      valid: false,
      message: "Error validating referral code",
    }
  }
}
