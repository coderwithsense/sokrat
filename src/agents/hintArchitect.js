import llm from '../llm/client.js'
import { hintPrompt } from '../llm/prompts/hint.prompt.js'
import { hintSchema } from '../llm/prompts/hint.schema.js'

export const generateHint = async ({ query, intent, level }) => {
    const response = await llm({
        ...hintPrompt({ query, intent, level }),
        schema: hintSchema
    })
    return response;
}