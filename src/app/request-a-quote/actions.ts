"use server";

import nodemailer from "nodemailer";
import { redirect } from "next/navigation";

export type QuoteFormState = {
  error?: string;
  values?: Record<string, string>;
};

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function sendQuoteRequestEmail(payload: Record<string, string>) {
  const host = requiredEnv("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");
  const to = requiredEnv("QUOTE_TO_EMAIL");
  const from = process.env.QUOTE_FROM_EMAIL ?? user;
  const secure = String(process.env.SMTP_SECURE ?? "false") === "true";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const subject = `New Custom Stair House Quote Request — ${payload.productNeeded} — ${payload.name}`;

  const text = [
    "New quote request received.",
    "",
    `Submitted at: ${new Date().toISOString()}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Buyer Type: ${payload.buyerType || "Not provided"}`,
    `Product Needed: ${payload.productNeeded}`,
    `Project Location: ${payload.location || "Not provided"}`,
    `Flooring Material Available: ${payload.hasMaterial || "Not provided"}`,
    "",
    "Project Details:",
    payload.projectDetails,
  ].join("\n");

  const html = `
    <h1>New Custom Stair House Quote Request</h1>
    <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone || "Not provided"}</p>
    <p><strong>Buyer Type:</strong> ${payload.buyerType || "Not provided"}</p>
    <p><strong>Product Needed:</strong> ${payload.productNeeded}</p>
    <p><strong>Project Location:</strong> ${payload.location || "Not provided"}</p>
    <p><strong>Flooring Material Available:</strong> ${payload.hasMaterial || "Not provided"}</p>
    <h2>Project Details</h2>
    <p>${payload.projectDetails.replace(/\n/g, "<br />")}</p>
  `;

  await transporter.sendMail({
    to,
    from,
    replyTo: payload.email,
    subject,
    text,
    html,
  });
}

export async function submitQuoteRequest(
  _prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const name = getString(formData, "name");
  const email = getString(formData, "email");
  const phone = getString(formData, "phone");
  const buyerType = getString(formData, "buyerType");
  const productNeeded = getString(formData, "productNeeded");
  const location = getString(formData, "location");
  const projectDetails = getString(formData, "projectDetails");
  const hasMaterial = getString(formData, "hasMaterial");

  const values = {
    name,
    email,
    phone,
    buyerType,
    productNeeded,
    location,
    projectDetails,
    hasMaterial,
  };

  if (!name || !email || !productNeeded || !projectDetails) {
    return {
      error: "Please fill in name, email, product needed, and project details.",
      values,
    };
  }

  try {
    await sendQuoteRequestEmail(values);
  } catch (error) {
    console.error("Failed to send quote request email", error);
    return {
      error:
        "Your request could not be sent right now. Please try again shortly or contact us directly.",
      values,
    };
  }

  redirect("/thank-you");
}
