const nodemailer = require('nodemailer');

// this does the sendEmail action for the function 
async function sendEmail() {
    let transporter = nodemailer.createTransport({
        //specific instuctions for sending the email 
        service: 'gmail', // or another email service
        auth: {
            user: process.env.EMAIL_USER, // this will be my user email or gmail
            pass: process.env.EMAIL_PASS, // your email password or app password
        },
    });

    //details for the email 
    let mailOptions = {
        from: process.env.EMAIL_USER,
        //this will be used to see the other persons email and be able to send to them
        to: 'USER2_email@example.com',
        //now we are including the informationg and reason 
        subject: 'Why we are contacting USER2',
        text: 'information .',
    };

    try {
        // attempting to send the email
        let info = await transporter.sendMail(mailOptions);
        // see if message was sent successfully 
        console.log('Email sent: ' + info.response);
        //storing variables
    } catch (error) {
        console.error('Error sending email: ' + error);
    }
}

sendEmail();
