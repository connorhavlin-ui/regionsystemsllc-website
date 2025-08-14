import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us - Region Systems LLC',
    description: 'Get in touch with Region Systems LLC for AI consulting and automation integration services.',
    keywords: 'contact, AI consulting, automation integration, free consultation, get quote',
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
                            <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1o1YoiNdOa4Ezoy_Bw793sj5TSiRj4O2FDy08heBiQMveo2cP2CbMEUdRmxXJ2Y9H83v61NJQJ?gv=true" style={{ border: 0 }} width="100%" height="600" frameBorder={0}></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}