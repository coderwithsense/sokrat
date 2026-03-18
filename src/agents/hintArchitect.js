import llm from '../llm/client.js'
import { hintPrompt } from '../llm/prompts/hint.prompt.js'
import { hintSchema } from '../llm/prompts/hint.schema.js'

export const generateHint = async ({ query, intent, level, stepContext }) => {
    const response = await llm({
        ...hintPrompt({ query, intent, level, stepContext }),
        schema: hintSchema
    })
    return response;
}