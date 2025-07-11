import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased ${redHatDisplay.className} bg-background-primary text-content-body`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-4HZ3TNB99C" />
    </html>
  )
}
