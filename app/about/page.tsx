import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Clock, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About Us</h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Providing compassionate funeral services with dignity and respect for over 25 years.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=600&width=600" alt="Our funeral home" fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p>
              Founded in 1998, Compassionate Funeral Services has been providing dignified and respectful funeral
              services to families during their time of need. Our commitment to compassionate care and attention to
              detail has made us a trusted name in the community.
            </p>
            <p>
              We understand that losing a loved one is one of the most difficult experiences in life. Our dedicated team
              is here to guide you through every step of the process, ensuring that your loved one is honored in a
              meaningful way.
            </p>
            <p>
              Our services include traditional funerals, memorial services, cremation, and international repatriation.
              We pride ourselves on our ability to create personalized services that reflect the unique life and legacy
              of your loved one.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center">Our Values</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Compassion</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We approach every family with genuine care and empathy during their time of grief.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Respect</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We honor the dignity of each individual and respect diverse cultural and religious traditions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We're available 24/7 to provide support and assistance whenever you need us.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service, paying attention to every detail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center">Our Team</h2>
          <p className="mt-4 text-center text-muted-foreground">
            Our experienced and compassionate team is here to support you.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Michael Johnson",
                role: "Funeral Director",
                image: "/placeholder.svg?height=300&width=300",
                bio: "With over 20 years of experience, Michael leads our team with compassion and professionalism.",
              },
              {
                name: "Sarah Williams",
                role: "Bereavement Counselor",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Sarah provides emotional support and guidance to families during their time of grief.",
              },
              {
                name: "David Thompson",
                role: "Repatriation Specialist",
                image: "/placeholder.svg?height=300&width=300",
                bio: "David specializes in international repatriation services, ensuring smooth processes during difficult times.",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardTitle className="mt-4">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold">Ready to Learn More?</h2>
          <p className="mt-4 text-muted-foreground">
            Contact us today to learn more about our services or to schedule a consultation.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

