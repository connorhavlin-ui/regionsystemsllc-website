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
    FileText
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'AI & Automation Services - Region Systems LLC',
    description: 'AI consulting and automation integration built around your processes. Strategy, implementation, and optimization by Region Systems LLC.',
    keywords: 'AI consulting, automation integration, machine learning, RPA, process automation, custom AI solutions, business intelligence',
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
            pricing: '',
            timeline: ''
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
            pricing: '',
            timeline: ''
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
            pricing: '',
            timeline: ''
        }
    ]

    const additionalServices = [
        {
            icon: BarChart3,
            title: 'Business Intelligence',
            description: 'Transform data into actionable insights with advanced analytics and visualization.',
            features: ['Data Warehousing', 'Advanced Analytics', 'Interactive Dashboards']
        },
        {
            icon: Database,
            title: 'Data Management',
            description: 'Comprehensive data strategy, governance, and infrastructure optimization.',
            features: ['Data Architecture', 'Quality Management', 'Governance Framework']
        },
        {
            icon: Cog,
            title: 'System Integration',
            description: 'Seamlessly connect disparate systems for unified operations.',
            features: ['API Development', 'Legacy Modernization', 'Cloud Migration']
        },
        {
            icon: Brain,
            title: 'Machine Learning Operations',
            description: 'End-to-end MLOps for scalable and reliable ML deployments.',
            features: ['Model Deployment', 'Monitoring & Maintenance', 'Version Control']
        }
    ]

    const industryExpertise = [
        {
            industry: 'Manufacturing',
            applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization'],
            icon: Settings
        },
        {
            industry: 'Financial Services',
            applications: ['Risk Assessment', 'Fraud Detection', 'Algorithmic Trading'],
            icon: LineChart
        },
        {
            industry: 'Healthcare',
            applications: ['Diagnostic Assistance', 'Patient Management', 'Drug Discovery'],
            icon: Shield
        },
        {
            industry: 'Retail & E-commerce',
            applications: ['Recommendation Systems', 'Inventory Management', 'Price Optimization'],
            icon: TrendingUp
        },
        {
            industry: 'Human Resources',
            applications: ['Talent Acquisition', 'Performance Analytics', 'Employee Engagement'],
            icon: Users
        },
        {
            industry: 'Legal & Compliance',
            applications: ['Document Review', 'Contract Analysis', 'Regulatory Monitoring'],
            icon: FileText
        }
    ]

    const processSteps = [
        {
            step: '01',
            title: 'Discovery',
            description: 'We analyze your business processes, challenges, and objectives to identify AI opportunities.'
        },
        {
            step: '02',
            title: 'Strategy',
            description: 'Develop a comprehensive AI strategy and roadmap aligned with your business goals.'
        },
        {
            step: '03',
            title: 'Design',
            description: 'Create detailed solution architecture and implementation plans with stakeholder input.'
        },
        {
            step: '04',
            title: 'Development',
            description: 'Build and test AI solutions using agile methodologies for rapid iteration.'
        },
        {
            step: '05',
            title: 'Deployment',
            description: 'Implement solutions with minimal disruption and comprehensive change management.'
        },
        {
            step: '06',
            title: 'Optimization',
            description: 'Monitor performance and continuously optimize for improved results and ROI.'
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 has-soft-mesh">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                            AI & Automation <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-xl text-navy-600 leading-relaxed mb-8">
                            From strategic consulting to custom implementation, we deliver comprehensive
                            AI and automation solutions that transform your business operations and drive sustainable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="btn-primary text-lg inline-flex items-center space-x-2"
                            >
                                <MessageSquare className="h-5 w-5" />
                                <span>Schedule Consultation</span>
                            </Link>
                            <Link
                                href="#services"
                                className="btn-outline text-lg"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section id="services" className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Our Core Services
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            Comprehensive AI and automation solutions designed to address every aspect
                            of your digital transformation journey.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {mainServices.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                    }`}
                            >
                                {/* Content */}
                                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="p-3 bg-accent-100 rounded-lg">
                                            <service.icon className="h-8 w-8 text-accent-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-navy-900">
                                                {service.title}
                                            </h3>
                                            <p className="text-accent-600 font-medium">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-lg text-navy-600 leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                        <div>
                                            <h4 className="font-semibold text-navy-900 mb-4">Key Features</h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center space-x-2">
                                                        <CheckCircle className="h-4 w-4 text-accent-600 flex-shrink-0" />
                                                        <span className="text-sm text-navy-600">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-navy-900 mb-4">Benefits</h4>
                                            <ul className="space-y-2">
                                                {service.benefits.map((benefit, benefitIndex) => (
                                                    <li key={benefitIndex} className="flex items-center space-x-2">
                                                        <TrendingUp className="h-4 w-4 text-accent-600 flex-shrink-0" />
                                                        <span className="text-sm text-navy-600">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                        <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                                            <span>Get Started</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Visual */}
                                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                    <div className="bg-gradient-to-br from-accent-500 to-navy-600 rounded-2xl p-8 text-white">
                                        <div className="space-y-6">
                                            <div className="flex items-center space-x-3">
                                                <service.icon className="h-12 w-12 text-accent-200" />
                                                <div>
                                                    <h4 className="text-xl font-bold">{service.title}</h4>
                                                    <p className="text-accent-100">Transforming Business Operations</p>
                                                </div>
                                            </div>

                                            {/* Removed generic success metrics */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="section-padding bg-navy-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Additional Capabilities
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            Complementary services that enhance and support your AI and automation initiatives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {additionalServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover border border-navy-100">
                                <div className="p-3 bg-accent-100 rounded-lg w-fit mb-4">
                                    <service.icon className="h-6 w-6 text-accent-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-navy-600 text-sm leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <ul className="space-y-1">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="text-xs text-navy-500">
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Expertise */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Industry Expertise
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            We bring deep industry knowledge and specialized AI applications
                            across diverse sectors.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industryExpertise.map((industry, index) => (
                            <div key={index} className="bg-navy-50 rounded-xl p-6 border border-navy-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-2 bg-accent-100 rounded-lg">
                                        <industry.icon className="h-6 w-6 text-accent-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-navy-900">
                                        {industry.industry}
                                    </h3>
                                </div>
                                <div className="space-y-2">
                                    {industry.applications.map((app, appIndex) => (
                                        <div key={appIndex} className="flex items-center space-x-2">
                                            <div className="w-1.5 h-1.5 bg-accent-600 rounded-full"></div>
                                            <span className="text-sm text-navy-600">{app}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Overview */}
            <section className="section-padding bg-navy-900 text-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Our Process
                        </h2>
                        <p className="text-xl text-navy-100 max-w-3xl mx-auto">
                            A proven methodology that ensures successful AI and automation implementations
                            from conception to optimization.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-navy-800 rounded-xl p-6 border border-navy-700 h-full">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center font-bold text-lg">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-semibold">{step.title}</h3>
                                    </div>
                                    <p className="text-navy-200 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector line for larger screens */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent-600 z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-gradient-to-br from-accent-500 to-navy-600 text-white">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-accent-100 mb-10 leading-relaxed">
                            Let's discuss your specific needs and develop a customized AI and automation
                            strategy that drives real results for your organization.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link
                                href="/contact"
                                className="bg-white text-navy-900 hover:bg-navy-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center space-x-2"
                            >
                                <MessageSquare className="h-5 w-5" />
                                <span>Schedule Free Consultation</span>
                            </Link>
                            <Link
                                href="/about"
                                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                            >
                                Learn About Our Team
                            </Link>
                        </div>

                        <div className="text-center text-accent-200">
                            <p className="text-sm">
                                Free 30-minute consultation • Custom solution design • ROI analysis included
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

