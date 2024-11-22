import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Need a Bed | Find Available Shelter in Utah",
  description: "Find immediate shelter and support services across Utah. Real-time bed availability in homeless shelters, emergency housing, and crisis centers. A free service by Nomad Alliance.",
  metadataBase: new URL('https://needabed.org'),
  keywords: "homeless shelter utah, emergency housing utah, crisis shelter salt lake city, available beds utah, homeless services utah, emergency shelter utah",
  alternates: {
    canonical: 'https://needabed.org'
  },
  openGraph: {
    title: 'Need a Bed | Find Available Shelter in Utah',
    description: 'Find immediate shelter and support services across Utah. Real-time bed availability in homeless shelters.',
    url: 'https://needabed.org',
    siteName: 'Need a Bed',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/Logo.png',
      width: 512,
      height: 512,
      alt: 'Need a Bed Logo'
    }]
  },
  twitter: {
    card: 'summary',
    title: 'Need a Bed | Find Available Shelter in Utah',
    description: 'Find immediate shelter and support services across Utah',
    images: ['/Logo.png']
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'shortcut icon', url: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'apple-touch-icon', url: '/Logo.png' },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <Script 
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Need a Bed",
              "url": "https://needabed.org",
              "description": "Find immediate shelter and support services across Utah"
            })
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}