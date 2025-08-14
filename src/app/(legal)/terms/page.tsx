export default function Terms() {
    return (
        <section className="pt-28 pb-16 has-soft-mesh">
            <div className="container-custom max-w-3xl">
                <h1 className="text-3xl font-bold text-navy-900 mb-4">Terms of Service</h1>
                <p className="text-sm text-navy-500 mb-6">Last updated: {new Date().toISOString().split('T')[0]}</p>
                <div className="space-y-4 text-navy-700">
                    <p>These terms govern your use of the Region Systems LLC website and services. By engaging us, you agree to these terms.</p>
                    <p>Scope is defined in each proposal or statement of work. Deliverables are provided on a best‑effort basis using commercially reasonable skill and care.</p>
                    <p>All intellectual property created specifically for you becomes yours upon full payment unless otherwise agreed. Our pre‑existing tools, templates, or libraries remain ours.</p>
                    <p>LIMITATION OF LIABILITY: To the fullest extent permitted by law, our total liability is limited to the fees paid for the service giving rise to the claim.</p>
                    <p>Payment and cancellation policies will be stated on proposals or invoices. Taxes, if any, are your responsibility. Audit (\$249) is refundable if cancelled 24 hours before the session time (ET).</p>
                </div>
            </div>
        </section>
    )
}


