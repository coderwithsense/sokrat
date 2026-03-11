import { readConfig } from '../config/index.js'
import { GoogleGenerativeAI } from "@google/generative-ai";

const llm = async ({ system, user }) => {
    const prompt = `${system}\n\nUser: ${user}`
    const config = await readConfig();
    if (config.provider == 'gemini') {
        const api = config.apiKey;
        const genAI = new GoogleGenerativeAI(api);
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash'
        });
        const result = await model.generateContent(prompt)
        const text = result.response.text()
        const clean = text.replace(/```json|```/g, '').trim()
        return JSON.parse(clean)
    } else {
        console.log(`Provider ${config.provider} not supported yet`)
    }
}

export default llm;