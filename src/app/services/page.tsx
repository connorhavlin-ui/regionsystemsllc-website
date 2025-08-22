import Link from 'next/link'
import ScheduleButton from '@/components/ScheduleButton'
import {
    Bot,
    Zap,
    Target,
    CheckCircle,
    ArrowRight,
    Globe,
    Gift
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI & Automation Services | Region Systems LLC | Indiana',
    description: 'Professional AI consulting, process automation, and custom solutions for Indiana businesses. Every project includes a free website. Save time and reduce errors.',
    keywords: 'AI consulting Indiana, automation services Indiana, process automation, custom AI solutions, Indiana automation experts, free website with automation',
}

export default function Services() {
    const mainServices = [
        {
            title: 'AI Strategy & Consulting',
            description: 'Strategic AI roadmaps, feasibility studies, and technology assessments to identify the best AI opportunities for your business.',
            icon: Bot,
            features: [
                'AI Readiness Assessment',
                'Technology Roadmapping',
                'ROI Analysis & Planning',
                'Implementation Strategy',
                'Vendor Selection Support'
            ],
            pricing: 'Starts at $2,500',
            timeline: '2-4 weeks',
            cta: 'Schedule Consultation'
        },
        {
            title: 'Process Automation',
            description: 'Streamline repetitive tasks with intelligent automation workflows that reduce errors and free up your team\'s time.',
            icon: Zap,
            features: [
                'Workflow Analysis & Design',
                'Integration Setup',
                'Custom Automation Scripts',
                'Monitoring & Alerts',
                'Ongoing Optimization'
            ],
            pricing: 'Starts at $1,500',
            timeline: '1-3 weeks',
            cta: 'Schedule Consultation'
        },
        {
            title: 'Custom AI Solutions',
            description: 'Tailored AI applications designed to solve your specific business challenges and unlock new opportunities.',
            icon: Target,
            features: [
                'Custom AI Model Development',
                'Data Pipeline Setup',
                'API Integration',
                'User Interface Design',
                'Training & Documentation'
            ],
            pricing: 'Starts at $5,000',
            timeline: '4-8 weeks',
            cta: 'Schedule Consultation'
        }
    ]

    const additionalServices = [
        {
            title: 'Data Analytics & Reporting',
            description: 'Transform raw data into actionable insights with custom dashboards and automated reporting systems.',
            icon: Target,
            features: ['Custom Dashboards', 'Automated Reports', 'Performance Tracking', 'Data Visualization']
        },
        {
            title: 'System Integration',
            description: 'Connect your existing tools and platforms to create seamless workflows and eliminate data silos.',
            icon: Zap,
            features: ['API Development', 'Data Synchronization', 'Workflow Automation', 'Error Handling']
        },
        {
            title: 'Ongoing Support & Maintenance',
            description: 'Continuous monitoring, updates, and optimization to ensure your automation systems perform at their best.',
            icon: Bot,
            features: ['24/7 Monitoring', 'Performance Optimization', 'Security Updates', 'User Training']
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 has-soft-mesh">
                <div className="container-custom text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center space-x-3 bg-accent-100 text-accent-800 px-6 py-3 rounded-full text-sm font-medium mb-8">
                            <Globe className="h-5 w-5" />
                            <span>Professional AI & Automation Services</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                            AI & Automation Services
                        </h1>

                        <p className="text-xl text-navy-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                            We deliver comprehensive AI and automation solutions tailored to your business needs,
                            from strategy to implementation and ongoing optimization.
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

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <ScheduleButton className="inline-flex" label="Schedule a Consultation" />
                            <Link href="/pricing" className="btn-outline text-lg">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Our Core Services
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            Comprehensive solutions designed to transform your business operations through intelligent automation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {mainServices.map((service, index) => (
                            <div key={service.title} className="bg-white rounded-xl p-8 shadow-lg card-hover border border-navy-100 animate-on-scroll" data-animation-delay={index * 200}>
                                <div className="p-3 bg-accent-100 rounded-lg w-fit mb-6">
                                    <service.icon className="h-8 w-8 text-accent-600" />
                                </div>

                                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-navy-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-navy-800 mb-3">What's Included</h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center space-x-2">
                                                <CheckCircle className="h-4 w-4 text-accent-600" />
                                                <span className="text-sm text-navy-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t border-navy-100 pt-4 mb-6">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-navy-600">Starting Price:</span>
                                        <span className="font-semibold text-navy-800">{service.pricing}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm mt-2">
                                        <span className="text-navy-600">Timeline:</span>
                                        <span className="font-semibold text-navy-800">{service.timeline}</span>
                                    </div>
                                </div>

                                <ScheduleButton className="w-full" label={service.cta} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="section-padding bg-navy-50 has-soft-mesh">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Additional Services
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            Specialized solutions to complement your core automation initiatives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {additionalServices.map((service, index) => (
                            <div key={service.title} className="bg-white rounded-xl p-6 shadow-lg border border-navy-100 animate-on-scroll" data-animation-delay={index * 200}>
                                <div className="p-3 bg-navy-100 rounded-lg w-fit mb-4">
                                    <service.icon className="h-6 w-6 text-navy-700" />
                                </div>

                                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-navy-600 mb-4 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center space-x-2">
                                            <CheckCircle className="h-3 w-3 text-accent-600" />
                                            <span className="text-xs text-navy-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-navy-800 to-navy-900 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our AI and automation expertise can transform your business operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ScheduleButton className="inline-flex bg-white text-navy-800 hover:bg-navy-50" label="Schedule Your Free Consultation" />
                        <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

