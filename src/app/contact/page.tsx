import ContactForm from '@/components/ContactForm'
import ScheduleButton from '@/components/ScheduleButton'
import {
    Mail,
    MapPin,
    Clock,
    Phone,
    MessageSquare,
    Calendar,
    Globe,
    Gift
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Contact Region Systems LLC - AI & Automation Services | Indiana',
    description: 'Get in touch with Region Systems LLC for AI consulting and automation services in Indiana. Schedule a free consultation or contact us directly. Every project includes a free website.',
    keywords: 'Contact Region Systems, AI consulting Indiana, automation services Indiana, Indiana automation experts, free consultation, free website with automation',
}

export default function Contact() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 has-soft-mesh">
                <div className="container-custom text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                            Let's Work Together
                        </h1>
                        <p className="text-xl text-navy-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Ready to transform your business with AI and automation? We're here to help you
                            save time, reduce errors, and unlock new opportunities.
                        </p>

                        <p className="text-lg text-navy-700 mb-8">
                            Serving all of Indiana: West Lafayette, Northwest Indiana, Indianapolis, Fort Wayne, Bloomington, and beyond.
                        </p>

                        {/* Free Website Offer */}
                        <div className="bg-gradient-to-r from-accent-50 to-navy-50 rounded-xl p-6 inline-block border border-accent-200 mb-8">
                            <div className="flex items-center space-x-3">
                                <Gift className="h-6 w-6 text-accent-600" />
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-navy-800">
                                        🎁 Every Project Includes a Free Website
                                    </h3>
                                    <p className="text-navy-700 text-sm">
                                        Get a professional website or complete rebuild at no additional cost
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="animate-on-scroll" data-animation-delay="0">
                            <h2 className="text-3xl font-bold text-navy-900 mb-6">
                                Send Us a Message
                            </h2>
                            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
                                Have questions about our services or ready to get started? Fill out the form
                                and we'll get back to you within 24 hours.
                            </p>
                            <ContactForm />
                        </div>

                        <div className="animate-on-scroll" data-animation-delay="200">
                            <div className="bg-gradient-to-br from-navy-50 to-accent-50 rounded-2xl p-8 border border-navy-100">
                                <h3 className="text-2xl font-bold text-navy-900 mb-6">
                                    Quick Contact
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <Mail className="h-6 w-6 text-accent-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-navy-800">Email</h4>
                                            <a
                                                href="mailto:hello@regionsystemsllc.com"
                                                className="text-navy-600 hover:text-accent-600 transition-colors duration-300"
                                            >
                                                hello@regionsystemsllc.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <MapPin className="h-6 w-6 text-accent-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-navy-800">Service Area</h4>
                                            <p className="text-navy-600">
                                                All of Indiana<br />
                                                West Lafayette, Indianapolis,<br />
                                                Fort Wayne, Bloomington,<br />
                                                Northwest Indiana & beyond
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <Clock className="h-6 w-6 text-accent-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-navy-800">Business Hours</h4>
                                            <p className="text-navy-600">
                                                Monday - Friday<br />
                                                9:00 AM - 6:00 PM ET<br />
                                                <span className="text-accent-600 font-medium">Free consultations available</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calendar Booking Section */}
            <section className="section-padding bg-navy-50 has-soft-mesh">
                <div className="container-custom text-center">
                    <div className="max-w-3xl mx-auto animate-on-scroll" data-animation-delay="0">
                        <h2 className="text-3xl font-bold text-navy-900 mb-6">
                            Schedule Your Free Consultation
                        </h2>
                        <p className="text-xl text-navy-600 mb-8 leading-relaxed">
                            Book a 30-minute consultation to discuss your automation needs and learn how
                            we can help transform your business operations.
                        </p>
                        <div className="bg-white rounded-xl p-8 shadow-lg border border-navy-100">
                            <div className="flex items-center justify-center space-x-3 mb-6">
                                <Calendar className="h-8 w-8 text-accent-600" />
                                <h3 className="text-2xl font-bold text-navy-900">Book Your Session</h3>
                            </div>
                            <p className="text-navy-600 mb-8">
                                Choose a time that works best for you. We'll discuss your current processes,
                                identify automation opportunities, and outline a clear path forward.
                            </p>
                            <ScheduleButton className="inline-flex" label="Schedule Consultation" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-navy-800 to-navy-900 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how AI and automation can streamline your operations and boost your bottom line.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ScheduleButton className="inline-flex bg-white text-navy-800 hover:bg-navy-50" label="Schedule Your Free Consultation" />
                        <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">
                            View Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}