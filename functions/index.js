const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

admin.initializeApp();
exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite((change, context) => {
  const beforeData = change.before.val(); // data before the write
  const afterData = change.after.val(); // data after the write
 /*  const snapshot = event.data; */

// Only send email for new messages.
  if (beforeData || !afterData.name) {
     return;
  }
  const val = afterData;
  
  const mailOptions = {
    from: 'webgips@gmail.com',
    to: 'webgips@gmail.com',
    subject: `Сообщение от ${val.name}`,
    html: `<html>		
    		<head>		
                   <title> Сообщение от ${val.name}</title>		
                </head>		
                 <body>		
                    <p style="font-weight: bold"> Имя: ${val.name}</p>                              		
                     <br>		
                    <p style="font-weight: bold"> Email: ${val.email}</p>  		
                     <br>	
                    <p style="font-weight: bold"> Company: ${val.company}</p>  		
                     <br>	

                  <p style="font-weight: bold">Сообщение: ${val.description}</p> 		
              </body>		
             </html>`
  };
  return mailTransport.sendMail(mailOptions)
  .then((info) => console.log('Mail sent to: webgips@gmail.com', info.response))
  .catch((error) => console.log("Error sending email ---- ", error));
});