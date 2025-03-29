import Link from "next/link";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ServiceCategories from "@/components/service-categories";
import FeaturedServices from "@/components/featured-services";
import TestimonialSection from "@/components/testimonial-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Noctis
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Providing dignified and respectful services during your time
                  of need.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search services..."
                    className="w-full bg-background pl-8"
                  />
                </div>
                <Button asChild className="w-full">
                  <Link href="/services">Browse All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ServiceCategories />
        <FeaturedServices />
        <TestimonialSection />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Need Assistance?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our compassionate team is available 24/7 to help you through
                  this difficult time.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
