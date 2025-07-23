import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Text, Playfair_Display, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimationProvider } from "@/contexts/animation-context"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dmSerifText = DM_Serif_Text({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif-text",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Timothy Rafferty - Portfolio",
  description: "Strategic technical leader with expertise in DevOps, observability, and API-driven systems",
  keywords: ["Timothy Rafferty", "DevOps", "Technical Leadership", "Observability", "API Integration"],
  authors: [{ name: "Timothy Rafferty" }],
  creator: "Timothy Rafferty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://timothyrafferty.dev",
    title: "Timothy Rafferty - Portfolio",
    description: "Strategic technical leader with expertise in DevOps, observability, and API-driven systems",
    siteName: "Timothy Rafferty Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timothy Rafferty - Portfolio",
    description: "Strategic technical leader with expertise in DevOps, observability, and API-driven systems",
    creator: "@tim_rafferty",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSerifText.variable} ${playfairDisplay.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <AnimationProvider>
            {children}
            <Toaster />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
