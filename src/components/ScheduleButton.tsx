'use client'

import { useMemo } from 'react'

type ScheduleButtonProps = {
    label?: string
    className?: string
}

// Standardized CTA that links to the Contact page with Tally form.
export default function ScheduleButton({ label = 'Schedule your Free Consultation Now!', className = '' }: ScheduleButtonProps) {
    const href = useMemo(() => '/contact', [])
    return (
        <a href={href} className={`btn-primary inline-flex items-center justify-center ${className}`} aria-label={label}>
            {label}
        </a>
    )
}


