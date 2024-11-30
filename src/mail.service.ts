import { Injectable } from "@nestjs/common"
import * as nodemailer from 'nodemailer'

@Injectable()
export class EmailService {
    public async send(
        targets: string,
        subject: string,
        plainText: string,
        htmlBody: string
    ) {
        try {

            // let transporter = nodemailer.createTransport({
              
            //     host: 'email-smtp.ap-southeast-1.amazonaws.com',
            //     // host: process.env.MAIL_HOST,
            //     port: Number(process.env.MAIL_PORT),
            //     // port: Number(process.env.MAIL_PORT),
            //     secure: true,
            //     auth: {
            //         user: 'AKIAR3HUOS6OXPVLQ55J',
            //         pass: 'BFIt/Z+GKlGswkyeyjnLggRqHDC94F2ZPGoTF5XQO9tV'
            //         // user: process.env.MAIL_SMTP_USERNAME,
            //         // pass: process.env.MAIL_SMTP_PASSWORD
            //     }
            // })

            const transporter = nodemailer.createTransport({
                service: 'gmail',  // Gmail SMTP service
                auth: {
                  user: 'longld.ba10-033@st.usth.edu.vn', // Thay bằng email của bạn
                  pass: 'qpab lqgt xmtn pxuj'     // Mật khẩu ứng dụng nếu bật 2FA hoặc mật khẩu tài khoản nếu không bật 2FA
                }
              });


            const response = await transporter.sendMail({
                // from: process.env.MAIL_SYSTEM_SENDER,
                from:'longld.ba10-033@st.usth.edu.vn',
                // sender: process.env.EMAIL_CODEMOS_SENDER,
                to: targets,
                subject: subject,
                text: plainText,
                html: htmlBody
            })

            console.log('[EmailService] sent:', response)
            return { result: response, error: null }
        } catch (error) {
            console.log('[EmailService] error: ', error)
            return { result: null, error: error }
        }
    }
}