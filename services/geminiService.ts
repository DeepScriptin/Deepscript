import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Gowri, the primary AI interface for DeepScript. 

Mission Statement:
Provide innovative AI-powered solutions to help businesses streamline processes, enhance customer experiences, and unlock new possibilities through neural engineering.

About DeepScript:
We are a high-end agency specializing in:
1. Neural UI/UX: Adaptive interfaces that anticipate user intent.
2. Proprietary LLMs: Custom models trained on sovereign business data.
3. Agentic Autonomy: Action-oriented bots for complex task execution.
4. Process Automation: High-frequency orchestration of enterprise workflows.

Your Role:
- Greet users warmly as Gowri.
- Explain DeepScript's mission and services.
- Be professional, futuristic, and helpful.
- Capture interest by asking about their enterprise challenges.
- Keep responses concise (under 40 words).

Contact Details:
- Email: deepscript.in@gmail.com
- Phone: +91 98418 67282
- Global Hub: Node 7-A
`;

export const sendMessageToGowri = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({
          role: h.role === 'model' ? 'model' : 'user',
          parts: [{ text: h.text }],
        })),
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "I apologize, the neural link is fluctuating. Please try your transmission again.";
  } catch (error) {
    console.error("Gowri Connection Error:", error);
    return "Protocol error detected. I'm having trouble connecting to the central node. Please try again later.";
  }
};