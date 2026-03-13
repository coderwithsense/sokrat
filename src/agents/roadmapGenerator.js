import llm from "../llm/client.js"
import {roadmapPrompt} from "../llm/prompts/roadmap.prompt.js"
import { roadmapSchema } from "../llm/prompts/roadmap.schema.js"

const generateRoadmap = async (topic, level, depth, timeAvailable) => {
    const response = await llm({
        ...roadmapPrompt({topic, level, depth, timeAvailable}),
        schema: roadmapSchema
    })
    return response;
}

export default generateRoadmap;