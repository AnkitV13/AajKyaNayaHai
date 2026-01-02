import dotenv from "dotenv";
dotenv.config();

import { fetchNews } from "./news/fetchNews.js";
import { summarizeNews } from "./ai/summarize.js";
import { formatWhatsAppMessage } from "./formatter/whatsappFormat.js";

async function testDay7() {
  const topic = "AI & Tech";
  const news = await fetchNews(topic);
  const summary = await summarizeNews(news);
  const message = formatWhatsAppMessage(summary, topic);

  console.log("\n📲 WhatsApp Message Preview:\n");
  console.log(message);
}

testDay7();
