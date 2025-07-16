-- Add referral code and marketing preferences to clients table
ALTER TABLE clients 
ADD COLUMN IF NOT EXISTS referral_code TEXT,
ADD COLUMN IF NOT EXISTS marketing_opt_in BOOLEAN DEFAULT FALSE;

-- Add referral codes table for tracking promo codes
CREATE TABLE IF NOT EXISTS referral_codes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT UNIQUE NOT NULL,
  referrer_id UUID REFERENCES referrers(id),
  discount_amount DECIMAL(10,2),
  discount_type TEXT DEFAULT 'fixed', -- 'fixed' or 'percentage'
  usage_limit INTEGER,
  used_count INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert some sample referral codes
INSERT INTO referral_codes (code, discount_amount, discount_type, usage_limit, expires_at) VALUES
('WELCOME10', 10.00, 'fixed', 100, '2024-12-31 23:59:59'),
('SAFETY15', 15.00, 'percentage', 50, '2024-12-31 23:59:59'),
('NEWCLIENT', 25.00, 'fixed', 200, '2024-12-31 23:59:59');

-- Update bookings table to support multiple services
ALTER TABLE bookings 
ADD COLUMN IF NOT EXISTS services TEXT[], -- Array of services
ADD COLUMN IF NOT EXISTS total_estimate DECIMAL(10,2);

-- Create index for referral codes
CREATE INDEX IF NOT EXISTS idx_referral_codes_code ON referral_codes(code);
CREATE INDEX IF NOT EXISTS idx_referral_codes_active ON referral_codes(active);
