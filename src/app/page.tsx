import Link from 'next/link'
import {
    ArrowRight,
    Bot,
    Zap,
    Target,
    Shield,
    CheckCircle,
    MessageSquare
} from 'lucide-react'

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 has-soft-mesh">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="animate-fade-in">
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
                                <Link
                                    href="/contact"
                                    className="btn-primary text-lg inline-flex items-center space-x-2 group"
                                >
                                    <span>Start Your Transformation</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
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

            {/* Indiana Coverage Blurb */}
            <section className="py-16 bg-white border-b border-navy-100">
                <div className="container-custom text-center">
                    <p className="text-lg text-navy-700">
                        Proudly serving Indiana (ET): West Lafayette, Northwest Indiana, Indianapolis, Fort Wayne, and Bloomington.
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
                        <div className="bg-white rounded-xl p-8 shadow-lg card-hover border border-navy-100">
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
                                    <span className="text-sm text-navy-600">ROI Analysis</span>
                                </li>
                            </ul>
                            <Link
                                href="/services#ai-consulting"
                                className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center space-x-1"
                            >
                                <span>Learn More</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Automation Integration */}
                        <div className="bg-white rounded-xl p-8 shadow-lg card-hover border border-navy-100">
                            <div className="p-3 bg-accent-100 rounded-lg w-fit mb-6">
                                <Zap className="h-8 w-8 text-accent-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-navy-900 mb-4">
                                Automation Integration
                            </h3>
                            <p className="text-navy-600 mb-6 leading-relaxed">
                                End-to-end automation solutions that streamline operations,
                                reduce manual work, and improve accuracy across your organization.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Process Automation</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Workflow Optimization</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">System Integration</span>
                                </li>
                            </ul>
                            <Link
                                href="/services#automation"
                                className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center space-x-1"
                            >
                                <span>Learn More</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Custom Solutions */}
                        <div className="bg-white rounded-xl p-8 shadow-lg card-hover border border-navy-100">
                            <div className="p-3 bg-accent-100 rounded-lg w-fit mb-6">
                                <Target className="h-8 w-8 text-accent-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-navy-900 mb-4">
                                Custom AI Solutions
                            </h3>
                            <p className="text-navy-600 mb-6 leading-relaxed">
                                Tailored AI applications built specifically for your unique business
                                challenges, from machine learning models to intelligent systems.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Machine Learning Models</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Predictive Analytics</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-accent-600" />
                                    <span className="text-sm text-navy-600">Intelligent Dashboards</span>
                                </li>
                            </ul>
                            <Link
                                href="/services#custom-solutions"
                                className="text-accent-600 hover:text-accent-700 font-medium inline-flex items-center space-x-1"
                            >
                                <span>Learn More</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Region Systems LLC */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">About Region Systems LLC</h2>
                            <p className="text-lg text-navy-600 mb-6 leading-relaxed">
                                We help organizations streamline operations with AI consulting and automation integration.
                                Our focus is practical outcomes: faster processes, fewer errors, and clear ROI.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-accent-600" /><span className="text-navy-700">Custom AI solutions tailored to your workflows</span></li>
                                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-accent-600" /><span className="text-navy-700">Automation that connects your existing tools</span></li>
                                <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-accent-600" /><span className="text-navy-700">Transparent delivery and measurable results</span></li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-accent-500 to-navy-600 rounded-2xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-4">How we work</h3>
                            <p className="text-accent-100 leading-relaxed">
                                Discovery → design → implementation → optimization. We integrate with your team and systems,
                                deliver in iterative milestones, and support ongoing improvements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials intentionally omitted until real references are available */}

            {/* Call to Action */}
            <section className="section-padding bg-gradient-to-br from-navy-800 to-navy-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-navy-100 mb-10 leading-relaxed">
                            Join hundreds of businesses that have already transformed their operations
                            with our AI and automation solutions. Let's discuss how we can help you achieve
                            your goals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Link
                                href="/contact"
                                className="bg-accent-600 hover:bg-accent-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center space-x-2"
                            >
                                <MessageSquare className="h-5 w-5" />
                                <span>Schedule a Consultation</span>
                            </Link>
                            <Link
                                href="/services"
                                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                            >
                                View All Services
                            </Link>
                        </div>

                        <div className="text-center text-navy-300">
                            <p className="text-sm">
                                Free consultation • No commitment • Expert guidance
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

