import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Willy & Princilia - Mariage',
  description: 'Nous célébrons notre union le 29 Mars 2025',
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
