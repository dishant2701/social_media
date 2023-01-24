const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transpoter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c6da99d36464c3",
      pass: "74f110e3e2c7df",
    },
  });

  const mailOption = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transpoter.sendMail(mailOption);
};
