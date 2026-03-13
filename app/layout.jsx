import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://fibreglasspoolcheck.com.au'),
  title: {
    default: 'Independent Fibreglass Pool Checks & Quote Reviews Australia',
    template: '%s | Fibreglass Pool Check',
  },
  description: 'Expert fibreglass pool inspection reports, quote reviews and buyer guidance from an independent specialist with 10+ years experience.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Fibreglass Pool Check',
    locale: 'en_AU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18010642704"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18010642704');
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
