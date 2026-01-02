import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

export async function summarizeNews(articles) {
  if (!articles || articles.length === 0) {
    return "No important news found.";
  }

  const titles = articles
    .slice(0, 8)
    .map((a, i) => `${i + 1}. ${a.title}`)
    .join("\n");

  const prompt = `
You are a professional news editor.
Pick the top 3–5 most important news items.
Summarize each in 1 short line.
Keep it factual and concise.

News:
${titles}
`;

  try {
    const response = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("❌ Groq AI error:", error.message);
    return "Unable to summarize news right now.";
  }
}
