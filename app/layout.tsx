import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/whatsapp.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen gap-2">
            <Navbar />
            <main className="container mx-auto  max-w-7xl pt-5 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex justify-between px-6 py-3 bg-blue-900 text-white">
              <div className="flex items-center">
                &copy; 2024 Sold.co.zw. All rights reserved.
              </div>
              <div className="flex items-center gap-2 justify-between">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="#"
                  title="Privacy Policy"
                >
                  <p className="text-white">Privacy Policy</p>
                </Link>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="/"
                  title="Terms of Service"
                >
                  <p className="text-white">Terms of Service</p>
                </Link>
              </div>
            </footer>

          </div>
        </Providers>
      </body>
    </html>
  );
}
