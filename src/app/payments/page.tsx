"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function Payments() {
    const [amount, setAmount] = useState('')
    const [invoice, setInvoice] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handlePay = async () => {
        setIsLoading(true)
        setError('')
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: Number(amount) })
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.error || 'Payment error')
            window.location.href = data.url
        } catch (e: any) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="pt-28 pb-16 bg-navy-50 min-h-screen has-soft-mesh">
            <div className="container-custom max-w-3xl">
                <h1 className="text-4xl font-bold text-navy-900 mb-4">Payments</h1>
                <p className="text-navy-600 mb-8">Pay invoices or make a deposit securely via Stripe Checkout.</p>

                <div className="bg-white rounded-xl shadow-lg border border-navy-100 p-6">
                    <h2 className="text-xl font-semibold text-navy-900 mb-4">Preset Options</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6">
                        {[
                            { label: '$249 Automation Audit', amt: 249 },
                            { label: '$500 Deposit', amt: 500 },
                            { label: '$1000 Deposit', amt: 1000 },
                            { label: '$3000 Deposit', amt: 3000 },
                        ].map(item => (
                            <button key={item.label} onClick={() => setAmount(String(item.amt))} className="btn-outline text-sm">{item.label}</button>
                        ))}
                    </div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Amount (USD)</label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        placeholder="Enter amount"
                        className="input-field max-w-xs"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    {error && <p className="text-danger-600 text-sm mt-3">{error}</p>}

                    <div className="mt-6 flex items-center space-x-4">
                        <button disabled={!amount || isLoading} onClick={handlePay} className="btn-primary">
                            {isLoading ? 'Processing...' : 'Pay with Stripe'}
                        </button>
                        <Link href="/contact" className="btn-outline">Need help?</Link>
                    </div>

                    <p className="text-xs text-navy-500 mt-4">You will be redirected to a secure Stripe Checkout page.</p>
                </div>

                {/* Invoice Payments */}
                <div className="bg-white rounded-xl shadow-lg border border-navy-100 p-6 mt-6">
                    <h2 className="text-xl font-semibold text-navy-900 mb-4">Invoice Payment</h2>
                    <p className="text-navy-600 mb-4">Have an invoice? Enter your invoice number and pay via the link provided in your invoice email. For ACH or questions, contact <a href="mailto:hello@regionsystemsllc.com" className="text-accent-600">hello@regionsystemsllc.com</a>.</p>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Invoice Number</label>
                    <input
                        type="text"
                        placeholder="e.g., RS-2025-0012"
                        className="input-field max-w-sm"
                        value={invoice}
                        onChange={(e) => setInvoice(e.target.value)}
                    />
                    <p className="text-xs text-navy-500 mt-3">We’ll map Stripe payments to your engagement using the invoice number. If you don’t have one yet, just schedule a call.</p>
                </div>
            </div>
        </section>
    )
}


