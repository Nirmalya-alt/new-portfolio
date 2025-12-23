import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // Always initialize with the environment variable provided in the context
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    You are an AI assistant for ${PORTFOLIO_DATA.name}'s portfolio. 
    Answer professionally about their background, skills, and projects concisely.
    
    About ${PORTFOLIO_DATA.name}:
    - Role: ${PORTFOLIO_DATA.title}
    - About: ${PORTFOLIO_DATA.about}
    - Experience: ${PORTFOLIO_DATA.experience.map(e => e.role).join(', ')}
    - Notable Projects: ${PORTFOLIO_DATA.projects.map(p => p.title).join(', ')}
    
    Instructions:
    1. Speak in first person.
    2. Keep responses brief (under 50 words).
    3. Be encouraging and helpful.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble thinking right now. Please try again in a few seconds!";
  }
};