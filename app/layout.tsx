import type React from "react"
import type { Metadata } from "next"
import SmoothScroll from "@/components/smooth-scroll"
import "./globals.css"

export const metadata: Metadata = {
  title: "Virat Kohli - King of Cricket",
  description: "Tribute site to Virat Kohli: centuries, chases and the relentless pursuit of runs.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
