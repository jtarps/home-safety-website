"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Grip,
  Bath,
  Bed,
  StepBackIcon as Stairs,
  ClipboardCheck,
  DoorOpen,
  ShowerHead,
  Wrench,
  Home,
  Accessibility,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  icon: any;
  popular?: boolean;
}

interface ServiceSelectorProps {
  selectedServices: string[];
  onChange: (services: string[]) => void;
}

export function ServiceSelector({
  selectedServices,
  onChange,
}: ServiceSelectorProps) {
  const services: Service[] = [
    {
      id: "grab-bars",
      title: "Grab Bars Installation",
      price: "$89",
      description:
        "Secure support in bathrooms, stairways, hallways, and entryways. Professional installation with warranty.",
      icon: Grip,
      popular: true,
    },
    {
      id: "stair-railings",
      title: "Stair Railings Installation",
      price: "$349",
      description:
        "Safe, stylish stair railings for every home. Custom fit for any staircase, indoors or out.",
      icon: Stairs,
    },
    {
      id: "wheelchair-ramps",
      title: "Wheelchair Ramps",
      price: "$125 / ft",
      description:
        "Safe, reliable wheelchair ramps for every entrance. Modular, custom, or portable options available.",
      icon: Accessibility,
    },
    {
      id: "bathroom-safety",
      title: "Bathroom Safety Modifications",
      price: "$199",
      description:
        "Safe, comfortable, and accessible bathrooms. Grab bars, accessible showers, and more for peace of mind.",
      icon: Bath,
      popular: true,
    },
    {
      id: "automatic-door-opener",
      title: "Automatic Door Opener Installation",
      price: "Custom Quote",
      description:
        "Touch-free entry for true accessibility. Professional installation for homes and buildings.",
      icon: DoorOpen,
    },
    {
      id: "doorway-widening",
      title: "Doorway Widening",
      price: "Custom Quote",
      description:
        "Expand doorways for wheelchair and walker access—seamless, code-compliant modifications.",
      icon: DoorOpen,
    },
    {
      id: "threshold-ramps-reducers",
      title: "Threshold Ramps & Reducers",
      price: "$150",
      description:
        "Eliminate trip hazards at doorways and flooring transitions with custom-fit solutions.",
      icon: Accessibility,
    },
    {
      id: "handrails-support-rails",
      title: "Handrails & Support Rails",
      price: "$249",
      description:
        "Sturdy handrails and support rails for stairs, hallways, and high-traffic areas.",
      icon: Grip,
    },
    {
      id: "shower-chair-setup",
      title: "Shower Chair Setup",
      price: "$149",
      description:
        "Professional assembly and placement of shower chairs for safe, comfortable bathing.",
      icon: ShowerHead,
    },
    {
      id: "handheld-shower-head",
      title: "Handheld Shower Head Installation",
      price: "$149",
      description:
        "Flexible, easy-to-use shower heads for seated or standing use—improving independence.",
      icon: ShowerHead,
    },
    {
      id: "stairlift-installation",
      title: "Stairlift (Chair Lift) Installation",
      price: "Custom Quote",
      description:
        "Straight, curved, or outdoor stairlifts for safe, effortless travel up and down stairs.",
      icon: Stairs,
    },
    {
      id: "accessible-bathroom-mods",
      title: "Accessible Bathroom Modifications",
      price: "Custom Quote",
      description:
        "Roll-in showers, walk-in tubs, raised toilets, and more—customized for your needs.",
      icon: Bath,
    },
    {
      id: "safety-assessment",
      title: "Home Safety Assessment",
      price: "Free",
      description:
        "Professional assessment of your home's safety needs with personalized recommendations.",
      icon: ClipboardCheck,
    },
  ];

  const handleServiceToggle = (
    serviceId: string,
    serviceTitle: string,
    servicePrice: string
  ) => {
    const serviceString = `${serviceTitle} (${servicePrice})`;

    if (selectedServices.includes(serviceString)) {
      onChange(selectedServices.filter((s) => s !== serviceString));
    } else {
      onChange([...selectedServices, serviceString]);
    }
  };

  const getTotalEstimate = () => {
    let total = 0;
    let hasCustomQuote = false;
    let hasFreeService = false;

    selectedServices.forEach((service) => {
      if (service.includes("Custom Quote")) {
        hasCustomQuote = true;
      } else if (service.includes("Free")) {
        hasFreeService = true;
      } else {
        const priceMatch = service.match(/\$(\d+)/);
        if (priceMatch) {
          total += Number.parseInt(priceMatch[1]);
        }
        // Handle per-foot pricing
        const perFootMatch = service.match(/\$(\d+)\s*\/\s*ft/);
        if (perFootMatch) {
          // Estimate 6 feet for per-foot services
          total += Number.parseInt(perFootMatch[1]) * 6;
        }
      }
    });

    if (hasCustomQuote) return "We'll call with a quote";
    if (hasFreeService && total === 0) return "Free Assessment";
    if (hasFreeService && total > 0) return `$${total} (Assessment Free)`;
    return total > 0 ? `$${total}` : "";
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((service) => {
          const serviceString = `${service.title} (${service.price})`;
          const isSelected = selectedServices.includes(serviceString);

          return (
            <Card
              key={service.id}
              className={`cursor-pointer transition-all ${
                isSelected
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : "hover:shadow-md"
              }`}
              onClick={() =>
                handleServiceToggle(service.id, service.title, service.price)
              }
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    checked={isSelected}
                    onChange={() => {}} // Handled by card click
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <service.icon className="w-5 h-5 text-blue-600" />
                      <h4 className="font-medium text-gray-900">
                        {service.title}
                      </h4>
                      <span className="font-bold text-blue-600">
                        {service.price}
                      </span>
                      {service.popular && (
                        <Badge className="bg-blue-600 text-white">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {selectedServices.length > 0 && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <h4 className="font-medium text-green-900 mb-2">
              Selected Services ({selectedServices.length})
            </h4>
            <div className="space-y-1 mb-3">
              {selectedServices.map((service, index) => (
                <div key={index} className="text-sm text-green-800">
                  • {service}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-green-900">
                Estimated Total:
              </span>
              <span className="font-bold text-green-900 text-lg">
                {getTotalEstimate()}
              </span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
