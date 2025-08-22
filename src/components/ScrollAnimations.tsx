'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimations() {
    const pathname = usePathname()
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        // Clean up existing observer
        if (observerRef.current) {
            observerRef.current.disconnect()
        }

        // Wait for page to be fully rendered
        const timer = setTimeout(() => {
            initScrollAnimations()
        }, 200)

        return () => {
            clearTimeout(timer)
            if (observerRef.current) {
                observerRef.current.disconnect()
                observerRef.current = null
            }
        }
    }, [pathname])

    const initScrollAnimations = () => {
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

    return null
}
