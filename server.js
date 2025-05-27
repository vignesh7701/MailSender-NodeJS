const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); 
const sendMail = require("./utils/mailer");
const getWelcomeEmailTemplate = require("./emails/welcome");
const getOrderConfirmationTemplate = require("./emails/ordermail");
const getBirthdayEmailTemplate = require("./emails/bday");
const getAnniversaryEmailTemplate = require("./emails/anniversary");
const getYearsEmailTemplate = require("./emails/years");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const templates = {
  welcome: getWelcomeEmailTemplate,
  order: getOrderConfirmationTemplate,
  bday: getBirthdayEmailTemplate,
  anniversary: getAnniversaryEmailTemplate,
  years: getYearsEmailTemplate,
};

app.post("/send-mail", async (req, res) => {
  const { type } = req.body;

  const templateFn = templates[type];
  if (!templateFn) {
    return res.status(400).json({ error: "Invalid email type" });
  }

  const { subject, html, text } = templateFn();

  try {
    const info = await sendMail({ subject, html, text });
    res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
