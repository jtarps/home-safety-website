# SMS Configuration

This application uses Twilio to send SMS confirmations and reminders to customers.

## Required Environment Variables

Add these to your `.env.local` file:

\`\`\`env
# Twilio Configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890
\`\`\`

## Getting Twilio Credentials

1. Sign up for a Twilio account at https://www.twilio.com
2. Get a phone number from the Twilio Console
3. Find your Account SID and Auth Token in the Console Dashboard
4. Add the credentials to your environment variables

## SMS Features

### Booking Confirmation SMS
- Sent immediately after successful booking
- Contains booking ID, service details, date/time
- Includes company contact information

### Reminder SMS  
- Can be sent day before appointment
- Run the reminder script: `npm run send-reminders`
- Typically scheduled as a daily cron job

## Phone Number Formatting

The system automatically formats phone numbers:
- 10-digit US/Canada numbers: adds +1 prefix
- International numbers: adds + if missing
- Handles various input formats (with/without dashes, spaces, etc.)

## Error Handling

- SMS failures don't prevent booking completion
- Errors are logged for monitoring
- Graceful fallback to email-only confirmation

## Testing

For development, you can use Twilio's test credentials or your own trial account.
Test phone numbers won't actually receive SMS in trial mode.
