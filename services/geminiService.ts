import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Ada, the AI assistant for DeepScript, a high-end agency providing innovative AI-powered solutions.
Your goal is to assist visitors, explain our services, and capture leads.

Services provided by DeepScript:
1. AI-driven Design and Development
2. Custom AI Solutions
3. Intelligent Chatbots
4. Process Automation

Script & Guidelines:
- Greeting (Already sent): "Hi, I'm Ada. How can I help you?"
- If the user is vague, ask: "What brings you to DeepScript?" or "What services are you interested in?"
- If the user selects a service, say: "Awesome! We can help with that. Can you tell me more about your project?"
- Provide answers to common questions about AI, our process, or benefits.
- If asked about pricing, suggest they contact us for a custom quote.
- Be professional, futuristic, yet friendly.
- Keep responses concise (under 50 words).

Contact Information:
- Email: deepscript.in@gmail.com
- Phone: +91 98418 67282
- Location: Innovation Hub, Global HQ
`;

export const sendMessageToAda = async (history: { role: string; text: string }[], newMessage: string): Promise<string> => {
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
      },
    });

    return response.text || "I apologize, I'm having trouble connecting to my neural network right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I seem to be experiencing a temporary glitch. Please try again later.";
  }
};