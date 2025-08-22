import Link from 'next/link'
import {
    Bot,
    Zap,
    Target,
    GraduationCap,
    BarChart3,
    Database,
    Cog,
    Brain,
    TrendingUp,
    Shield,
    Clock,
    CheckCircle,
    ArrowRight,
    MessageSquare,
    Lightbulb,
    Settings,
    LineChart,
    Users,
    FileText,
    Globe,
    Gift
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI & Automation Services - Region Systems LLC',
    description: 'AI consulting and automation integration built around your processes. Strategy, implementation, and optimization by Region Systems LLC. Every project includes a free website.',
    keywords: 'AI consulting, automation integration, machine learning, RPA, process automation, custom AI solutions, business intelligence, Indiana automation services, free website with automation',
}

export default function Services() {
    const mainServices = [
        {
            id: 'ai-consulting',
            icon: Bot,
            title: 'AI Strategy & Consulting',
            subtitle: 'Strategic AI roadmaps and implementation guidance',
            description: 'Comprehensive AI assessment, strategy development, and roadmap creation to identify the best AI opportunities for your business.',
            features: [
                'AI Readiness Assessment',
                'Technology Roadmapping',
                'ROI Analysis & Business Case',
                'Risk Assessment & Mitigation',
                'Change Management Strategy',
                'Vendor Selection Support'
            ],
            benefits: [
                'Clear AI implementation roadmap',
                'Reduced implementation risks',
                'Optimized technology investments',
                'Accelerated time-to-value'
            ],
            pricing: 'Starts at $2,500',
            timeline: '4-6 weeks'
        },
        {
            id: 'automation',
            icon: Zap,
            title: 'Automation Integration',
            subtitle: 'End-to-end process automation solutions',
            description: 'Complete automation solutions that streamline operations, reduce manual work, and improve accuracy across your organization.',
            features: [
                'Process Discovery & Analysis',
                'RPA Implementation',
                'Workflow Automation',
                'System Integration',
                'Document Processing',
                'API Development & Integration'
            ],
            benefits: [
                'Significant reduction in manual tasks',
                'Improved accuracy and consistency',
                'Faster processing times'
            ],
            pricing: 'Starts at $749',
            timeline: '2-4 weeks'
        },
        {
            id: 'custom-solutions',
            icon: Target,
            title: 'Custom AI Solutions',
            subtitle: 'Tailored AI applications for unique challenges',
            description: 'Bespoke AI applications built specifically for your unique business challenges, from machine learning models to intelligent systems.',
            features: [
                'Machine Learning Models',
                'Predictive Analytics',
                'Natural Language Processing',
                'Computer Vision',
                'Intelligent Dashboards',
                'Real-time Decision Systems'
            ],
            benefits: [
                'Competitive advantage through unique AI',
                'Seamless integration with existing systems',
                'Scalable and maintainable solutions',
                'Ongoing support and optimization'
            ],
            pricing: 'Starts at $5,000',
            timeline: '8-12 weeks'
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="pt-28 pb-16 has-soft-mesh">
                <div className="container-custom text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
                            AI & Automation Services
                        </h1>
                        <p className="text-xl text-navy-600 mb-8 leading-relaxed">
                            Comprehensive AI consulting and automation integration built around your processes.
                            Strategy, implementation, and optimization by Region Systems LLC.
                        </p>

                        {/* Free Website Offer */}
                        <div className="bg-gradient-to-r from-accent-50 to-navy-50 rounded-xl p-6 mb-8 border border-accent-200 inline-block">
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
                            <Link href="/contact" className="btn-primary">
                                Schedule a Consultation
                            </Link>
                            <Link href="/pricing" className="btn-outline">
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
                            We deliver end-to-end solutions that transform your business operations through intelligent automation and AI.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {mainServices.map((service, index) => (
                            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll`} data-animation-delay={index * 200}>
                                    <div className="p-4 bg-accent-100 rounded-xl w-fit mb-6">
                                        <service.icon className="h-12 w-12 text-accent-600" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-navy-900 mb-4">{service.title}</h3>
                                    <p className="text-lg text-navy-600 mb-6 leading-relaxed">{service.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                        <div>
                                            <h4 className="font-semibold text-navy-800 mb-3">Features</h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature) => (
                                                    <li key={feature} className="flex items-center space-x-2 text-navy-600">
                                                        <CheckCircle className="h-4 w-4 text-accent-600 flex-shrink-0" />
                                                        <span className="text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-navy-800 mb-3">Benefits</h4>
                                            <ul className="space-y-2">
                                                {service.benefits.map((benefit) => (
                                                    <li key={benefit} className="flex items-center space-x-2 text-navy-600">
                                                        <CheckCircle className="h-4 w-4 text-accent-600 flex-shrink-0" />
                                                        <span className="text-sm">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link href="/contact" className="btn-primary">
                                            Get Started
                                        </Link>
                                        <Link href="/pricing" className="btn-outline">
                                            View Pricing
                                        </Link>
                                    </div>
                                </div>

                                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll`} data-animation-delay={index * 200 + 100}>
                                    <div className="bg-gradient-to-br from-navy-50 to-accent-50 rounded-2xl p-8 border border-navy-100">
                                        <div className="text-center">
                                            <h4 className="text-xl font-semibold text-navy-800 mb-4">Project Details</h4>
                                            <div className="space-y-4">
                                                <div className="bg-white rounded-lg p-4 border border-navy-100">
                                                    <div className="text-2xl font-bold text-accent-600">{service.pricing}</div>
                                                    <div className="text-sm text-navy-600">Investment</div>
                                                </div>
                                                <div className="bg-white rounded-lg p-4 border border-navy-100">
                                                    <div className="text-2xl font-bold text-navy-600">{service.timeline}</div>
                                                    <div className="text-sm text-navy-600">Timeline</div>
                                                </div>
                                                <div className="bg-accent-100 rounded-lg p-4 border border-accent-200">
                                                    <div className="text-lg font-semibold text-accent-800">🎁 Free Website Included</div>
                                                    <div className="text-sm text-accent-700">Professional website or rebuild</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            Specialized solutions to complement your automation and AI initiatives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: GraduationCap,
                                title: 'Training & Support',
                                description: 'Comprehensive training programs and ongoing support to ensure your team maximizes the value of your automation solutions.',
                                features: ['User training', 'Documentation', 'Ongoing support', 'Best practices']
                            },
                            {
                                icon: BarChart3,
                                title: 'Performance Analytics',
                                description: 'Advanced analytics and reporting to measure the impact and ROI of your automation investments.',
                                features: ['KPI tracking', 'ROI analysis', 'Performance reports', 'Optimization insights']
                            },
                            {
                                icon: Database,
                                title: 'Data Migration',
                                description: 'Seamless data migration and integration services to ensure your automation systems work with your existing data.',
                                features: ['Data mapping', 'ETL processes', 'Validation', 'Testing']
                            }
                        ].map((service, index) => (
                            <div key={service.title} className="bg-white rounded-xl p-8 shadow-lg card-hover border border-navy-100 transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll" data-animation-delay={index * 200}>
                                <div className="p-3 bg-navy-100 rounded-lg w-fit mb-6">
                                    <service.icon className="h-8 w-8 text-navy-700" />
                                </div>
                                <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                                <p className="text-navy-600 mb-6 leading-relaxed">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center space-x-2 text-sm text-navy-600">
                                            <CheckCircle className="h-4 w-4 text-accent-600" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="btn-outline w-full text-center">
                                    Learn More
                                </Link>
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
                        Let's discuss how our AI and automation services can transform your business operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary bg-white text-navy-800 hover:bg-navy-50">
                            Schedule a Consultation
                        </Link>
                        <Link href="/pricing" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

