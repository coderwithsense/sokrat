export const hintSchema = {
    type: 'object',
    properties: {
        text: { type: 'string' },
        level: { type: 'number' },
        concept: { type: 'string' },
        followUps: { type: 'array', items: { type: 'string' } },
        containsSolution: {type: 'boolean'}
    },
    required: ['text', 'level', 'concept', 'followUps', 'containsSolution']
}