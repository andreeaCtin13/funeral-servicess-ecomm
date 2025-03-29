import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "During our difficult time, the compassionate service we received was truly comforting. The staff handled everything with dignity and respect.",
      author: "Sarah Johnson",
      role: "Client",
    },
    {
      quote:
        "The repatriation service was handled with the utmost professionalism. Every detail was taken care of, allowing us to focus on our grief.",
      author: "Michael Thompson",
      role: "Client",
    },
    {
      quote:
        "I cannot thank the team enough for their support during our loss. The service was beautiful and exactly what we wanted.",
      author: "Emily Davis",
      role: "Client",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Testimonials</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              What our clients say about our compassionate service.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex flex-col">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

