const nodemailer = require('nodemailer');

async function sendEmail() {
    let transporter = nodemailer.createTransport({
        service: 'gmail', // or another email service
        auth: {
            user: process.env.EMAIL_USER, // your email
            pass: process.env.EMAIL_PASS, // your email password or app password
        },
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'recipient@example.com', // replace with the recipient's email
        subject: 'Your Email Subject Here',
        text: 'Your email body goes here.',
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ' + error);
    }
}

sendEmail();
