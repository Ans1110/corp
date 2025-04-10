// src/app/layout.tsx
import '../globals.css'
import Header from '@/app/components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
