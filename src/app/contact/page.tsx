import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Region Systems LLC - AI & Automation Services | United States',
    description: 'Get in touch with Region Systems LLC for AI consulting and automation services across the United States. Based in Indiana. Use the form below to schedule your free consultation.',
    keywords: 'Contact Region Systems, AI consulting United States, automation services US, free consultation, Indiana-based',
}

export default function Contact() {
    return (
        <section className="pt-32 pb-16 bg-white">
            <div className="container-custom max-w-4xl">
                <div className="w-full">
                    <iframe
                        data-tally-src="https://tally.so/embed/nPxov0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                        width="100%"
                        height="800"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        title="Contact Region Systems LLC – Schedule your Free Consultation"
                    />
                </div>
            </div>
            <script
                async
                src="https://tally.so/widgets/embed.js"
            />
        </section>
    )
}