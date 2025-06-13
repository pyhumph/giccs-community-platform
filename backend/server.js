const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configure email transporter (FIXED: createTransport not createTransporter)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // humphrey.david.dev@gmail.com
    pass: process.env.EMAIL_PASS, // Your 16-character app password
  },
});

// Test the connection
transporter.verify(function (error, success) {
  if (error) {
    console.log("Email config error:", error);
  } else {
    console.log("Email server is ready to take our messages");
  }
});

// Test endpoint
app.get("/test", (req, res) => {
  res.json({ message: "Backend is working!", timestamp: new Date() });
});

// Application form endpoint
app.post("/api/application", async (req, res) => {
  try {
    const { applicationType, personalInfo, documents, additionalInfo } =
      req.body;

    console.log("Received application:", { applicationType, personalInfo });

    // Create email content for application
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "humphrey.david.dev@gmail.com",
      subject: `New Application Submission - ${applicationType || "General"}`,
      html: `
        <h2>New Application Submission</h2>
        <h3>Application Type: ${applicationType || "Not specified"}</h3>
        
        <h3>Personal Information:</h3>
        <p><strong>Full Name:</strong> ${personalInfo.fullName || "N/A"}</p>
        <p><strong>Email:</strong> ${personalInfo.email || "N/A"}</p>
        <p><strong>Phone:</strong> ${personalInfo.phone || "N/A"}</p>
        <p><strong>Date of Birth:</strong> ${personalInfo.dateOfBirth || "N/A"}</p>
        <p><strong>Address:</strong> ${personalInfo.address || "N/A"}</p>
        <p><strong>City:</strong> ${personalInfo.city || "N/A"}</p>
        <p><strong>State:</strong> ${personalInfo.state || "N/A"}</p>
        <p><strong>ZIP Code:</strong> ${personalInfo.zipCode || "N/A"}</p>
        <p><strong>Country:</strong> ${personalInfo.country || "N/A"}</p>
        
        <h3>Documents:</h3>
        <p><strong>Number of documents:</strong> ${documents ? documents.length : 0}</p>
        ${
          documents && documents.length > 0
            ? documents
                .map(
                  (doc, index) =>
                    `<p>Document ${index + 1}: ${doc.name || "Unnamed file"}</p>`,
                )
                .join("")
            : "<p>No documents attached</p>"
        }
        
        <h3>Additional Information:</h3>
        <p>${additionalInfo || "No additional information provided"}</p>
        
        <hr>
        <p><em>This application was submitted on ${new Date().toLocaleString()}.</em></p>
      `,
      replyTo: personalInfo.email || process.env.EMAIL_USER,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Application email sent successfully");

    res.status(200).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error sending application email:", error);
    res
      .status(500)
      .json({ error: "Failed to submit application", details: error.message });
  }
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required" });
    }

    console.log("Received contact form:", {
      name,
      email,
      phone: phone || "Not provided",
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "humphrey.david.dev@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>This email was sent from your contact form at ${new Date().toLocaleString()}.</em></p>
      `,
      // Optional: Send a copy to the person who submitted
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to humphrey.david.dev@gmail.com");

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email", details: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test endpoint: http://localhost:${PORT}/test`);
  console.log("Environment check:");
  console.log("- EMAIL_USER:", process.env.EMAIL_USER ? "Set" : "NOT SET");
  console.log("- EMAIL_PASS:", process.env.EMAIL_PASS ? "Set" : "NOT SET");
});
