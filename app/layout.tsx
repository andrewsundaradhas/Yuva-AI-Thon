import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { monaspace_neon, monaspace_argon, monaspace_xenon } from './fonts'

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
    <html lang="en" className={`${monaspace_neon.variable} ${monaspace_argon.variable} ${monaspace_xenon.variable} antialiased`}>
      <body className={`${monaspace_xenon.variable} font-monaspace-xenon antialiased bg-black text-white`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
