import { ReactNode } from 'react'
import Navbar from '../compositions/navbar/navbar'

interface LayoutProps {
    children: ReactNode
}

export default function MainLayout({ children } : LayoutProps) {
  return (
    <main>
        <Navbar />
        {children}
    </main>
  )
}
