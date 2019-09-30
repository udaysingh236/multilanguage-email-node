const nodemailer = require('nodemailer')
fs = require('fs')
ejs = require('ejs');

const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: '2525',
    secure: false,
    auth: {
        user: 'c0ffe32834d2c1',
        pass: '8da433eda164ef',
    }
});

ejs.renderFile(__dirname + "/views/welcome.ejs", { name: 'Uday Singh' }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let mainOptions = {
            from: '"Admin" adminteam@xyz.com',
            to: "udaysingh236@gmail.com",
            subject: 'Welcome to XYZ hotels',
            html: data
        };
        console.log("html data ======================>", mainOptions.html);
        transporter.sendMail(mainOptions, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Message sent: ' + info.response);
            }
        });
    }

});