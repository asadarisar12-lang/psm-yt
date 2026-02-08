
import { GoogleGenAI, Type } from "@google/genai";
import { Video } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function searchVideos(query: string): Promise<Video[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 6 diverse and realistic YouTube video results for the search query: "${query}". 
      Each video should have a catchy title, a realistic channel name, views (e.g., "1.2M views"), 
      posted date (e.g., "2 days ago"), and duration (e.g., "10:45").`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              channelName: { type: Type.STRING },
              views: { type: Type.STRING },
              postedAt: { type: Type.STRING },
              duration: { type: Type.STRING },
            },
            required: ["title", "channelName", "views", "postedAt", "duration"],
          },
        },
      },
    });

    const results = JSON.parse(response.text);
    return results.map((v: any, index: number) => ({
      ...v,
      id: `gemini-${index}-${Date.now()}`,
      thumbnail: `https://picsum.photos/seed/${encodeURIComponent(v.title)}/640/360`,
      channelAvatar: `https://picsum.photos/seed/${encodeURIComponent(v.channelName)}/48/48`,
    }));
  } catch (error) {
    console.error("Gemini search failed:", error);
    return [];
  }
}
