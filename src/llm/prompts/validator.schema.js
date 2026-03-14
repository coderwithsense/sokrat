// validator.schema.js
export const validatorSchema = {
    type: 'object',
    properties: {
        passed: { type: 'boolean' },
        score: { type: 'number' },
        feedback: { type: 'string' },
        hintsIfFailed: { type: 'array', items: { type: 'string' } }
    },
    required: ['passed', 'score', 'feedback', 'hintsIfFailed']
}