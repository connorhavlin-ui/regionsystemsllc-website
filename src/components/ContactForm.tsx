'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    MessageSquare,
    Calendar,
    User,
    Building,
    FileText
} from 'lucide-react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setIsSubmitted(true)
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    service: '',
                    message: '',
                    budget: '',
                    timeline: ''
                })
            } else {
                throw new Error('Failed to submit form')
            }
        } catch (err) {
            setError('There was an error submitting your message. Please try again or contact us directly.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const services = [
        'AI Strategy & Consulting',
        'Automation Integration',
        'Custom AI Solutions',
        'Ongoing Support',
        'Business Intelligence',
        'Data Management',
        'System Integration',
        'Other'
    ]

    const budgetRanges = [
        'Under $500',
        '$500 - $1,000',
        '$1,000 - $5,000',
        '$5,000 - $15,000',
        '$15,000 - $25,000',
        'Not sure yet'
    ]

    const timelines = [
        'ASAP',
        '1-3 months',
        '3-6 months',
        '6-12 months',
        '12+ months',
        'Just exploring'
    ]

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            details: 'hello@regionsystemsllc.com',
            link: 'mailto:hello@regionsystemsllc.com',
            description: 'Send us an email anytime'
        },
        {
            icon: Phone,
            title: 'Call Us',
            details: '(219) 510-3566',
            link: 'tel:+12195103566',
            description: 'Monday to Friday, 9AM-6PM EST'
        },
        {
            icon: MapPin,
            title: 'Service Area',
            details: 'Indiana (ET)',
            link: '#',
            description: 'West Lafayette, NWI, Indianapolis, Fort Wayne, Bloomington'
        },
        {
            icon: Clock,
            title: 'Response Time',
            details: 'Mon–Fri 9AM–6PM ET',
            link: '#',
            description: 'Typical first response in under 12 hours'
        }
    ]

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-50 via-white to-accent-50 pt-20">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-white rounded-2xl shadow-xl p-12 border border-navy-100">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="h-10 w-10 text-green-600" />
                            </div>
                            <h1 className="text-3xl font-bold text-navy-900 mb-4">
                                Thank You!
                            </h1>
                            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
                                Your message has been sent successfully. Our team will review your inquiry
                                and get back to you within 24 hours.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/"
                                    className="btn-primary"
                                >
                                    Return Home
                                </Link>
                                <Link
                                    href="/services"
                                    className="btn-outline"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-50 via-white to-accent-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                            Get in <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-xl text-navy-600 leading-relaxed mb-8">
                            Ready to transform your business with AI and automation? Let's discuss your
                            specific needs and develop a customized solution that drives real results.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-navy-600">
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-accent-600" />
                                <span>Free consultation</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-accent-600" />
                                <span>Custom solution design</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-accent-600" />
                                <span>ROI analysis included</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-bold text-navy-900 mb-6">
                                Contact Information
                            </h2>
                            <p className="text-navy-600 mb-8 leading-relaxed">
                                Have questions about our services? Want to discuss a specific project?
                                We're here to help. Reach out through any of the channels below.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="p-3 bg-accent-100 rounded-lg flex-shrink-0">
                                            <info.icon className="h-6 w-6 text-accent-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-navy-900 mb-1">
                                                {info.title}
                                            </h3>
                                            <div className="text-navy-800 font-medium mb-1">
                                                {info.link !== '#' ? (
                                                    <a
                                                        href={info.link}
                                                        className="hover:text-accent-600 transition-colors duration-300"
                                                    >
                                                        {info.details}
                                                    </a>
                                                ) : (
                                                    info.details
                                                )}
                                            </div>
                                            <p className="text-sm text-navy-600">
                                                {info.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-navy-50 rounded-xl border border-navy-100">
                                <h3 className="font-semibold text-navy-900 mb-3 flex items-center space-x-2">
                                    <Calendar className="h-5 w-5 text-accent-600" />
                                    <span>Schedule your Free Consultation Now!</span>
                                </h3>
                                <p className="text-sm text-navy-600 mb-4">
                                    Ready to talk? Use our contact page to schedule your free consultation.
                                </p>
                                <a href="/contact" className="btn-primary">Go to Contact</a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-navy-100">
                                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                                    Send us a Message
                                </h2>

                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-700 text-sm">{error}</p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy-400" />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy-400" />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company & Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-navy-900 mb-2">
                                                Company
                                            </label>
                                            <div className="relative">
                                                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy-400" />
                                                <input
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300"
                                                    placeholder="Company Name"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy-400" />
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300"
                                                    placeholder="(219) 510-3566"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service & Budget */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-navy-900 mb-2">
                                                Service Interest
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 bg-white"
                                            >
                                                <option value="">Select a service</option>
                                                {services.map((service) => (
                                                    <option key={service} value={service}>
                                                        {service}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-medium text-navy-900 mb-2">
                                                Budget Range
                                            </label>
                                            <select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 bg-white"
                                            >
                                                <option value="">Select budget range</option>
                                                {budgetRanges.map((range) => (
                                                    <option key={range} value={range}>
                                                        {range}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div>
                                        <label htmlFor="timeline" className="block text-sm font-medium text-navy-900 mb-2">
                                            Project Timeline
                                        </label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 bg-white"
                                        >
                                            <option value="">Select timeline</option>
                                            {timelines.map((timeline) => (
                                                <option key={timeline} value={timeline}>
                                                    {timeline}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                                            Message *
                                        </label>
                                        <div className="relative">
                                            <FileText className="absolute left-3 top-3 h-5 w-5 text-navy-400" />
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 border border-navy-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-300 resize-vertical"
                                                placeholder="Tell us about your project, challenges, or questions. The more details you provide, the better we can assist you."
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full bg-navy-800 hover:bg-navy-900 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    <p className="text-xs text-navy-500 text-center">
                                        By submitting this form, you agree to our privacy policy and
                                        consent to be contacted by our team regarding your inquiry.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-navy-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            Quick answers to common questions about our services and process.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-navy-100">
                            <h3 className="text-lg font-semibold text-navy-900 mb-3">
                                How quickly can you start a project?
                            </h3>
                            <p className="text-navy-600 text-sm leading-relaxed">
                                We typically begin discovery within 1-2 weeks of signed agreement.
                                For urgent projects, we can often accommodate faster timelines.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-navy-100">
                            <h3 className="text-lg font-semibold text-navy-900 mb-3">
                                Do you work with small businesses?
                            </h3>
                            <p className="text-navy-600 text-sm leading-relaxed">
                                Yes. We focus on small and mid‑sized businesses in Indiana.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-navy-100">
                            <h3 className="text-lg font-semibold text-navy-900 mb-3">
                                What's included in the consultation?
                            </h3>
                            <p className="text-navy-600 text-sm leading-relaxed">
                                A comprehensive assessment of your needs, technology recommendations,
                                preliminary ROI analysis, and a customized project roadmap.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-navy-100">
                            <h3 className="text-lg font-semibold text-navy-900 mb-3">
                                Do you provide ongoing support?
                            </h3>
                            <p className="text-navy-600 text-sm leading-relaxed">
                                Yes, we offer comprehensive support packages including monitoring,
                                maintenance, optimization, and training for your team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
