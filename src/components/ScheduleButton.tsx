'use client'

import { useEffect, useRef, useState } from 'react'

type ScheduleButtonProps = {
	label?: string
	color?: string
	className?: string
}

// Renders a Google Calendar scheduling popup button using Google's scheduling-button script.
// Falls back to a normal link if the script isn't available yet.
export default function ScheduleButton({ label = 'Schedule a Call', color = '#039BE5', className = '' }: ScheduleButtonProps) {
	const targetRef = useRef<HTMLSpanElement | null>(null)
	const [fallbackHref] = useState(
		'https://calendar.google.com/calendar/appointments/schedules/AcZssZ20YP2CwfwV9ha5U4udJfhgdck5hSLEANzt3UaMFcTTco4Y-sK-y4SNnh9fEZZUm2dBVzlJOGdv?gv=true'
	)

	useEffect(() => {
		function loadButton() {
			const calendarAny = (window as any).calendar
			if (calendarAny && calendarAny.schedulingButton && targetRef.current) {
				try {
					calendarAny.schedulingButton.load({
						url: fallbackHref,
						color,
						label,
						target: targetRef.current,
					})
				} catch {}
			}
		}

		// Try immediately, then on load
		loadButton()
		window.addEventListener('load', loadButton)
		return () => window.removeEventListener('load', loadButton)
	}, [label, color, fallbackHref])

	return (
		<span ref={targetRef} className={className}>
			<a href={fallbackHref} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center">
				{label}
			</a>
		</span>
	)
}


