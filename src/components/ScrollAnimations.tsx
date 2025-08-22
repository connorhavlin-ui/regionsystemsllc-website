'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimations() {
    const pathname = usePathname()
    const observerRef = useRef<IntersectionObserver | null>(null)
    const initializedRef = useRef(false)

    useEffect(() => {
        // Reset initialization flag on route change
        initializedRef.current = false

        // Small delay to ensure DOM is fully rendered
        const timer = setTimeout(() => {
            if (!initializedRef.current) {
                initScrollAnimations()
                initializedRef.current = true
            }
        }, 100)

        return () => {
            clearTimeout(timer)
            // Clean up observer on unmount
            if (observerRef.current) {
                observerRef.current.disconnect()
                observerRef.current = null
            }
        }
    }, [pathname])

    const initScrollAnimations = () => {
        // Clean up existing observer
        if (observerRef.current) {
            observerRef.current.disconnect()
        }

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in')
                }
            })
        }, observerOptions)

        // Observe all elements with animate-on-scroll class
        const elements = document.querySelectorAll('.animate-on-scroll')
        elements.forEach((el) => {
            observerRef.current?.observe(el)
        })
    }

    // This component doesn't render anything visible
    return null
}
