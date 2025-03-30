"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Info, ShoppingBag } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { CartUtils } from "@/lib/cartUtils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const items = CartUtils.getCart();
    setCartItems(items);
    setIsEmpty(items.length === 0);

    // If cart is empty, redirect to services page
    if (items.length === 0) {
      setTimeout(() => {
        router.push("/services");
      }, 2000);
    }
  }, [router]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const orderData = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("zip").value,
      paymentMethod,
      subtotal,
      tax,
      total,
      items: cartItems,
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "orders"), orderData);

      // Clear cart after successful order
      CartUtils.clearCart();

      router.push("/confirmation");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Failed to save order. Try again!");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isEmpty) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-24 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
        <h1 className="mt-6 text-3xl font-bold">Your Cart is Empty</h1>
        <p className="mt-2 text-muted-foreground">
          You don't have any items in your cart.
        </p>
        <Button
          className="mt-6"
          size="lg"
          onClick={() => router.push("/services")}
        >
          Browse Services
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
        <p className="mt-2 text-muted-foreground">
          Complete your purchase securely.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
                <CardDescription>
                  Please provide your contact details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" required />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP</Label>
                    <Input id="zip" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>
                  Select your preferred payment method.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit or Debit Card
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-4 space-y-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Test Mode</AlertTitle>
                      <AlertDescription>
                        Use card number 4242 4242 4242 4242, any future date,
                        any 3 digits for CVC, and any 5 digits for ZIP.
                      </AlertDescription>
                    </Alert>

                    <div className="space-y-2">
                      <Label htmlFor="card-name">Name on card</Label>
                      <Input id="card-name" placeholder="John Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card number</Label>
                      <Input
                        id="card-number"
                        placeholder="4242 4242 4242 4242"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry-month">Expiry Month</Label>
                        <Select required>
                          <SelectTrigger id="expiry-month">
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => (
                              <SelectItem
                                key={i + 1}
                                value={(i + 1).toString()}
                              >
                                {(i + 1).toString().padStart(2, "0")}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiry-year">Expiry Year</Label>
                        <Select required>
                          <SelectTrigger id="expiry-year">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => (
                              <SelectItem
                                key={i}
                                value={(
                                  new Date().getFullYear() + i
                                ).toString()}
                              >
                                {new Date().getFullYear() + i}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>
                  Review your order before completing your purchase.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {item.title}{" "}
                        {item.quantity > 1 ? `(${item.quantity})` : ""}
                      </span>
                      <span>
                        ${(item.price * (item.quantity || 1)).toLocaleString()}
                      </span>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleSubmit}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Complete Purchase"}
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-4 text-center">
              <Button variant="link" onClick={() => router.push("/services")}>
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
