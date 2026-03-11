const intakeSchema = {
    type: 'object',
    properties: {
        type: { type: 'string', enum: ['concept_question', 'debug_help', 'code_request', 'architecture', 'error_explanation'] },
        domain: { type: 'string' },
        reframed: { type: 'boolean' },
        reframedQuery: { type: 'string' },
        confidence: { type: 'number' }
    },
    required: ['type', 'domain', 'reframed', 'confidence']
}

export default intakeSchema;