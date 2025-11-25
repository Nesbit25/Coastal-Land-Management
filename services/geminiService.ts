import { GoogleGenAI, Type } from "@google/genai";
import { QuoteEstimate } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getQuoteEstimate = async (description: string, serviceType: string): Promise<QuoteEstimate> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are an expert landscaping estimator for "Coastal Land Management".
      We operate in South Eastern Georgia and North Florida, servicing the area from Savannah, GA down to Jacksonville, FL.
      Analyze the following customer request and provide a ROUGH estimate and professional advice.
      
      Service Type: ${serviceType}
      Customer Description: "${description}"
      
      Provide a realistic price range for the Coastal Georgia / North Florida market. 
      Consider local factors such as:
      - Sandy soil conditions
      - Common vegetation (Live Oaks, Palmettos, Pines, Spanish Moss)
      - Hurricane/Storm season considerations
      
      Be helpful but conservative with pricing.
      Also suggest specific sub-services they might need.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedPriceRange: {
              type: Type.STRING,
              description: "A string representing the price range, e.g., '$200 - $450'",
            },
            complexityLevel: {
              type: Type.STRING,
              enum: ["Low", "Medium", "High"],
              description: "The estimated complexity of the job",
            },
            professionalAdvice: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 helpful tips or considerations for this specific job",
            },
            recommendedServices: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of specific services recommended based on the description",
            },
          },
          required: ["estimatedPriceRange", "complexityLevel", "professionalAdvice", "recommendedServices"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as QuoteEstimate;
    }
    
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Error generating quote:", error);
    // Fallback in case of API error to avoid crashing the UI
    return {
      estimatedPriceRange: "Requires On-site Visit",
      complexityLevel: "Medium",
      professionalAdvice: ["Please contact us directly for a detailed quote due to the complexity of the request."],
      recommendedServices: ["On-site Consultation"],
    };
  }
};