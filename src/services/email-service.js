import nodemailer from 'nodemailer';


const gmailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // not forget to adjust less secure app property 
        // visit the page https://www.google.com/settings/security/lesssecureapps
        user: 'hicoders.smtp@gmail.com', 
        pass:''
    }
});


export async function send(pEmail, pTitle, pMessage){
console.log(pEmail,"bu maile gitmeil")
    const emailOptions = {
        from: 'hicoders.smtp@gmail.com',
        to: pEmail,
        subject: pTitle,
        html: pMessage,
        attachements: []
    };

    gmailTransporter.sendMail(emailOptions, (err, info) => {
        if(err){
            console.error(err)
        }else
            console.log(info)
    })
}

