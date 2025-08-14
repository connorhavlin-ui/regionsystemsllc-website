import Link from 'next/link'
import {
    Users,
    Target,
    Award,
    TrendingUp,
    Shield,
    Lightbulb,
    Zap,
    Globe,
    CheckCircle,
    ArrowRight,
    Linkedin,
    Mail
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Region Systems LLC — Indiana AI & Automation',
    description: 'Indiana-based, ET hours. We help small and mid-sized businesses save time and reduce errors with pragmatic AI and automation.',
    keywords: 'Indiana AI, Indiana automation, SMB, West Lafayette, NWI, Indianapolis, Fort Wayne, Bloomington',
}

export default function About() {
    const teamMembers = [
        {
            name: 'Connor Havlin',
            role: 'Founder',
            bio: 'Based in West Lafayette, Indiana (ET). Focused on building practical automation that removes repetitive work for SMBs.',
            expertise: ['AI Implementation', 'Process Automation', 'Systems Integration', 'Custom Solutions'],
            linkedin: '#',
            email: 'hello@regionsystemsllc.com'
        }
        // Growing team - new members joining soon
    ]

    const values = [
        {
            icon: Shield,
            title: 'Trust & Security',
            description: 'We prioritize data security and maintain the highest standards of confidentiality in all our client relationships.'
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'We stay at the forefront of AI technology, continuously exploring new ways to solve complex business challenges.'
        },
        {
            icon: TrendingUp,
            title: 'Results-Driven',
            description: 'Every solution we deliver is designed to provide measurable ROI and tangible business value.'
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'We work closely with our clients as partners, ensuring solutions align with their unique business objectives.'
        }
    ]

    const milestones = [
        {
            year: '2024–Present',
            title: 'Focused on Indiana SMBs',
            description: 'Delivering automation and AI for small and mid-sized businesses across Indiana.'
        },
        {
            year: 'Ongoing',
            title: 'Practical Results',
            description: 'Measured outcomes: hours saved, fewer errors, faster response times.'
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-50 via-white to-accent-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
                            About <span className="gradient-text">Region Systems</span>
                        </h1>
                        <p className="text-xl text-navy-600 leading-relaxed mb-8">
                            We're a team of AI experts, automation specialists, and business strategists
                            dedicated to transforming how businesses operate through intelligent technology solutions.
                        </p>
                        <p className="text-navy-600">Indiana (ET) coverage: West Lafayette, NWI, Indianapolis, Fort Wayne, Bloomington.</p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-8">
                                Our Mission
                            </h2>
                            <p className="text-lg text-navy-600 leading-relaxed mb-6">
                                To bring fresh, fast, and affordable AI automation to growing businesses. As someone
                                who grew up with this technology, I understand it intuitively and can implement
                                solutions that actually work for your specific needs.
                            </p>
                            <p className="text-lg text-navy-600 leading-relaxed mb-8">
                                Too many businesses are stuck with slow, expensive, one-size-fits-all solutions.
                                I'm here to change that with custom automation that fits your business like a glove,
                                delivered by someone who has time to care about your success.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-accent-100 rounded-lg">
                                    <Target className="h-8 w-8 text-accent-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-navy-900 mb-2">Approach</h3>
                                    <p className="text-navy-600">Clear scope, quick iterations, and measurable outcomes. No hype — just systems that save time and reduce errors.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-accent-500 to-navy-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">What Sets Us Apart</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Zap className="h-6 w-6 text-accent-200 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Rapid Implementation</h4>
                                        <p className="text-accent-100 text-sm">
                                            Our proven methodologies ensure quick deployment and immediate ROI.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Globe className="h-6 w-6 text-accent-200 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Industry Expertise</h4>
                                        <p className="text-accent-100 text-sm">
                                            Deep knowledge across manufacturing, finance, healthcare, and more.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Award className="h-6 w-6 text-accent-200 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Proven Results</h4>
                                        <p className="text-accent-100 text-sm">
                                            Track record of delivering measurable business outcomes and ROI.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values */}
            <section className="section-padding bg-navy-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            These principles guide everything we do and shape how we work with our clients
                            and each other.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover text-center border border-navy-100">
                                <div className="p-4 bg-accent-100 rounded-full w-fit mx-auto mb-6">
                                    <value.icon className="h-8 w-8 text-accent-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-navy-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Timeline */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Our Journey
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            From a small startup to a leading AI consulting firm, here are the key
                            milestones that have shaped our company.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent-200 hidden md:block"></div>

                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="relative flex items-start space-x-8">
                                    {/* Timeline dot */}
                                    <div className="hidden md:flex items-center justify-center w-8 h-8 bg-accent-600 rounded-full text-white font-bold text-sm relative z-10">
                                        {index + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-navy-50 rounded-xl p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <h3 className="text-xl font-semibold text-navy-900">
                                                {milestone.title}
                                            </h3>
                                            <span className="text-accent-600 font-semibold text-lg">
                                                {milestone.year}
                                            </span>
                                        </div>
                                        <p className="text-navy-600 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding bg-navy-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Meet the Founder
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            Currently a solo operation with plans to expand the team in the coming months.
                            Building a network of specialists to deliver even better solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-navy-100">
                                {/* Profile Image Placeholder */}
                                <div className="h-64 bg-gradient-to-br from-accent-400 to-navy-600 flex items-center justify-center">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-2xl font-bold text-navy-800">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-navy-900 mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-accent-600 font-medium mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-navy-600 text-sm leading-relaxed mb-4">
                                        {member.bio}
                                    </p>

                                    {/* Expertise Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {member.expertise.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-2 py-1 bg-accent-100 text-accent-800 text-xs rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Contact Links */}
                                    <div className="flex space-x-3">
                                        <a
                                            href={member.linkedin}
                                            className="p-2 bg-navy-100 rounded-lg hover:bg-navy-200 transition-colors duration-300"
                                            aria-label={`${member.name} LinkedIn`}
                                        >
                                            <Linkedin className="h-4 w-4 text-navy-600" />
                                        </a>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="p-2 bg-navy-100 rounded-lg hover:bg-navy-200 transition-colors duration-300"
                                            aria-label={`Email ${member.name}`}
                                        >
                                            <Mail className="h-4 w-4 text-navy-600" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-gradient-to-br from-navy-800 to-navy-900 text-white">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Ready to Work Together?
                        </h2>
                        <p className="text-xl text-navy-100 mb-10 leading-relaxed">
                            Let's discuss how our expertise in AI and automation can help transform
                            your business operations and drive sustainable growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-accent-600 hover:bg-accent-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center space-x-2"
                            >
                                <span>Start a Conversation</span>
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                href="/services"
                                className="border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
                            >
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

