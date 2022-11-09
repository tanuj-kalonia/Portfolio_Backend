import { createTransport } from "nodemailer"

export const sendMail = async (text) => {
    const transporter = createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        auth: {
            user: process.env.SMPT_USER,
            pass: process.env.SMPT_PASS
        }
    });

    await transporter.sendMail({
        subject: "Contact request from portfolio3.0",
        to: process.env.MY_MAIL,
        from: process.env.MY_MAIL,
        text
    })
}