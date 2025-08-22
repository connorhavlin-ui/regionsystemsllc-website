import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Region Systems LLC - AI & Automation Services | Indiana',
    description: 'Contact Region Systems LLC for AI consulting and automation services in Indiana. Schedule a free consultation and learn about our free website offer with every project.',
    keywords: 'contact Region Systems, AI consulting Indiana, automation services, free consultation, free website offer, Indiana automation',
}

export default function Contact() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-28 pb-16 has-soft-mesh">
                <div className="container-custom text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-navy-600 mb-8 leading-relaxed">
                            Ready to transform your business with AI and automation? Let's discuss your needs and explore how we can help you achieve your goals.
                        </p>

                        {/* Free Website Offer */}
                        <div className="bg-gradient-to-r from-accent-50 to-navy-50 rounded-xl p-6 mb-8 inline-block border border-accent-200">
                            <div className="flex items-center space-x-3">
                                <div className="text-2xl">🎁</div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-navy-800">
                                        Every Project Includes a Free Website
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
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Let's Start the Conversation
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            Fill out the form below and we'll get back to you within 24 hours to discuss your automation needs.
                        </p>
                    </div>

                    <div className="transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll">
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Calendar Booking Section */}
            <section className="section-padding bg-navy-50 has-soft-mesh">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Schedule a Free Consultation
                        </h2>
                        <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                            Book a time that works for you. We'll discuss your business needs and explore automation opportunities.
                        </p>
                    </div>

                    <div className="transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll" data-animation-delay="200">
                        <div className="bg-white rounded-xl border border-navy-100 shadow-lg p-6">
                            <div className="aspect-[16/9] w-full">
                                <iframe
                                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ20YP2CwfwV9ha5U4udJfhgdck5hSLEANzt3UaMFcTTco4Y-sK-y4SNnh9fEZZUm2dBVzlJOGdv?gv=true"
                                    style={{ border: 0 }}
                                    width="100%"
                                    height="600"
                                    frameBorder={0}
                                    title="Schedule a consultation with Region Systems"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Other Ways to Connect
                        </h2>
                        <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                            Prefer to reach out directly? Here are our contact details.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll" data-animation-delay="0">
                            <div className="p-4 bg-accent-100 rounded-full w-fit mx-auto mb-4">
                                <div className="text-2xl">📧</div>
                            </div>
                            <h3 className="text-lg font-semibold text-navy-900 mb-2">Email</h3>
                            <p className="text-navy-600">hello@regionsystemsllc.com</p>
                            <p className="text-sm text-navy-500 mt-2">We respond within 24 hours</p>
                        </div>

                        <div className="text-center transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll" data-animation-delay="200">
                            <div className="p-4 bg-navy-100 rounded-full w-fit mx-auto mb-4">
                                <div className="text-2xl">🕒</div>
                            </div>
                            <h3 className="text-lg font-semibold text-navy-900 mb-2">Business Hours</h3>
                            <p className="text-navy-600">Monday - Friday</p>
                            <p className="text-sm text-navy-500 mt-2">9:00 AM - 6:00 PM ET</p>
                        </div>

                        <div className="text-center transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll" data-animation-delay="400">
                            <div className="p-4 bg-accent-100 rounded-full w-fit mx-auto mb-4">
                                <div className="text-2xl">📍</div>
                            </div>
                            <h3 className="text-lg font-semibold text-navy-900 mb-2">Service Area</h3>
                            <p className="text-navy-600">Indiana (ET)</p>
                            <p className="text-sm text-navy-500 mt-2">West Lafayette, Indianapolis, Fort Wayne, Bloomington, Northwest Indiana</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}