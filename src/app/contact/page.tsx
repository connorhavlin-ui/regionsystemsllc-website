import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Region Systems LLC (Indiana) — Schedule a Call',
    description: 'Indiana-based AI & automation for SMBs. Hours: Mon–Fri 9AM–6PM ET (West Lafayette). Email hello@regionsystemsllc.com or schedule via Google Calendar.',
    keywords: 'contact, AI consulting, automation integration, Indiana, SMB, schedule',
}

export default function Contact() {
    return (
        <>
            <ContactForm />
            <section className="section-padding bg-navy-50">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-2xl font-bold text-navy-900 mb-4">Book a Call</h2>
                    <div className="bg-white rounded-xl border border-navy-100 shadow-lg p-4">
                        <div className="aspect-[16/9] w-full">
                            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ20YP2CwfwV9ha5U4udJfhgdck5hSLEANzt3UaMFcTTco4Y-sK-y4SNnh9fEZZUm2dBVzlJOGdv?gv=true" style={{ border: 0 }} width="100%" height="600" frameBorder={0}></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}