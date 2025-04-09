// src/app/layout.tsx
import './globals.css'
import { ABeeZee } from 'next/font/google'

const abeeZee = ABeeZee({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'My App',
  description: 'Example app using Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={abeeZee.className}>
        {children}
      </body>
    </html>
  )
}
