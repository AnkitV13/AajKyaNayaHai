// src/index.js
import dotenv from "dotenv";
dotenv.config();

console.log("🤖 AI News WhatsApp Bot Started");


import { fetchNews } from "./news/fetchNews.js";

async function testNews() {
  const news = await fetchNews("AI startups");
  console.log(news);
}

testNews();