import axios from "axios";

export async function fetchNews(topic) {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/everything",
      {
        params: {
          q: topic,
          sortBy: "publishedAt",
          language: "en",
          pageSize: 10
        },
        headers: {
          Authorization: process.env.NEWS_API_KEY
        }
      }
    );

    // Map only useful fields
    return response.data.articles.map(article => ({
      title: article.title,
      description: article.description,
      url: article.url,
      source: article.source.name,
      publishedAt: article.publishedAt
    }));

  } catch (error) {
    console.error("❌ Error fetching news:", error.message);
    return [];
  }
}
