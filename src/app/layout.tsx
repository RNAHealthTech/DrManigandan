import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Dr. Manigandan K | Plastic, Cosmetic & Hand Microsurgeon | Sir Ganga Ram Hospital",
  description: "Official profile and appointment booking portal for Dr. Manigandan K, Associate Consultant in Plastic, Cosmetic & Hand Microsurgery at Sir Ganga Ram Hospital, New Delhi. Gold Medalist specializing in aesthetic procedures and microvascular reconstructions.",
  keywords: "Dr. Manigandan K, Plastic Surgeon Delhi, Cosmetic Surgeon, Hand Microsurgery, Sir Ganga Ram Hospital, Reconstructive Surgery, Rhinoplasty Delhi, Cleft Lip Repair",
  authors: [{ name: "Dr. Manigandan K" }],
  openGraph: {
    title: "Dr. Manigandan K | Plastic, Cosmetic & Hand Microsurgeon",
    description: "Official profile and appointment booking portal for Dr. Manigandan K at Sir Ganga Ram Hospital, New Delhi.",
    type: "website",
    locale: "en_IN",
    siteName: "Sir Ganga Ram Hospital",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
