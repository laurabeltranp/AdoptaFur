import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

export async function POST(request) {

    const formData = await request.formData()
    const name = formData.get('nombre')
    const email = formData.get('email')
    const message = formData.get('mensaje')

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
    });

    try {

        await transporter.sendMail({
            from: email,
            to: process.env.MAIL_TO,
            subject: `Alguien ha contactado con nosotros: ${email}`,
            html: `
            <p>Nombre: ${name} </p>
            <p>Email: ${email} </p>
            <p>Mensaje: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error: email was not sent" }, { status: 500 })
    }
}
