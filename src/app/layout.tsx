import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

import { Toaster } from "@/components/ui/Toaster";

import "@/styles/globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Brodit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({
  subsets: ["greek"],
});

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-300 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Providers>
          {/* @ts-expect-error server component */}
          <NavBar />

          {authModal}

          <div className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
