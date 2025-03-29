import Link from "next/link";
import { Flower, Package, Coffee, Gift, Truck } from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServiceCategories() {
  const categories = [
    {
      title: "Coffins & Caskets",
      description: "Quality coffins including options for repatriation",
      icon: <Package className="h-10 w-10" />,
      href: "/services?category=coffins",
    },
    {
      title: "Service Packages",
      description: "Complete funeral service packages for all needs",
      icon: <Gift className="h-10 w-10" />,
      href: "/services?category=packages",
    },
    {
      title: "Floral Arrangements",
      description: "Beautiful floral tributes and arrangements",
      icon: <Flower className="h-10 w-10" />,
      href: "/services?category=flowers",
    },
    {
      title: "Catering Services",
      description: "Catering options for memorial gatherings",
      icon: <Coffee className="h-10 w-10" />,
      href: "/services?category=catering",
    },
    {
      title: "Repatriation Services",
      description: "International repatriation and transport services",
      icon: <Truck className="h-10 w-10" />,
      href: "/services?category=repatriation",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Browse our range of services designed to provide comfort and
              support during difficult times.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="flex flex-col items-center text-center"
            >
              <CardHeader>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                  {category.icon}
                </div>
                <CardTitle className="mt-4">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button asChild variant="outline">
                  <Link href={category.href}>View Options</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
