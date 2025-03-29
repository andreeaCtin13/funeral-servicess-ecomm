import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FeaturedServices() {
  const featuredServices = [
    {
      id: 1,
      title: "Premium Sealed Coffin",
      description: "High-quality sealed coffin suitable for repatriation",
      price: 1899,
      category: "coffins",
      image: "https://florencecasket.com/uploads/caskets/Georgetown.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Complete Memorial Package",
      description: "Full service memorial package including venue and catering",
      price: 2499,
      category: "packages",
      image:
        "https://t3.ftcdn.net/jpg/06/31/58/78/360_F_631587878_f6g9V47kGT6cOMPn60636S3zL0pYyhMm.jpg",
      featured: true,
    },
    {
      id: 3,
      title: "International Repatriation",
      description: "Complete service for international repatriation",
      price: 3999,
      category: "repatriation",
      image:
        "https://static.wixstatic.com/media/7cb51a_ebfe7ad0538847a98cbe3e01728d259c~mv2.jpg/v1/fill/w_640,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7cb51a_ebfe7ad0538847a98cbe3e01728d259c~mv2.jpg",
      featured: true,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Featured Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Our most requested services providing dignity and respect.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {featuredServices.map((service) => (
            <Card key={service.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2">Featured</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
                <p className="mt-4 font-semibold">
                  ${service.price.toLocaleString()}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/services/${service.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
