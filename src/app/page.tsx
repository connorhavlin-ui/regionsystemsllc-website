import Link from 'next/link'
import ScheduleButton from '@/components/ScheduleButton'
import {
    ArrowRight,
    Bot,
    Zap,
    Target,
    Shield,
    CheckCircle,
    MessageSquare,
    Globe,
    Gift
} from 'lucide-react'

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 has-soft-mesh">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="animate-fade-in-up">
                            <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                                <Bot className="h-4 w-4" />
                                <span>AI-Powered Business Transformation</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
                                Region Systems LLC — Indiana AI & Automation
                            </h1>

                            <p className="text-xl text-navy-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                                Save hours every week, cut manual errors, and speed up response times. We design practical AI and automation systems for Indiana small and mid‑sized businesses.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <ScheduleButton className="inline-flex" label="Schedule a Call" />
                                <Link
                                    href="/services"
                                    className="btn-outline text-lg"
                                >
                                    Explore Our Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
                    <div className="w-6 h-10 border-2 border-navy-300 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-navy-300 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Free Website Offer Section */}
            <section className="py-16 bg-gradient-to-r from-navy-50 to-accent-50 border-b border-navy-100">
                <div className="container-custom text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
                            <Gift className="h-6 w-6 text-accent-600" />
                            <span className="text-lg font-semibold text-navy-800">Special Offer</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                            Every Project Includes a Free Website
                        </h2>
                        <p className="text-xl text-navy-700 mb-6 leading-relaxed">
                            Get a professional website or complete website rebuild at no additional cost with every automation project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Learn More
                            </Link>
                            <Link href="/services" className="btn-outline">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indiana Coverage Blurb */}
            <section className="py-16 bg-white border-b border-navy-100">
                <div className="container-custom text-center">
                    <p className="text-lg text-navy-700">
                        Proudly serving all of Indiana: West Lafayette, Northwest Indiana, Indianapolis, Fort Wayne, Bloomington, and beyond.
                    </p>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section-padding bg-navy-50 has-soft-mesh">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Our Core Services
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            We deliver comprehensive AI and automation solutions tailored to your business needs,
                            from strategy to implementation and ongoing optimization.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* AI Consulting */}
                        <div className="bg-white rounded-xl p-8 shadow-lg card-hover border border-navy-100 animate-on-scroll" data-animation-delay="0">
                            <div className="p-3 bg-accent-100 rounded-lg w-fit mb-6">
                                <Bot className="h-8 w-8 text-accent-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-navy-900 mb-4">
                                AI Strategy & Consulting
                            </h3>
                            <p className="text-navy-600 mb-6 leading-relaxed">
                                Strategic AI roadmaps, feasibility studies, and technology assessments
                                to identify the best AI opportunities for your business.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">AI Readiness Assessment</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Technology Roadmapping</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">ROI Analysis & Planning</span>
                                </li>
                            </ul>
                            <Link href="/services" className="btn-outline w-full text-center">
                                Learn More
                            </Link>
                        </div>

                        {/* Process Automation */}
                        <div className="bg-white rounded-xl p-8 shadow-lg card-hover border border-navy-100 animate-on-scroll" data-animation-delay="200">
                            <div className="p-3 bg-accent-100 rounded-lg w-fit mb-6">
                                <Zap className="h-8 w-8 text-accent-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-navy-900 mb-4">
                                Process Automation
                            </h3>
                            <p className="text-navy-600 mb-6 leading-relaxed">
                                Streamline repetitive tasks with intelligent automation workflows
                                that reduce errors and free up your team's time.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Workflow Design</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Integration Setup</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Monitoring & Alerts</span>
                                </li>
                            </ul>
                            <Link href="/services" className="btn-outline w-full text-center">
                                Learn More
                            </Link>
                        </div>

                        {/* Data Analytics */}
                        <div className="bg-white rounded-xl p-8 shadow-lg card-hover border border-navy-100 animate-on-scroll" data-animation-delay="400">
                            <div className="p-3 bg-accent-100 rounded-lg w-fit mb-6">
                                <Target className="h-8 w-8 text-accent-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-navy-900 mb-4">
                                Data Analytics & Insights
                            </h3>
                            <p className="text-navy-600 mb-6 leading-relaxed">
                                Transform raw data into actionable insights with custom dashboards
                                and automated reporting systems.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Custom Dashboards</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Automated Reporting</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Performance Tracking</span>
                                </li>
                            </ul>
                            <Link href="/services" className="btn-outline w-full text-center">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Why Choose Region Systems?
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            We combine local expertise with cutting-edge technology to deliver results that matter.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center animate-on-scroll" data-animation-delay="0">
                            <div className="p-4 bg-navy-100 rounded-full w-fit mx-auto mb-4">
                                <Shield className="h-8 w-8 text-navy-700" />
                            </div>
                            <h3 className="text-lg font-semibold text-navy-900 mb-2">Local Expertise</h3>
                            <p className="text-navy-600 text-sm">Indiana-based team with deep understanding of local business needs.</p>
                        </div>

                        <div className="text-center animate-on-scroll" data-animation-delay="200">
                            <div className="p-4 bg-accent-100 rounded-full w-fit mx-auto mb-4">
                                <Zap className="h-8 w-8 text-accent-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-navy-900 mb-2">Fast Implementation</h3>
                            <p className="text-navy-600 text-sm">Quick turnaround times with proven automation frameworks.</p>
                        </div>

                        <div className="text-center animate-on-scroll" data-animation-delay="400">
                            <div className="p-4 bg-navy-100 rounded-full w-fit mx-auto mb-4">
                                <MessageSquare className="h-8 w-8 text-navy-700" />
                            </div>
                            <h3 className="text-lg font-semibold text-navy-900 mb-2">Ongoing Support</h3>
                            <p className="text-navy-600 text-sm">Continuous monitoring and support to ensure optimal performance.</p>
                        </div>

                        <div className="text-center animate-on-scroll" data-animation-delay="600">
                            <div className="p-4 bg-accent-100 rounded-full w-fit mx-auto mb-4">
                                <Globe className="h-8 w-8 text-accent-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-navy-900 mb-2">Free Website</h3>
                            <p className="text-navy-600 text-sm">Every project includes a professional website or rebuild at no cost.</p>
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
                        <ScheduleButton className="inline-flex" label="Schedule Your Free Consultation" />
                        <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

