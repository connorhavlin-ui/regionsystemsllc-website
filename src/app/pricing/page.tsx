import Link from 'next/link'

export default function Pricing() {
    const plans = [
        {
            name: 'Automation Audit — $249 flat',
            description: 'One-hour audit to map time sinks and failure points, with a prioritized action list.',
            features: [
                'Process review & goals',
                'Opportunity matrix + ROI estimates',
                '1-page action plan (next steps)',
            ],
        },
        {
            name: 'Starter Automation — from $749',
            description: 'One focused workflow automation or integration to quickly remove manual work.',
            features: [
                'Implementation & testing',
                'Documentation & handoff',
                'Lightweight monitoring',
            ],
        },
        {
            name: 'Growth Bundle — from $1,950',
            description: 'Multi-workflow system with integrations, error handling, and dashboards.',
            features: [
                'End-to-end delivery',
                'Monitoring & alerting',
                'SOPs & handoff',
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div key={plan.name} className="bg-white rounded-xl p-6 border border-navy-100 shadow-lg">
                            <h2 className="text-xl font-semibold text-navy-900 mb-2">{plan.name}</h2>
                            <p className="text-navy-600 mb-4">{plan.description}</p>
                            <ul className="space-y-2 mb-6">
                                {plan.features.map((f) => (
                                    <li key={f} className="text-sm text-navy-700">• {f}</li>
                                ))}
                            </ul>
                            <div className="flex flex-col space-y-2">
                                <Link href="/payments" className="btn-outline w-full inline-block text-center">Pay Now</Link>
                                <Link href="/contact" className="btn-primary w-full inline-block text-center">Schedule / Contact</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


