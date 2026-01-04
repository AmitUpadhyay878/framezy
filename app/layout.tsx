import type { Metadata } from "next";
 import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./Provider";


const dmSans = DM_Sans({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Framezy webapp | create UI/UX mokeups in minutes",
  description: "Create stunning UI/UX mockups in minutes with Framezy's intuitive webapp. Elevate your design process effortlessly.",
  // openGraph: {
  //   title: "Framezy webapp | create UI/UX mokeups in minutes",
  //   description: "Create stunning UI/UX mockups in minutes with Framezy's intuitive webapp. Elevate your design process effortlessly.",
  // },
  // twitter: {
  //   title: "Framezy webapp | create UI/UX mokeups in minutes",
  //   description: "Create stunning UI/UX mockups in minutes with Framezy's intuitive webapp. Elevate your design process effortlessly.",
  // },
  // alternates: {
  //   canonical: "https://framezy.com",
  //   languages: {
  //     "en-US": "https://framezy.com",
  //   },
  // },
  // authors: [
  //   {
  //     name: "Framezy",
  //     url: "https://framezy.com",
  //   },
  //   {
  //     name: "Amit Upadhyay",
  //     url: "https://github.com/amitupadhyay878"
  //   }
  // ],
  // creator: "Framezy",
  // publisher: "Framezy",
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //   },
  // },
  // verification: {
  //   google: "your-google-verification-code",
  // },
  // metadataBase: new URL("https://framezy.com"),
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  // other: {
  //   "max-image-preview": "large",
  //   "max-video-preview": -1,
  //   "max-snippet": -1,
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
