const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true",  
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendMail({subject, html, text }) {
  const info = await transporter.sendMail({
    from: '"BestinGems" <your@email.com>',
    to: process.env.SMTP_TO,
    subject,
    text,
    html,
  });

  // Optional: log full info for debugging
  console.log("📤 Mail sent");

  return info;  
}

module.exports = sendMail;
