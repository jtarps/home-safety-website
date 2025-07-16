import { CheckCircle, MessageCircle, AlertTriangle } from "lucide-react"

interface SMSConfirmationProps {
  phone: string
  success?: boolean
}

export function SMSConfirmation({ phone, success = true }: SMSConfirmationProps) {
  // Mask phone number for privacy (show last 4 digits)
  const maskedPhone = phone.replace(/(\d{3})\d{3}(\d{4})/, "$1-***-$2")

  return (
    <div
      className={`flex items-center space-x-3 p-4 rounded-lg ${
        success ? "bg-green-50 border border-green-200" : "bg-yellow-50 border border-yellow-200"
      }`}
    >
      {success ? (
        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
      ) : (
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
      )}
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-4 h-4 text-gray-500" />
          <span className={`text-sm font-medium ${success ? "text-green-800" : "text-yellow-800"}`}>
            {success ? "SMS Confirmation Sent" : "SMS Delivery Pending"}
          </span>
        </div>
        <p className={`text-xs mt-1 ${success ? "text-green-700" : "text-yellow-700"}`}>
          {success ? `Confirmation text sent to ${maskedPhone}` : `We'll send confirmation to ${maskedPhone} shortly`}
        </p>
      </div>
    </div>
  )
}
