"use server";
import nodemailer from "nodemailer";

export async function submitContactForm(formData) {
  const { name, email, phone, message } = formData;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  // Set up email data with unicode symbols
  const mailOptions = {
    from: `"Contact" <${process.env.SMTP_USER}>`, // sender address
    to: process.env.SMTP_SENDTO, // list of receivers
    subject: "New Contact Form Submission", // Subject line
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`, // plain text body
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    revalidatePath("/");
    return { message: "Success!" };
  } catch (error) {
    console.error(error);
    return { message: "There was an error please try again later. Sorry!" };
  }
}
