import Link from 'next/link'

export default function Pricing() {
    const plans = [
        {
            name: 'Automation Audit — Starts at $249',
            description: 'One-hour audit to map time sinks and failure points, with a prioritized action list.',
            features: [
                'Process review & goals',
                'Opportunity matrix + ROI estimates',
                '1-page action plan (next steps)',
                'Free website or website rebuild included',
            ],
        },
        {
            name: 'Starter Automation — Starts at $749',
            description: 'One focused workflow automation or integration to quickly remove manual work.',
            features: [
                'Implementation & testing',
                'Documentation & handoff',
                'Lightweight monitoring',
                'Free website or website rebuild included',
            ],
        },
        {
            name: 'Growth Bundle — Starts at $1,950',
            description: 'Multi-workflow system with integrations, error handling, and dashboards.',
            features: [
                'End-to-end delivery',
                'Monitoring & alerting',
                'SOPs & handoff',
                'Free website or website rebuild included',
            ],
        },
    ]

    return (
        <section className="pt-28 pb-16 has-soft-mesh">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Pricing</h1>
                    <p className="text-navy-600 max-w-2xl mx-auto">Productized anchors with clear deliverables. Contact for a tailored quote based on scope. Indiana SMBs only.</p>
                </div>

                {/* Free Website Offer Banner */}
                <div className="bg-gradient-to-r from-accent-50 to-navy-50 rounded-xl p-6 mb-12 border border-accent-200">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-navy-900 mb-3">
                            🎁 Special Offer: Free Website with Every Project
                        </h2>
                        <p className="text-navy-700 text-lg">
                            Every automation project includes a professional website or complete website rebuild at no additional cost.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <div key={plan.name} className="bg-white rounded-xl p-6 border border-navy-100 shadow-lg transform transition-all duration-700 opacity-0 translate-y-8 animate-on-scroll" data-animation-delay={index * 200}>
                            <h2 className="text-xl font-semibold text-navy-900 mb-2">{plan.name}</h2>
                            <p className="text-navy-600 mb-4">{plan.description}</p>
                            <ul className="space-y-2 mb-6">
                                {plan.features.map((f) => (
                                    <li key={f} className="text-sm text-navy-700">• {f}</li>
                                ))}
                            </ul>
                            <div className="flex flex-col space-y-2">
                                <Link href="/contact" className="btn-primary w-full inline-block text-center">Schedule Consultation</Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Information */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-xl p-8 border border-navy-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-navy-900 mb-4">What's Included in Every Project</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div>
                                <h4 className="text-lg font-semibold text-navy-800 mb-3">Automation Services</h4>
                                <ul className="space-y-2 text-navy-600">
                                    <li>• Custom workflow design</li>
                                    <li>• System integration</li>
                                    <li>• Testing & deployment</li>
                                    <li>• Documentation & training</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-navy-800 mb-3">Bonus: Free Website</h4>
                                <ul className="space-y-2 text-navy-600">
                                    <li>• Professional website design</li>
                                    <li>• Mobile-responsive layout</li>
                                    <li>• SEO optimization</li>
                                    <li>• Content management system</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">Ready to Get Started?</h3>
                    <p className="text-navy-600 mb-6">Contact us to discuss your specific needs and get a customized quote.</p>
                    <Link href="/contact" className="btn-primary">
                        Schedule a Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    )
}


