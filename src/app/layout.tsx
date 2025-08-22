import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Region Systems LLC - AI & Automation Services | Indiana',
    description: 'AI consulting and automation integration services in Indiana. Transform your business with AI strategy, process automation, and custom solutions. Every project includes a free website.',
    keywords: 'AI consulting, automation services, Indiana, business automation, AI strategy, process optimization, free website, Region Systems',
    authors: [{ name: 'Region Systems LLC' }],
    creator: 'Region Systems LLC',
    publisher: 'Region Systems LLC',
    robots: 'index, follow',
    openGraph: {
        title: 'Region Systems LLC - AI & Automation Services',
        description: 'AI consulting and automation integration services in Indiana. Every project includes a free website.',
        url: 'https://regionsystems.com',
        siteName: 'Region Systems LLC',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Region Systems LLC - AI & Automation Services',
        description: 'AI consulting and automation integration services in Indiana. Every project includes a free website.',
    },
    alternates: {
        canonical: 'https://regionsystems.com',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Region Systems LLC",
                            "url": "https://regionsystems.com",
                            "logo": "https://regionsystems.com/logo.png",
                            "description": "AI consulting and automation integration services in Indiana. Every project includes a free website.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressRegion": "Indiana",
                                "addressCountry": "US"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "email": "hello@regionsystemsllc.com",
                                "availableLanguage": "English"
                            },
                            "sameAs": [
                                "https://linkedin.com/company/regionsystems",
                                "https://twitter.com/regionsystems"
                            ],
                            "serviceArea": {
                                "@type": "GeoCircle",
                                "geoMidpoint": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 39.8283,
                                    "longitude": -86.7994
                                },
                                "geoRadius": "200000"
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "AI & Automation Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "AI Strategy & Consulting",
                                            "description": "Strategic AI roadmaps and implementation guidance"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Process Automation",
                                            "description": "End-to-end process automation solutions"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Custom AI Solutions",
                                            "description": "Tailored AI applications for unique challenges"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
            </head>
            <body className={inter.className}>
                <Navigation />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <ScrollAnimations />
            </body>
        </html>
    )
}

