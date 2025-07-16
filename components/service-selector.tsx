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
      id: "grab-bar",
      title: "Grab Bar Install",
      price: "$89",
      description:
        "Secure one 24\u2033 grab bar in wall studs\u2014perfect for tubs or hallways.",
      icon: Grip,
    },
    {
      id: "stair-railing",
      title: "Stair Railing Install",
      price: "$349",
      description:
        "Install one straight railing (up to 6 ft) for safe, confident steps.",
      icon: Stairs,
    },
    {
      id: "straight-ramp",
      title: "Straight Ramp Install",
      price: "$125 / ft",
      description:
        "Set modular ramp segments (up to 6 ft) with handrail for easy access.",
      icon: Grip,
    },
    {
      id: "safety-rail-kit",
      title: "Safety Rail Kit Install",
      price: "$549",
      description:
        "Fit up to 8 ft of deck or porch rail posts + mid-rail\u2014sturdy & code-ready.",
      icon: Grip,
    },
    {
      id: "bathroom-safety-rail",
      title: "Bathroom Safety Rail Install",
      price: "$199",
      description:
        "Mount up to 3 rails around tub or toilet for added support.",
      icon: Bath,
    },
    {
      id: "handheld-shower",
      title: "Hand-Held Shower Install",
      price: "$149",
      description:
        "Install slide-bar, hose & handheld sprayer\u2014ideal for seated showers.",
      icon: Bed,
    },
    {
      id: "auto-door-opener",
      title: "Automatic Door Opener Install",
      price: "Custom Quote",
      description: "Mount & wire one door operator for touch-free entry.",
      icon: Stairs,
    },
    {
      id: "bath-surround",
      title: "Bath Surround (Bath Fitter) Install",
      price: "Custom Quote",
      description:
        "Install custom acrylic tub surround\u2014no-tear remodel in one visit.",
      icon: Bath,
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
    selectedServices.forEach((service) => {
      if (service.includes("Custom Quote")) {
        hasCustomQuote = true;
      }
      const priceMatch = service.match(/\$(\d+)/);
      if (priceMatch) {
        total += Number.parseInt(priceMatch[1]);
      }
    });
    if (hasCustomQuote) return "We’ll call with a quote";
    return total > 0 ? `$${total}` : "";
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3">
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
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
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
