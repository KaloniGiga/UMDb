import Header from '@/component/Header'
import Navbar from '@/component/Navbar'
import './globals.css'
import Providers from './Providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <head />
      <body>
        <Providers>

          <Header />

          <Navbar />

         {children}
        </Providers>
       

      </body>
    </html>
  )
}
