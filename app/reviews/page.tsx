import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, Quote } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Section } from "@/components/section"; // Declare the Section variable

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Margaret Thompson",
      location: "Springfield, IL",
      rating: 5,
      service: "Grab Bar Installation",
      date: "December 2024",
      review:
        "The team was professional, punctual, and did excellent work. The grab bars are exactly what I needed to feel safe in my bathroom. Installation was quick and clean. Highly recommend!",
      verified: true,
    },
    {
      name: "Robert Chen",
      location: "Oak Park, IL",
      rating: 5,
      service: "Wheelchair Ramp",
      date: "November 2024",
      review:
        "Outstanding service from start to finish. They built a beautiful ramp that perfectly matches our home's style. My wife can now access the house independently. Worth every penny.",
      verified: true,
    },
    {
      name: "Linda Rodriguez",
      location: "Naperville, IL",
      rating: 5,
      service: "Bathroom Safety Package",
      date: "November 2024",
      review:
        "After my husband's stroke, we needed to make our bathroom safer. The team installed grab bars, a shower seat, and non-slip surfaces. The work was done professionally and with great care.",
      verified: true,
    },
    {
      name: "James Wilson",
      location: "Schaumburg, IL",
      rating: 5,
      service: "Stair Railings",
      date: "October 2024",
      review:
        "The new railings look great and feel very secure. Installation was completed on time and the crew cleaned up everything. My elderly mother feels much safer using the stairs now.",
      verified: true,
    },
    {
      name: "Patricia Davis",
      location: "Evanston, IL",
      rating: 5,
      service: "Home Safety Assessment",
      date: "October 2024",
      review:
        "The safety assessment was thorough and eye-opening. They identified several hazards I hadn't noticed and provided practical solutions. The written report was detailed and helpful.",
      verified: true,
    },
    {
      name: "Michael Brown",
      location: "Aurora, IL",
      rating: 5,
      service: "Walk-in Shower Conversion",
      date: "September 2024",
      review:
        "Transformed our old tub into a beautiful walk-in shower. The craftsmanship is excellent and the project was completed on schedule. My wife loves the new shower!",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customer Reviews & Testimonials
            </h1>
            <p className="text-xl mb-8 opacity-90">
              See what our customers say about their experience with
              1-800-Grab-Bars. Real reviews from real customers who trust us
              with their home safety.
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xl font-semibold">
                4.9/5 Average Rating
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  2,500+
                </div>
                <p className="text-gray-600">Total Reviews</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  4.9/5
                </div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">Would Recommend</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">A+</div>
                <p className="text-gray-600">BBB Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Recent Customer Reviews
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <p className="text-sm text-gray-600">
                          {review.location}
                        </p>
                        <p className="text-sm text-blue-600">
                          {review.service}
                        </p>
                      </div>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {review.date}
                      </span>
                    </div>

                    <div className="relative">
                      <Quote className="h-6 w-6 text-blue-200 absolute -top-2 -left-1" />
                      <p className="text-gray-700 pl-6 italic">
                        "{review.review}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              Find Us on Review Platforms
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    Google Reviews
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">4.9/5 from 1,200+ reviews</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    Better Business Bureau
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    A+
                  </div>
                  <p className="text-gray-600">Accredited Business</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    Angie's List
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">4.8/5 from 800+ reviews</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Share Your Experience</h2>
            <p className="text-lg text-gray-600 mb-8">
              Had a great experience with our services? We'd love to hear from
              you! Your feedback helps us improve and helps other families make
              informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Leave a Google Review
              </Button>
              <Button size="lg" variant="outline">
                Contact Us Directly
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Satisfied Customers
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the quality service that earns us 5-star reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href="/booking">Book a Visit</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="tel:+16473710899">
                <Phone className="mr-2 h-5 w-5" />
                Call (647) 371-0899
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
