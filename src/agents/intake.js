import llm from '../llm/client.js'
import intakePrompt from '../llm/prompts/intake.prompt.js'
import intakeSchema from '../llm/prompts/intake.schema.js'

const classifyIntent = async (query, session) => {
    const response = await llm({
        ...intakePrompt(query, session),
        schema: intakeSchema
    });
    return response;
}

export default classifyIntent;