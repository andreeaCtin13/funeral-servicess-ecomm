"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// This would typically come from a database
const getServiceData = (id: string) => {
  const services = {
    "1": {
      id: 1,
      title: "Premium Sealed Coffin",
      description: "High-quality sealed coffin suitable for repatriation",
      longDescription:
        "Our Premium Sealed Coffin is crafted with the highest quality materials and is specifically designed for repatriation purposes. The coffin features a hermetically sealed interior, ensuring complete protection during transportation. The exterior is finished with a premium wood veneer and includes six high-quality handles for dignified carrying.",
      price: 1899,
      category: "coffins",
      image: "https://florencecasket.com/uploads/caskets/Georgetown.jpg",
      features: [
        "Hermetically sealed for repatriation",
        "Premium wood veneer exterior",
        "Luxurious interior lining",
        "Six high-quality handles",
        "Complies with international transport regulations",
        "Certificate of conformity included",
      ],
      specifications: {
        Material: "Premium hardwood with veneer finish",
        Interior: "Quilted satin lining",
        Dimensions: "Length: 213cm, Width: 61cm, Height: 56cm",
        Weight: "45kg",
        Sealing: "Hermetic zinc lining",
        Compliance: "Meets international air transport requirements",
      },
    },
    "2": {
      id: 2,
      title: "Standard Coffin",
      description: "Dignified standard coffin with quality finish",
      longDescription:
        "Our Standard Coffin offers a dignified option with a quality finish at a more accessible price point. Crafted with attention to detail, this coffin features a beautiful wood finish and comfortable interior lining.",
      price: 1299,
      category: "coffins",
      image: "https://florencecasket.com/uploads/caskets/Simsbury.jpg",
      features: [
        "Quality wood construction",
        "Comfortable interior lining",
        "Six standard handles",
        "Classic design",
        "Suitable for traditional services",
      ],
      specifications: {
        Material: "Selected hardwood",
        Interior: "Satin lining",
        Dimensions: "Length: 210cm, Width: 60cm, Height: 55cm",
        Weight: "40kg",
        Finish: "Polished wood veneer",
      },
    },
    "3": {
      id: 3,
      title: "Economy Coffin",
      description: "Respectful and affordable option",
      longDescription:
        "Our Economy Coffin provides a respectful option at an affordable price. Simple yet dignified, this coffin is suitable for those seeking a modest presentation while maintaining quality and respect.",
      price: 899,
      category: "coffins",
      image:
        "https://www.peacefunerals.co.uk/storage/app/uploads/public/5ef/21f/422/5ef21f422ffb4495241444.jpg",
      features: [
        "Affordable pricing",
        "Simple, dignified design",
        "Basic interior lining",
        "Four handles",
        "Suitable for cremation or burial",
      ],
      specifications: {
        Material: "Engineered wood",
        Interior: "Basic cloth lining",
        Dimensions: "Length: 208cm, Width: 58cm, Height: 52cm",
        Weight: "35kg",
        Finish: "Simple wood finish",
      },
    },
    "4": {
      id: 4,
      title: "Complete Memorial Package",
      description: "Full service memorial package including venue and catering",
      longDescription:
        "Our Complete Memorial Package offers a comprehensive solution for honoring your loved one. This all-inclusive package covers venue rental, catering, floral arrangements, and all essential funeral services.",
      price: 2499,
      category: "packages",
      image:
        "https://t3.ftcdn.net/jpg/06/31/58/78/360_F_631587878_f6g9V47kGT6cOMPn60636S3zL0pYyhMm.jpg",
      features: [
        "Venue rental for service and reception",
        "Catering for up to 50 guests",
        "Professional funeral director",
        "Standard floral arrangements",
        "Memorial booklet and cards",
        "Transportation services",
      ],
      specifications: {
        Duration: "4-hour service and reception",
        Catering: "Light refreshments and beverages",
        Venue: "Chapel and reception hall",
        Staff: "Funeral director and assistants",
        Inclusions: "All basic funeral services",
        Customization: "Options available for personalization",
      },
    },
    "5": {
      id: 5,
      title: "Basic Service Package",
      description: "Essential services for a dignified farewell",
      longDescription:
        "Our Basic Service Package provides all the essential elements needed for a dignified farewell. This package includes professional services, transportation, and a simple ceremony.",
      price: 1699,
      category: "packages",
      image: "https://evergreenjax.com/wp-content/uploads/2021/12/funeral.jpeg",
      features: [
        "Professional funeral director services",
        "Transportation of deceased",
        "Simple ceremony",
        "Basic memorial cards",
        "Coordination with cemetery or crematorium",
      ],
      specifications: {
        Duration: "2-hour service",
        Staff: "Funeral director",
        Venue: "Chapel only",
        Inclusions: "Basic funeral services",
        Customization: "Limited options available",
      },
    },
    "6": {
      id: 6,
      title: "Premium Floral Arrangement",
      description: "Beautiful premium floral tribute",
      longDescription:
        "Our Premium Floral Arrangement offers a stunning tribute to honor your loved one. This arrangement features premium seasonal flowers artfully arranged by our experienced florists.",
      price: 299,
      category: "flowers",
      image:
        "https://www.flowersinabasket.net/uploads/8/4/6/6/84660390/p139_orig.png",
      features: [
        "Premium seasonal flowers",
        "Artful arrangement",
        "Large, impressive display",
        "Personalized card",
        "Delivery to service location",
      ],
      specifications: {
        Size: 'Large (approximately 24" x 18")',
        Flowers: "Premium seasonal varieties",
        Style: "Traditional funeral spray",
        Customization: "Color preferences available",
        Delivery: "Included to service location",
      },
    },
    "7": {
      id: 7,
      title: "Standard Floral Tribute",
      description: "Tasteful floral arrangement",
      longDescription:
        "Our Standard Floral Tribute provides a tasteful arrangement to express your condolences. This arrangement includes a selection of seasonal flowers in a respectful design.",
      price: 199,
      category: "flowers",
      image:
        "https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-funeral-arrangement-in-white-345366-m.jpg",
      features: [
        "Seasonal flowers",
        "Tasteful arrangement",
        "Medium-sized display",
        "Personalized card",
        "Delivery to service location",
      ],
      specifications: {
        Size: 'Medium (approximately 18" x 14")',
        Flowers: "Seasonal varieties",
        Style: "Traditional arrangement",
        Customization: "Limited color preferences",
        Delivery: "Included to service location",
      },
    },
    "8": {
      id: 8,
      title: "Premium Catering Package",
      description: "High-quality catering for up to 50 guests",
      longDescription:
        "Our Premium Catering Package provides high-quality refreshments for up to 50 guests. This package includes a selection of finger foods, sandwiches, desserts, and beverages served by professional staff.",
      price: 999,
      category: "catering",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/9/451909413/WQ/KP/KG/43632874/party-catering-service-500x500.jpg",
      features: [
        "Catering for up to 50 guests",
        "Selection of finger foods and sandwiches",
        "Dessert options",
        "Hot and cold beverages",
        "Professional serving staff",
        "Setup and cleanup included",
      ],
      specifications: {
        Capacity: "Up to 50 guests",
        Menu: "Premium selection of foods",
        Beverages: "Coffee, tea, water, and juices",
        Staff: "Professional servers included",
        Duration: "Up to 3 hours of service",
        Setup: "Full setup and cleanup included",
      },
    },
    "9": {
      id: 9,
      title: "Standard Catering Package",
      description: "Quality catering for up to 30 guests",
      longDescription:
        "Our Standard Catering Package provides quality refreshments for up to 30 guests. This package includes a selection of light refreshments and beverages for after the service.",
      price: 699,
      category: "catering",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2024/1/375815998/HL/KA/WR/187373073/product-jpeg-500x500.jpg",
      features: [
        "Catering for up to 30 guests",
        "Light refreshments",
        "Basic dessert options",
        "Hot and cold beverages",
        "Setup and cleanup included",
      ],
      specifications: {
        Capacity: "Up to 30 guests",
        Menu: "Standard selection of foods",
        Beverages: "Coffee, tea, and water",
        Staff: "Basic service included",
        Duration: "Up to 2 hours of service",
        Setup: "Basic setup and cleanup included",
      },
    },
    "10": {
      id: 10,
      title: "International Repatriation",
      description: "Complete service for international repatriation",
      longDescription:
        "Our International Repatriation service provides a comprehensive solution for transporting your loved one across international borders. We handle all the necessary documentation, liaise with authorities, arrange appropriate transportation, and ensure compliance with all regulations. Our experienced team will guide you through every step of this complex process with compassion and professionalism.",
      price: 3999,
      category: "repatriation",
      image:
        "https://static.wixstatic.com/media/7cb51a_ebfe7ad0538847a98cbe3e01728d259c~mv2.jpg/v1/fill/w_640,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7cb51a_ebfe7ad0538847a98cbe3e01728d259c~mv2.jpg",
      features: [
        "Complete documentation handling",
        "Liaison with consulates and embassies",
        "Arrangement of appropriate transportation",
        "Hermetically sealed coffin included",
        "24/7 support throughout the process",
        "Tracking and updates on transportation",
      ],
      specifications: {
        "Service Coverage": "Worldwide",
        Documentation:
          "Death certificate, embalming certificate, non-infectious disease certificate",
        "Transport Options": "Air freight or ground transportation",
        Timeframe: "Typically 3-7 days depending on destination",
        Included: "Sealed coffin, documentation, transport, handling fees",
        Support: "Dedicated repatriation specialist",
      },
    },
    "11": {
      id: 11,
      title: "Domestic Repatriation",
      description: "Repatriation service within the country",
      longDescription:
        "Our Domestic Repatriation service provides a complete solution for transporting your loved one within the country. We handle all the necessary arrangements, documentation, and transportation to ensure a smooth and respectful transfer.",
      price: 1999,
      category: "repatriation",
      image:
        "https://static.wixstatic.com/media/7cb51a_ebfe7ad0538847a98cbe3e01728d259c~mv2.jpg/v1/fill/w_640,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7cb51a_ebfe7ad0538847a98cbe3e01728d259c~mv2.jpg",
      features: [
        "Complete documentation handling",
        "Arrangement of appropriate transportation",
        "Standard coffin included",
        "Support throughout the process",
        "Coordination with receiving funeral home",
      ],
      specifications: {
        "Service Coverage": "Nationwide",
        Documentation: "Death certificate and transit permits",
        "Transport Options": "Ground transportation",
        Timeframe: "Typically 1-3 days depending on distance",
        Included: "Standard coffin, documentation, transport",
        Support: "Repatriation coordinator",
      },
    },
    "12": {
      id: 12,
      title: "Memorial Keepsake",
      description: "Personalized memorial keepsake",
      longDescription:
        "Our Memorial Keepsake offers a beautiful way to honor and remember your loved one. This personalized item provides a lasting tribute that can be displayed or kept as a cherished memento.",
      price: 149,
      category: "others",
      image:
        "https://i.etsystatic.com/10813744/r/il/2e5308/1431990764/il_1588xN.1431990764_eiqi.jpg",
      features: [
        "Personalized with name and dates",
        "High-quality materials",
        "Elegant design",
        "Gift packaging included",
        "Multiple design options available",
      ],
      specifications: {
        Material: "Premium crystal or metal",
        Size: 'Approximately 5" x 3"',
        Personalization: "Laser engraving",
        Packaging: "Gift box included",
        "Production Time": "3-5 business days",
      },
    },
  };

  return services[id] || services["1"]; // Default to first service if not found
};

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const service = getServiceData(params.id);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    // Obține coșul existent din localStorage sau inițializează unul nou
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Adaugă produsul curent în coș
    const updatedCart = [...existingCart, service];

    // Salvează coșul actualizat în localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Simulează un apel API și redirecționează după 1 secundă
    setTimeout(() => {
      setIsAddingToCart(false);
      router.push("/checkout");
    }, 1000);
  };

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <Button variant="ghost" className="mb-6" asChild>
        <Link href="/services">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </Button>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{service.title}</h1>
            <p className="mt-2 text-xl font-semibold">
              ${service.price.toLocaleString()}
            </p>
            <p className="mt-4 text-muted-foreground">
              {service.longDescription}
            </p>
          </div>

          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <ul className="grid gap-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <dl className="grid gap-2">
                    {Object.entries(service.specifications).map(
                      ([key, value], index) => (
                        <div key={index} className="grid grid-cols-3 gap-4">
                          <dt className="font-medium">{key}</dt>
                          <dd className="col-span-2 text-muted-foreground">
                            {value}
                          </dd>
                        </div>
                      )
                    )}
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex flex-col space-y-4">
            <Button
              size="lg"
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              {isAddingToCart ? "Adding to Cart..." : "Proceed to Checkout"}
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Request More Information</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
