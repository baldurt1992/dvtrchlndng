const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', async (req, res) => {
  const { nombre, correo, mensaje, telefono } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: '587',
    secure:'false',
    auth: {
      user: process.env.MAIL,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from:  process.env.MAIL,
    to:  [`${process.env.MAIL}@gmail.com`],
    subject: `Nuevo cliente nombre en landing:${nombre}`,
    text: `Nuevo cliente nombre: ${nombre} correo: ${correo} telefono: ${telefono} mensaje: ${mensaje}`
  };

  const replyOption = {
    from: `${process.env.MAIL}@gmail.com`,
    to: [`${process.env.MAIL}@gmail.com`, `${correo}`],
    subject: `DevTorch: Hola ${nombre}`,
    text: `Hola ${nombre}, hemos recibido tu mensaje. Pronto te contactaremos.`
  }

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(replyOption);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
