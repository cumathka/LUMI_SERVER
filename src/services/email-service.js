import nodemailer from 'nodemailer';

const emailTransporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
        user: "halilkom180@gmail.com",
        pass: "LUMIMAILSIFRESI"
    }
});

export async function send(pEmail, pTitle, pMessage){
console.log(pEmail,"bu maile gitmeil")
    const emailOptions = {
        from: 'lumi_hicoders@zohomail.eu',
        to: pEmail,
        subject: pTitle,
        html: pMessage,
        attachements: []
    };

    emailTransporter.sendMail(emailOptions, (err, info) => {
        if(err){
            console.error(err)
        }else
            console.log(info)
    })
}

emailTransporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

