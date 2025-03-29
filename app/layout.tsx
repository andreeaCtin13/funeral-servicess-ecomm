import "@/app/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Phone } from "lucide-react";

import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
              <div className="container flex h-16 items-center">
                <Link href="/" className="font-semibold">
                  Noctis
                </Link>
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact
                    </Link>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} Compassionate Funeral Services.
                  All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Link href="/about">About</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/privacy">Privacy</Link>
                  <Link href="/terms">Terms</Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  generator: "v0.dev",
};
