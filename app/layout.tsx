import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export const metadata: Metadata = {
  title: 'Campione | Restaurant',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <section className='header'>
          <Header />
        </section>
        <div>
          <main className='main_content'> {children}</main>
          <section className='footer'>
            <Footer />
          </section>
        </div>
      </body>
    </html>
  )
}
