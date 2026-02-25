import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-9ae78875/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form endpoint
app.post("/make-server-9ae78875/contact", async (c) => {
  try {
    const { name, email, message } = await c.req.json();

    // Validate input
    if (!name || !email || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Invalid email address" }, 400);
    }

    // Store the contact submission in KV store for record keeping
    const timestamp = new Date().toISOString();
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    await kv.set(contactId, {
      name,
      email,
      message,
      timestamp,
      status: 'received'
    });

    // TODO: Integrate with an email service (Resend, SendGrid, etc.)
    // For now, we're just storing the submission
    // To send actual emails, you'll need to:
    // 1. Sign up for an email service (Resend is recommended)
    // 2. Add the API key as an environment variable
    // 3. Use the service's API to send the email

    console.log(`Contact form submission received from ${email}`);

    return c.json({ 
      success: true, 
      message: "Your message has been received. I'll get back to you soon!",
      id: contactId
    });

  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json({ error: "Failed to process your message. Please try again." }, 500);
  }
});

Deno.serve(app.fetch);