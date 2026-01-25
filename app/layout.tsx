import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jacques & Germaine - Mariage',
  description: 'Nous célébrons notre union le 18 Avril 2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-serif">{children}</body>
    </html>
  )
}
