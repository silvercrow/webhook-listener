// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bccdeac70ebeef",
    pass: "cd566b38baf0b9"
  }
});


// Initialize express and define a port
const app = express()
const PORT = 8080

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());




app.post("/hook", (req, res) => {
  var data = JSON.parse(Object.keys(req.body)[0]);
  console.log('name:',data.name,'email:',data.email,'message:',data.message,'id:',data.id, 'subject:',data.subject);

  const html = 'Article id is:'+data.id;
  const mailOptions = {
    from: '"Autoweb" <aceTest@autoweb.com>',
    to: data.email,
    subject: data.subject,
    text: data.message,
    html: `<b>${data.subject}</b> ${data.message} <br/>   ${html}<br />`
  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

  res.status(200).end() // Responding is important
})




// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

