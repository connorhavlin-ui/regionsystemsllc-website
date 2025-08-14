import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://regionsystemsllc.com'),
    title: 'Region Systems LLC - AI Consulting & Automation Integration',
    description: 'Region Systems LLC delivers AI consulting and automation integration tailored to your operations. Practical, efficient solutions built for real business outcomes.',
    keywords: 'AI consulting, automation integration, machine learning, artificial intelligence, business automation, digital transformation',
    authors: [{ name: 'Region Systems LLC' }],
    creator: 'Region Systems LLC',
    publisher: 'Region Systems LLC',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://regionsystems.com',
        title: 'Region Systems LLC - AI Consulting & Automation Integration',
        description: 'AI consulting and automation integration for growing businesses. Built for impact.',
        siteName: 'Region Systems LLC',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Region Systems LLC - AI Consulting & Automation Integration',
        description: 'AI consulting and automation integration for growing businesses.',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://regionsystems.com" />
            </head>
            <body className={`${inter.className} antialiased bg-site text-navy-900`}>
                {process.env.NEXT_PUBLIC_GA4_ID && (
                    <>
                        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} strategy="afterInteractive" />
                        <Script id="ga4-init" strategy="afterInteractive">{`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);} 
                          gtag('js', new Date());
                          gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', { send_page_view: true });
                        `}</Script>
                    </>
                )}
                <Navigation />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

