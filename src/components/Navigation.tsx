'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Bot, Gift } from 'lucide-react'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/work', label: 'Work' },
        { href: '/payments', label: 'Payments' },
        { href: '/contact', label: 'Contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-sm shadow-lg'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center space-x-3 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="flex items-center space-x-3">
                                <img src="/logo.png" alt="Region Systems LLC Logo" className="h-10 w-auto" />
                            </div>
                            <div className="hidden sm:block">
                                <span className="text-xl font-bold text-navy-900">Region Systems LLC</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors duration-300 hover:text-accent-600 ${pathname === link.href
                                        ? 'text-accent-600'
                                        : 'text-navy-700'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="btn-primary text-sm hover:scale-105 transition-transform duration-200"
                            >
                                Schedule your Free Consultation Now!
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-lg text-navy-700 hover:text-navy-900 hover:bg-navy-50 transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0 overflow-hidden'
                            }`}
                    >
                        <div className="py-4 space-y-2 bg-white rounded-lg shadow-lg mt-2 border border-navy-100">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-navy-50 rounded-lg ${pathname === link.href
                                        ? 'text-accent-600 bg-accent-50'
                                        : 'text-navy-700'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="px-4 pt-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-primary w-full text-center"
                                >
                                    Schedule your Free Consultation Now!
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation

