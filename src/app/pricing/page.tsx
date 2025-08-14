import Link from 'next/link'

export default function Pricing() {
    const plans = [
        {
            name: 'Discovery Workshop',
            description: 'Structured session to map opportunities and ROI.',
            features: [
                'Process review & goals',
                'High-level architecture',
                'Prioritized roadmap',
                'Actionable next steps',
            ],
        },
        {
            name: 'Starter Project',
            description: 'One focused automation or integration to prove value fast.',
            features: [
                'Implementation & testing',
                'Documentation & handoff',
                'Change management support',
            ],
        },
        {
            name: 'Growth Project',
            description: 'Multi-workflow system with integrations and monitoring.',
            features: [
                'End-to-end delivery',
                'Monitoring & alerting',
                'SOPs & training',
            ],
        },
    ]

    return (
        <section className="pt-28 pb-16 has-soft-mesh">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">Pricing</h1>
                    <p className="text-navy-600 max-w-2xl mx-auto">Transparent, simple packages. Contact for a tailored quote based on scope and timelines.</p>
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
                            <Link href="/contact" className="btn-primary w-full inline-block text-center">Contact for quote</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


