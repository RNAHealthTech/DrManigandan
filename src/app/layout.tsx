import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dr. Gourav Siwas | Plastic, Cosmetic & Hand Microsurgeon | Sir Ganga Ram Hospital",
  description: "Official profile and appointment booking portal for Dr. Gourav Siwas, Associate Hony. Active Visiting Consultant in Plastic, Cosmetic & Hand Microsurgery at Sir Ganga Ram Hospital, New Delhi. Specializing in aesthetic procedures, hand replantations, and microvascular reconstructions.",
  keywords: "Dr. Gourav Siwas, Plastic Surgeon Delhi, Cosmetic Surgeon, Hand Microsurgery, Sir Ganga Ram Hospital, Reconstructive Surgery, Rhinoplasty Delhi, Hand Replantation Delhi",
  authors: [{ name: "Dr. Gourav Siwas" }],
  openGraph: {
    title: "Dr. Gourav Siwas | Plastic, Cosmetic & Hand Microsurgeon",
    description: "Official profile and appointment booking portal for Dr. Gourav Siwas at Sir Ganga Ram Hospital, New Delhi.",
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
    <html lang="en" className={poppins.variable} data-scroll-behavior="smooth">
      <body className={poppins.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
