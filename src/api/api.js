const nodemailer = require('nodemailer');
const hubspot = require('@hubspot/api-client')
const hubspotClient = new hubspot.Client({ accessToken: process.env.HUBSPOT_TOKEN })

const getClients = () => {
    hubspotClient.crm.contacts.basicApi
        .getPage(limit, after, properties, associations, archived)
        .then((results) => {
            console.log(results.body)
        })
        .catch((err) => {
            console.error(err)
        })
}

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'devtorch2023@gmail.com',
    pass: process.env.GMAIL_PASS
  }
});

// Email content

export const sendEmail = (mailOptions) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
}

// Send email

