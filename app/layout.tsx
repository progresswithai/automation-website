import type { Metadata } from "next";
import "./globals.css";
import FloatingControls from "@/components/FloatingControls";

export const metadata: Metadata = {
  title: "The AI Automation Agency",
  description: "We create hands-off AI systems for you. We tell you exactly what to do, what systems to use, and why they work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingControls />
      </body>
    </html>
  );
}
