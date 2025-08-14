import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
    try {
        const { amount } = await req.json()
        if (!process.env.STRIPE_SECRET_KEY) {
            return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
        }
        if (!amount || amount < 1) {
            return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: { name: 'Payment to Region Systems LLC' },
                        unit_amount: Math.round(Number(amount) * 100),
                    },
                    quantity: 1,
                },
            ],
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/payments?status=success`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/payments?status=cancel`,
        })

        return NextResponse.json({ url: session.url })
    } catch (e: any) {
        return NextResponse.json({ error: e.message || 'Unknown error' }, { status: 500 })
    }
}


