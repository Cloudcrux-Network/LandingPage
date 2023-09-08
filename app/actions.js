"use server";
import nodemailer from "nodemailer";

export async function submitContactForm(formData) {
  const { name, email, phone, message } = formData;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Set up email data with unicode symbols
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_SENDTO,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };
  console.log(
    process.env.SMTP_HOST,
    process.env.SMTP_PORT,
    process.env.SMTP_SECURE
  );

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return { message: "Success!" };
  } catch (error) {
    console.error(error);
    return { message: "There was an error please try again later. Sorry!" };
  }
}
