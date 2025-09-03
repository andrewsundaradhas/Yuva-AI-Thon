import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Viewport configuration
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#0a0b0f',
};

export const metadata: Metadata = {
  title: "YUVA AI-Thon - National Hackathon",
  description: "Join YUVA AI-Thon, a national hackathon at VIT Chennai on Sep 24-25, 2025",
  generator: "v0.app",
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'YUVA AI-Thon'
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/logos/yuva.jpg',
    apple: '/logos/yuva.jpg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-black text-white`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
