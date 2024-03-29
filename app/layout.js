import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Middle from './components/Middle'
import Bottom from './components/Bottom'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hulu website',
  description: 'A website for hulu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
     <Middle />
        <Bottom />
      <Footer />
        {children}
        </body>
    </html>
  )
}
