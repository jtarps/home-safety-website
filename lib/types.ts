export interface Client {
  id: string
  name: string | null
  phone: string | null
  email: string | null
  address: string | null
  referral_source: string | null
  first_job_date: string | null
  notes: string | null
}

export interface Contractor {
  id: string
  name: string | null
  region: string | null
  skills: string[] | null
  availability: string | null
  completed_jobs: number
  rating: number | null
  status: string | null
}

export interface Referrer {
  id: string
  name: string | null
  clinic: string | null
  email: string | null
  total_referrals: number
  last_referral_date: string | null
}

export interface Booking {
  id: string
  client_id: string | null
  contractor_id: string | null
  service: string | null
  status: string
  date: string | null
  time_slot: string | null
  deposit_paid: boolean
  stripe_link: string | null
  photo_url: string | null
  notes: string | null
  // Joined data
  clients?: Client
  contractors?: Contractor
}

export type BookingStatus = "new" | "scheduled" | "completed" | "cancelled"
