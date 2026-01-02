import dotenv from "dotenv";
dotenv.config();

import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

/**
 * Sends a WhatsApp message using Twilio
 * @param {string} message
 */
export async function sendWhatsAppMessage(message) {
  try {
    const response = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: process.env.TWILIO_WHATSAPP_TO,
      body: message
    });

    console.log("📲 WhatsApp message sent:", response.sid);
  } catch (error) {
    console.error("❌ WhatsApp send error:", error.message);
  }
}
