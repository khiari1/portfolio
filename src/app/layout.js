import "./globals.css"
import { Inter } from "next/font/google"
import Header from '../components/Header';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Khiari Aymen",
  description: "developed by KHIARI",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="P2_1zWxkE0R-QmgUGw4dGpmHqVlIO0X-SaoFDdH-ciM" />
        <link rel="icon" href="/favicon.ico" /> 
      </head>
      <body className={inter.className}>
        <Header />
        <SpeedInsights/>
        <Analytics/>
        {children}
      </body>
    </html>
  )
}