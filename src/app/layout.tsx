import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://regionsystemsllc.com'),
    title: 'Region Systems LLC — AI & Automation for Indiana SMBs',
    description: 'Indiana-based AI and automation for small and mid-sized businesses. Save hours, cut errors, and speed up response times with practical systems built around your workflows.',
    keywords: 'Indiana AI, Indiana automation, small business automation, SMB AI, West Lafayette, Indianapolis, Fort Wayne, Bloomington, Northwest Indiana',
    authors: [{ name: 'Region Systems LLC' }],
    creator: 'Region Systems LLC',
    publisher: 'Region Systems LLC',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://regionsystemsllc.com',
        title: 'Region Systems LLC — AI & Automation for Indiana SMBs',
        description: 'We help Indiana businesses save hours and reduce errors with practical AI and automation.',
        siteName: 'Region Systems LLC',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Region Systems LLC — AI & Automation for Indiana SMBs',
        description: 'Practical automation for Indiana small and mid-sized businesses.',
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
                <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://regionsystemsllc.com'} />
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

