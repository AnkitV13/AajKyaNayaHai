/**
 * Formats AI-generated summary into WhatsApp-friendly text
 * @param {string} aiSummary - AI output text
 * @param {string} topic - News topic
 * @returns {string}
 */
export function formatWhatsAppMessage(aiSummary, topic) {
  if (!aiSummary) {
    return "🗞️ *Aaj Kya Naya Hai?*\n\nNo updates available right now.";
  }

  return `
🗞️ *Aaj Kya Naya Hai?*
🧠 Topic: *${topic}*
🧑 Owner: ~ Ankit Vashishth

${aiSummary}

⏰ Auto-updated • Stay informed
`.trim();
}
