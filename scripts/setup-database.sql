-- Run this in your Supabase SQL Editor

-- Enable UUID extension (should already be enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Clients table
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  phone TEXT,
  email TEXT,
  address TEXT,
  referral_source TEXT,
  first_job_date DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contractors table
CREATE TABLE IF NOT EXISTS contractors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  region TEXT,
  skills TEXT[],
  availability TEXT,
  completed_jobs INT DEFAULT 0,
  rating FLOAT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Referrers table
CREATE TABLE IF NOT EXISTS referrers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  clinic TEXT,
  email TEXT,
  total_referrals INT DEFAULT 0,
  last_referral_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  contractor_id UUID REFERENCES contractors(id),
  service TEXT,
  status TEXT DEFAULT 'new',
  date DATE,
  time_slot TEXT,
  deposit_paid BOOLEAN DEFAULT FALSE,
  stripe_link TEXT,
  photo_url TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample contractors
INSERT INTO contractors (name, region, skills, availability, completed_jobs, rating, status) VALUES
('Mike Johnson', 'Toronto', ARRAY['Grab Bars', 'Railings', 'Bathroom Safety'], 'Mon-Fri 8AM-6PM', 45, 4.8, 'active'),
('Sarah Chen', 'Vancouver', ARRAY['Stairlifts', 'Grab Bars', 'Bed Rails'], 'Tue-Sat 9AM-5PM', 32, 4.9, 'active'),
('David Rodriguez', 'Montreal', ARRAY['Grab Bars', 'Safety Assessments'], 'Mon-Thu 8AM-4PM', 28, 4.7, 'active'),
('Lisa Thompson', 'Calgary', ARRAY['Bathroom Safety', 'Railings', 'Grab Bars'], 'Wed-Sun 10AM-6PM', 38, 4.6, 'on_leave'),
('James Wilson', 'Toronto', ARRAY['Stairlifts', 'Custom Installations'], 'Mon-Fri 7AM-3PM', 52, 4.9, 'active');

-- Insert sample referrers
INSERT INTO referrers (name, clinic, email, total_referrals, last_referral_date) VALUES
('Dr. Emily Watson', 'Toronto Rehabilitation Center', 'ewatson@torontorehab.ca', 23, '2024-06-15'),
('Dr. Michael Chang', 'Vancouver Physiotherapy Clinic', 'mchang@vanphysio.com', 18, '2024-06-20'),
('Dr. Sarah Miller', 'Montreal Occupational Therapy', 'smiller@montrealot.ca', 31, '2024-06-18'),
('Dr. Robert Kim', 'Calgary Health Services', 'rkim@calgaryhealth.ca', 12, '2024-06-10'),
('Dr. Jennifer Lee', 'Ottawa Geriatric Care', 'jlee@ottawageriatric.ca', 8, '2024-06-05');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_client_id ON bookings(client_id);
CREATE INDEX IF NOT EXISTS idx_bookings_contractor_id ON bookings(contractor_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);
CREATE INDEX IF NOT EXISTS idx_clients_email ON clients(email);
CREATE INDEX IF NOT EXISTS idx_clients_phone ON clients(phone);

-- Enable Row Level Security (RLS)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE contractors ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrers ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Remove or comment out the default open policies
-- CREATE POLICY "Allow all operations on clients" ON clients FOR ALL USING (true);
-- CREATE POLICY "Allow all operations on contractors" ON contractors FOR ALL USING (true);
-- CREATE POLICY "Allow all operations on referrers" ON referrers FOR ALL USING (true);
-- CREATE POLICY "Allow all operations on bookings" ON bookings FOR ALL USING (true);

-- Add secure admin-only policies
CREATE POLICY "Admins only" ON clients
  FOR ALL
  USING (auth.email() = 'jaydee.tarpeh@gmail.com');

CREATE POLICY "Admins only" ON contractors
  FOR ALL
  USING (auth.email() = 'jaydee.tarpeh@gmail.com');

CREATE POLICY "Admins only" ON referrers
  FOR ALL
  USING (auth.email() = 'jaydee.tarpeh@gmail.com');

CREATE POLICY "Admins only" ON bookings
  FOR ALL
  USING (auth.email() = 'jaydee.tarpeh@gmail.com');
