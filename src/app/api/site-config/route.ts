import { NextResponse } from 'next/server'

// Pull config from CRM API in production; for local demo, read from env
export async function GET() {
    try {
        const crmUrl = process.env.CRM_BASE_URL
        if (crmUrl) {
            const res = await fetch(`${crmUrl}/api/site-config`, { cache: 'no-store' })
            if (res.ok) return NextResponse.json(await res.json())
        }
    } catch { }

    return NextResponse.json({
        companyName: 'Region Systems LLC',
        logoUrl: '/logo.png',
        primaryColor: '#0f172a',
        accentColor: '#2563eb',
        contactEmail: 'regionsys.auto@gmail.com'
    })
}


