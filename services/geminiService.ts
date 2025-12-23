import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

export const sendMessageToGemini = async (message: string): Promise<string> => {
  // Create instance right before call to ensure up-to-date API key in deployment
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    You are an AI assistant for the personal portfolio website of ${PORTFOLIO_DATA.name}.
    Answer questions about ${PORTFOLIO_DATA.name}'s background, skills, and projects concisely.
    Context:
    - Role: ${PORTFOLIO_DATA.title}
    - About: ${PORTFOLIO_DATA.about}
    - Experience: ${PORTFOLIO_DATA.experience.map(e => e.role).join(', ')}
    - Projects: ${PORTFOLIO_DATA.projects.map(p => p.title).join(', ')}
    
    Rules:
    1. Answer in first person.
    2. Max 50 words.
    3. Be friendly and professional.
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

    // Access .text as a property per latest guidelines
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting right now. Please try again in a moment!";
  }
};