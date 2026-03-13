// roadmap.schema.js
export const roadmapSchema = {
    type: 'object',
    properties: {
        projectName: { type: 'string' },
        title: { type: 'string' },
        steps: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    step: { type: 'number' },
                    title: { type: 'string' },
                    goal: { type: 'string' },
                    filesToCreate: { type: 'array', items: { type: 'string' } },
                    successCriteria: { type: 'array', items: { type: 'string' } },
                    hints: { type: 'array', items: { type: 'string' } },
                    completed: { type: 'boolean' }
                },
                required: ['step', 'title', 'goal', 'filesToCreate', 'successCriteria', 'hints', 'completed']
            }
        }
    },
    required: ['projectName', 'title', 'steps']
}