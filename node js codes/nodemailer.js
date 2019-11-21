var nodemailer = require('C:/Users/Arnab/node_modules/nodemailer')
var transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: "arnabbasak11@gmail.com",
        pass: '9975748178'
    }
});
var mailOptions  = {
    from: 'arnabbasak11@gmail.com',
    to:'arnabbasak11@yahoo.in',
    subject: 'sending test mail',
    text: 'this is a text'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);

    }else
    {
        console.log('email sent' +info.response);
    }
});