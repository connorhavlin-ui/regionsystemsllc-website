import Link from 'next/link'
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        company: [
            { label: 'About Us', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Contact', href: '/contact' },
        ],
        services: [
            { label: 'AI Consulting', href: '/services#ai-consulting' },
            { label: 'Automation Integration', href: '/services#automation' },
            { label: 'Custom Solutions', href: '/services#custom-solutions' },
            { label: 'Payments', href: '/payments' },
        ],
        legal: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Cookie Policy', href: '/cookies' },
        ],
    }

    const socialLinks = [
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Github, href: '#', label: 'GitHub' },
    ]

    return (
        <footer className="bg-navy-900 text-white">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 mb-6">
                            <img src="/logo.png" alt="Region Systems LLC" className="h-8 w-auto" />
                            <div>
                                <span className="text-xl font-bold">Region Systems LLC</span>
                            </div>
                        </Link>
                        <p className="text-navy-300 mb-6 text-sm leading-relaxed">
                            AI consulting and automation integration for small and mid-sized businesses.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-navy-300 hover:text-accent-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-navy-300 hover:text-accent-400 transition-colors duration-300 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <a
                                        href="mailto:hello@regionsystemsllc.com"
                                        className="text-navy-300 hover:text-accent-400 transition-colors duration-300 text-sm"
                                    >
                                        hello@regionsystemsllc.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <a
                                        href="tel:+12195103566"
                                        className="text-navy-300 hover:text-accent-400 transition-colors duration-300 text-sm"
                                    >
                                        (219) 510-3566
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                                    <div className="text-navy-300 text-sm">
                                        Indiana-focused (ET) — West Lafayette, NWI, Indianapolis, Fort Wayne, Bloomington
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-navy-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-navy-400 text-sm">
                            © {currentYear} Region Systems LLC. All rights reserved.
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-navy-400 hover:text-accent-400 transition-colors duration-300 text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
