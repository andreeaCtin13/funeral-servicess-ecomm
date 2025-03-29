import Link from "next/link";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ConfirmationPage() {
  // Generate a random order number
  const orderNumber = Math.floor(10000000 + Math.random() * 90000000);

  return (
    <div className="container flex items-center justify-center px-4 py-12 md:px-6 md:py-24">
      <Card className="mx-auto max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
          <CardTitle className="text-2xl">Order Confirmed</CardTitle>
          <CardDescription>Thank you for your purchase.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-muted-foreground">Order Number</p>
            <p className="font-medium">{orderNumber}</p>
          </div>
          <div>
            <p className="text-muted-foreground">
              A confirmation email has been sent to your email address.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              Our team will contact you shortly to discuss the next steps and
              arrange for the services you've selected.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
