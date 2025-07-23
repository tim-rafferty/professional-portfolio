import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Text, Outfit } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator"
import { AnimationProvider } from "@/contexts/animation-context"
import { getMetaInfo } from "@/lib/data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

// Local fonts with fallbacks
const abrilFatface = localFont({
  src: "./fonts/AbrilFatface-Regular.woff2",
  variable: "--font-abril-fatface",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["serif"],
})

const recoleta = localFont({
  src: [
    {
      path: "./fonts/Recoleta-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-recoleta",
  display: "swap",
  fallback: ["serif"],
})

const sfProDisplay = localFont({
  src: [
    {
      path: "./fonts/SFProDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro-display",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
})

const metaInfo = getMetaInfo()

export const metadata: Metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSerifText.variable} ${outfit.variable} ${abrilFatface.variable} ${recoleta.variable} ${sfProDisplay.variable}`}
      >
        <AnimationProvider>
          <ScrollProgressIndicator />
          {children}
        </AnimationProvider>
      </body>
    </html>
  )
}
