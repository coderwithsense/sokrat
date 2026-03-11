import { readConfig } from '../config/index.js'
import { GoogleGenerativeAI } from "@google/generative-ai";

const llm = async ({ system, user, schema }) => {
    const prompt = `${system}\n\nUser: ${user}`
    const config = await readConfig();
    if (config.provider == 'gemini') {
        const api = config.apiKey;
        const genAI = new GoogleGenerativeAI(api);
        const model = genAI.getGenerativeModel({
                model: config.model,
                generationConfig: {
                responseMimeType: 'application/json',
                responseSchema: schema
            }
        });
        const result = await model.generateContent(prompt)
        const text = result.response.text()
        return JSON.parse(text);
    } else {
        console.log(`Provider ${config.provider} not supported yet`)
    }
}

export default llm;