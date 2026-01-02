import dotenv from "dotenv";
dotenv.config();

import { fetchNews } from "./news/fetchNews.js";
import { summarizeNews } from "./ai/summarize.js";
import { formatWhatsAppMessage } from "./formatter/whatsappFormat.js";
import { sendWhatsAppMessage } from "./whatsapp/sendMessage.js";

async function runDay8() {
  const topic = "Economy";

  const news = await fetchNews(topic);
  const summary = await summarizeNews(news);
  const message = formatWhatsAppMessage(summary, topic);

  console.log("\n📤 Sending WhatsApp message...\n");
  await sendWhatsAppMessage(message);
}

runDay8();
