import Link from 'next/link'
import ScheduleButton from '@/components/ScheduleButton'
import {
    CheckCircle,
    Star,
    Zap,
    Target,
    Bot,
    Gift
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Pricing - AI & Automation Services | Region Systems LLC | United States',
    description: 'Transparent pricing for AI consulting and automation services across the United States. Based in Indiana. Every project includes a free website. Minimum engagement $500.',
    keywords: 'AI consulting pricing, automation services pricing, US automation costs, free website with automation, minimum engagement $500',
}

export default function Pricing() {
    const plans = [
        {
            name: 'Automation Audit — Starts at $500',
            description: 'Comprehensive assessment of your current processes to identify automation opportunities.',
            price: 'Starts at $500',
            features: [
                'Process analysis & documentation',
                'Automation opportunity identification',
                'ROI calculation & business case',
                'Implementation roadmap',
                'Free website or website rebuild included'
            ],
            popular: false,
            icon: Target
        },
        {
            name: 'Process Automation — Starts at $1,500',
            description: 'End-to-end automation solution for your most impactful business processes.',
            price: 'Starts at $1,500',
            features: [
                'Workflow design & optimization',
                'Custom automation development',
                'System integration setup',
                'User training & documentation',
                '30 days of support',
                'Free website or website rebuild included'
            ],
            popular: true,
            icon: Zap
        },
        {
            name: 'AI Strategy & Implementation — Starts at $5,000',
            description: 'Complete AI transformation with custom solutions and ongoing optimization.',
            price: 'Starts at $5,000',
            features: [
                'AI readiness assessment',
                'Custom AI solution development',
                'Data pipeline setup',
                'Model training & deployment',
                'Performance monitoring',
                '6 months of support',
                'Free website or website rebuild included'
            ],
            popular: false,
            icon: Bot
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 has-soft-mesh">
                <div className="container-custom text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                            Transparent Pricing
                        </h1>
                        <p className="text-xl text-navy-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Clear, upfront pricing for all our AI and automation services.
                            No hidden fees, no surprises—just results that transform your business.
                        </p>

                        <p className="text-lg text-navy-700 mb-8">
                            Serving all of Indiana: West Lafayette, Northwest Indiana, Indianapolis, Fort Wayne, Bloomington, and beyond.
                        </p>

                        {/* Free Website Offer Banner */}
                        <div className="bg-gradient-to-r from-accent-50 to-navy-50 rounded-xl p-6 inline-block border border-accent-200 mb-8">
                            <div className="flex items-center space-x-3">
                                <Gift className="h-6 w-6 text-accent-600" />
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-navy-800">
                                        🎁 Every Project Includes a Free Website
                                    </h3>
                                    <p className="text-navy-700 text-sm">
                                        Available with every engagement
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Choose Your Plan
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            From quick automation audits to full AI transformation, we have a solution
                            that fits your needs and budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={plan.name}
                                className={`relative bg-white rounded-xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${plan.popular
                                    ? 'border-accent-500 shadow-xl scale-105'
                                    : 'border-navy-100 hover:border-accent-300'
                                    } animate-on-scroll`}
                                data-animation-delay={index * 200}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                                            <Star className="h-4 w-4" />
                                            <span>Most Popular</span>
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <div className="p-3 bg-accent-100 rounded-lg w-fit mx-auto mb-4">
                                        <plan.icon className="h-8 w-8 text-accent-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-navy-900 mb-4">
                                        {plan.name}
                                    </h3>
                                    <p className="text-navy-600 mb-6 leading-relaxed">
                                        {plan.description}
                                    </p>
                                    <div className="text-3xl font-bold text-navy-900 mb-2">
                                        {plan.price}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start space-x-3">
                                            <CheckCircle className="h-5 w-5 text-accent-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-navy-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <ScheduleButton className="w-full" />
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
                        Let's discuss your automation needs and find the perfect solution for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ScheduleButton className="inline-flex bg-white text-navy-800 hover:bg-navy-50" />
                    </div>
                </div>
            </section>
        </>
    )
}


