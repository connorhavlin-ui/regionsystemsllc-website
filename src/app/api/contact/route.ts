import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, service, message, budget, timeline } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter (you'll need to configure with your email service)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your email password or app password
      },
    })

    // Email content for the business
    const businessEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0;">Region Systems LLC</p>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1e293b; margin-bottom: 20px;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${email}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${company}</td>
            </tr>
            ` : ''}
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${phone}</td>
            </tr>
            ` : ''}
            ${service ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Service Interest:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${service}</td>
            </tr>
            ` : ''}
            ${budget ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Budget Range:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${budget}</td>
            </tr>
            ` : ''}
            ${timeline ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Timeline:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${timeline}</td>
            </tr>
            ` : ''}
          </table>
          
          <h3 style="color: #1e293b; margin: 30px 0 15px 0;">Message:</h3>
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="color: #374151; line-height: 1.6; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 8px;">
            <p style="color: #1e40af; margin: 0; text-align: center;">
              <strong>Response Required:</strong> Please respond to this inquiry within 24 hours.
            </p>
          </div>
        </div>
        
        <div style="background: #1e293b; padding: 20px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            This email was sent from the Region Systems LLC contact form.
          </p>
        </div>
      </div>
    `

    // Auto-reply email content for the customer
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You for Contacting Us!</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0;">Region Systems LLC</p>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">Dear ${name},</p>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Thank you for reaching out to Region Systems LLC. We've received your message and our team will review your inquiry carefully.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">What happens next?</h3>
            <ul style="color: #374151; line-height: 1.6; padding-left: 20px;">
              <li>Our team will review your requirements within 24 hours</li>
              <li>We'll prepare a customized response based on your specific needs</li>
              <li>You'll receive a detailed follow-up with next steps and recommendations</li>
              <li>If needed, we'll schedule a consultation call to discuss your project</li>
            </ul>
          </div>
          
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Your Message Summary:</h3>
            <p style="color: #1e40af; margin: 0;"><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
            <p style="color: #1e40af; margin: 5px 0 0 0;"><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          </div>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to explore our <a href="https://regionsystemsllc.com/services" style="color: #3b82f6;">services</a> 
            or learn more <a href="https://regionsystemsllc.com/about" style="color: #3b82f6;">about our team</a>.
          </p>
          
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Best regards,<br>
            <strong>The Region Systems LLC Team</strong>
          </p>
        </div>
        
        <div style="background: #1e293b; padding: 20px;">
          <div style="text-align: center; margin-bottom: 15px;">
            <p style="color: white; margin: 0; font-weight: bold;">Region Systems LLC</p>
            <p style="color: #94a3b8; margin: 5px 0 0 0; font-size: 14px;">AI Consulting & Automation Integration</p>
          </div>
          
          <div style="border-top: 1px solid #475569; padding-top: 15px;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px; text-align: center;">
              📧 hello@regionsystemsllc.com | 📞 (219) 510-3566<br>
              🌐 regionsystemsllc.com
            </p>
          </div>
        </div>
      </div>
    `

    // Send email to business
    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Region Systems LLC" <hello@regionsystemsllc.com>',
      to: process.env.CONTACT_EMAIL || 'hello@regionsystemsllc.com',
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: businessEmailContent,
    })

    // Send auto-reply to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM || '"Region Systems LLC" <noreply@regionsystemsllc.com>',
      to: email,
      subject: 'Thank you for contacting Region Systems LLC',
      html: customerEmailContent,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
