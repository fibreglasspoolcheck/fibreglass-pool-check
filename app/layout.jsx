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
  openGraph: {
    siteName: 'Fibreglass Pool Check',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fibreglass Pool Check - Independent fibreglass pool assessments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://fibreglasspoolcheck.com.au/',
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
        <Script id="google-ads-ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18010642704');
            gtag('config', 'G-GGKLMQL660');
          `}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "name": "Fibreglass Pool Check",
              "url": "https://fibreglasspoolcheck.com.au",
              "description": "Independent fibreglass pool inspection reports, quote reviews and buyer guidance from an independent specialist with 10+ years experience.",
              "founder": {
                "@type": "Person",
                "name": "Brady Smith",
                "jobTitle": "Fibreglass Pool Specialist"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Australia"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "help@fibreglasspoolcheck.com.au"
              },
              "identifier": {
                "@type": "Text",
                "value": "ABN 26 533 957 536"
              }
            })
          }}
        />
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
