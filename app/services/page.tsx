"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  // Sample service data
  const services = [
    {
      id: 1,
      title: "Premium Sealed Coffin",
      description: "High-quality sealed coffin suitable for repatriation",
      price: 1899,
      category: "coffins",
      image: "https://florencecasket.com/uploads/caskets/Georgetown.jpg",
    },
    {
      id: 2,
      title: "Standard Coffin",
      description: "Dignified standard coffin with quality finish",
      price: 1299,
      category: "coffins",
      image: "https://florencecasket.com/uploads/caskets/Simsbury.jpg",
    },
    {
      id: 3,
      title: "Economy Coffin",
      description: "Respectful and affordable option",
      price: 899,
      category: "coffins",
      image:
        "https://www.peacefunerals.co.uk/storage/app/uploads/public/5ef/21f/422/5ef21f422ffb4495241444.jpg",
    },
    {
      id: 4,
      title: "Complete Memorial Package",
      description: "Full service memorial package including venue and catering",
      price: 2499,
      category: "packages",
      image:
        "https://t3.ftcdn.net/jpg/06/31/58/78/360_F_631587878_f6g9V47kGT6cOMPn60636S3zL0pYyhMm.jpg",
    },
    {
      id: 5,
      title: "Basic Service Package",
      description: "Essential services for a dignified farewell",
      price: 1699,
      category: "packages",
      image: "https://evergreenjax.com/wp-content/uploads/2021/12/funeral.jpeg",
    },
    {
      id: 6,
      title: "Premium Floral Arrangement",
      description: "Beautiful premium floral tribute",
      price: 299,
      category: "flowers",
      image:
        "https://www.flowersinabasket.net/uploads/8/4/6/6/84660390/p139_orig.png",
    },
    {
      id: 7,
      title: "Standard Floral Tribute",
      description: "Tasteful floral arrangement",
      price: 199,
      category: "flowers",
      image:
        "https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-funeral-arrangement-in-white-345366-m.jpg",
    },
    {
      id: 8,
      title: "Premium Catering Package",
      description: "High-quality catering for up to 50 guests",
      price: 999,
      category: "catering",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/9/451909413/WQ/KP/KG/43632874/party-catering-service-500x500.jpg",
    },
    {
      id: 9,
      title: "Standard Catering Package",
      description: "Quality catering for up to 30 guests",
      price: 699,
      category: "catering",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/1/375815998/HL/KA/WR/187373073/product-jpeg-500x500.jpg",
    },
    {
      id: 10,
      title: "International Repatriation",
      description: "Complete service for international repatriation",
      price: 3999,
      category: "repatriation",
      image:
        "https://static.wixstatic.com/media/7cb51a_ebfe7ad0538847a98cbe3e01728d259c~mv2.jpg/v1/fill/w_640,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7cb51a_ebfe7ad0538847a98cbe3e01728d259c~mv2.jpg",
    },
    {
      id: 11,
      title: "Domestic Repatriation",
      description: "Repatriation service within the country",
      price: 1999,
      category: "repatriation",
      image:
        "https://static.wixstatic.com/media/7cb51a_ebfe7ad0538847a98cbe3e01728d259c~mv2.jpg/v1/fill/w_640,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7cb51a_ebfe7ad0538847a98cbe3e01728d259c~mv2.jpg",
    },
    {
      id: 12,
      title: "Memorial Keepsake",
      description: "Personalized memorial keepsake",
      price: 149,
      category: "others",
      image:
        "https://i.etsystatic.com/10813744/r/il/2e5308/1431990764/il_1588xN.1431990764_eiqi.jpg",
    },
  ];

  // Filter services based on search query and filters
  const filteredServices = services.filter((service) => {
    // Filter by search query
    if (
      searchQuery &&
      !service.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !service.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Filter by category
    if (selectedCategory !== "all" && service.category !== selectedCategory) {
      return false;
    }

    // Filter by price range
    if (priceRange === "under1000" && service.price >= 1000) return false;
    if (
      priceRange === "1000to2000" &&
      (service.price < 1000 || service.price > 2000)
    )
      return false;
    if (priceRange === "over2000" && service.price <= 2000) return false;

    return true;
  });

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Services
          </h1>
          <p className="max-w-[900px] text-muted-foreground">
            Browse our range of services designed to provide comfort and support
            during difficult times.
          </p>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search services..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="coffins">Coffins & Caskets</SelectItem>
                <SelectItem value="packages">Service Packages</SelectItem>
                <SelectItem value="flowers">Floral Arrangements</SelectItem>
                <SelectItem value="catering">Catering</SelectItem>
                <SelectItem value="repatriation">Repatriation</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your search with these filters.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Price Range</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="price-all"
                          checked={priceRange === "all"}
                          onCheckedChange={() => setPriceRange("all")}
                        />
                        <Label htmlFor="price-all">All Prices</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="price-under1000"
                          checked={priceRange === "under1000"}
                          onCheckedChange={() => setPriceRange("under1000")}
                        />
                        <Label htmlFor="price-under1000">Under $1,000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="price-1000to2000"
                          checked={priceRange === "1000to2000"}
                          onCheckedChange={() => setPriceRange("1000to2000")}
                        />
                        <Label htmlFor="price-1000to2000">
                          $1,000 - $2,000
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="price-over2000"
                          checked={priceRange === "over2000"}
                          onCheckedChange={() => setPriceRange("over2000")}
                        />
                        <Label htmlFor="price-over2000">Over $2,000</Label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={() => {
                      setPriceRange("all");
                      setSelectedCategory("all");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {filteredServices.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-lg font-medium">No services found</p>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setPriceRange("all");
              }}
            >
              Reset All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                      unoptimized={service.image?.startsWith("http")}
                    />
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
        )}
      </div>
    </div>
  );
}
