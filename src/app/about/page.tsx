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
    Mail,
    Gift
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Region Systems LLC - AI & Automation Services | Indiana',
    description: 'Learn about Region Systems LLC, Indiana-based AI and automation experts. We help businesses save time and reduce errors with practical solutions. Every project includes a free website.',
    keywords: 'About Region Systems, AI consulting Indiana, automation services Indiana, Indiana automation experts, free website with automation',
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
                        <p className="text-navy-600 mb-8">Indiana (ET) coverage: West Lafayette, NWI, Indianapolis, Fort Wayne, Bloomington.</p>

                        {/* Free Website Offer */}
                        <div className="bg-gradient-to-r from-accent-50 to-navy-50 rounded-xl p-6 inline-block border border-accent-200">
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

            {/* Mission & Vision */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll">
                            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-8">
                                Our Mission
                            </h2>
                            <p className="text-lg text-navy-600 leading-relaxed mb-6">
                                To bring fresh, fast, and affordable AI automation to growing businesses. As someone
                                who has worked in both large corporations and small businesses, I understand the unique
                                challenges that SMBs face and the opportunities that automation can unlock.
                            </p>
                            <p className="text-lg text-navy-600 leading-relaxed mb-6">
                                We focus on practical, implementable solutions that deliver immediate value
                                while building a foundation for long-term growth and efficiency.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="btn-primary">
                                    Get Started
                                </Link>
                                <Link href="/services" className="btn-outline">
                                    Our Services
                                </Link>
                            </div>
                        </div>

                        <div className="transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll" data-animation-delay="200">
                            <div className="bg-gradient-to-br from-navy-50 to-accent-50 rounded-2xl p-8 border border-navy-100">
                                <h3 className="text-2xl font-bold text-navy-900 mb-6">Why Choose Us?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-navy-800">Local Expertise</h4>
                                            <p className="text-sm text-navy-600">Indiana-based with deep understanding of local business needs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-navy-800">Practical Approach</h4>
                                            <p className="text-sm text-navy-600">Focus on solutions that work in the real world</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-navy-800">Free Website</h4>
                                            <p className="text-sm text-navy-600">Every project includes a professional website or rebuild</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-navy-50 has-soft-mesh">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Our Values
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            The principles that guide everything we do and every solution we deliver.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={value.title} className="text-center transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll" data-animation-delay={index * 200}>
                                <div className="p-4 bg-white rounded-full w-fit mx-auto mb-4 shadow-lg">
                                    <value.icon className="h-8 w-8 text-accent-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-navy-900 mb-2">{value.title}</h3>
                                <p className="text-navy-600 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Our Team
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            Meet the experts behind our AI and automation solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={member.name} className="bg-white rounded-xl p-8 shadow-lg card-hover border border-navy-100 transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll" data-animation-delay={index * 200}>
                                <div className="text-center mb-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-accent-100 to-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="h-12 w-12 text-accent-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-navy-900">{member.name}</h3>
                                    <p className="text-accent-600 font-medium">{member.role}</p>
                                </div>

                                <p className="text-navy-600 mb-6 leading-relaxed">{member.bio}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-navy-800 mb-3">Expertise</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.map((skill) => (
                                            <span key={skill} className="px-3 py-1 bg-navy-100 text-navy-700 text-sm rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex space-x-3">
                                    <a href={member.linkedin} className="flex-1 bg-navy-800 hover:bg-navy-900 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200">
                                        <Linkedin className="h-4 w-4 inline mr-2" />
                                        LinkedIn
                                    </a>
                                    <a href={`mailto:${member.email}`} className="flex-1 bg-accent-600 hover:bg-accent-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200">
                                        <Mail className="h-4 w-4 inline mr-2" />
                                        Email
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="section-padding bg-navy-50 has-soft-mesh">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
                            Our Journey
                        </h2>
                        <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                            Key milestones in our mission to bring AI and automation to Indiana businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {milestones.map((milestone, index) => (
                            <div key={milestone.year} className="bg-white rounded-xl p-8 shadow-lg border border-navy-100 transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll" data-animation-delay={index * 200}>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-accent-100 rounded-lg">
                                        <TrendingUp className="h-8 w-8 text-accent-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-accent-600 mb-2">{milestone.year}</div>
                                        <h3 className="text-xl font-semibold text-navy-900 mb-3">{milestone.title}</h3>
                                        <p className="text-navy-600 leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-navy-800 to-navy-900 text-white">
                <div className="container-custom text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        Ready to Work Together?
                    </h2>
                    <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our AI and automation expertise can transform your business operations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary bg-white text-navy-800 hover:bg-navy-50">
                            Schedule a Consultation
                        </Link>
                        <Link href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-navy-800">
                            View Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

