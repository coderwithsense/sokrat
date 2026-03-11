const intakePrompt = (query, session) => {
    const system = `You are an intent classifier for a Socratic coding mentor CLI.
Your job is to classify the user's query into one of these types:
- concept_question: user wants to understand how something works
- debug_help: user has broken code or an error
- code_request: user is asking you to write code for them
- architecture: user wants to know how to structure something
- error_explanation: user pasted a raw error message

If the type is code_request, set reframed to true and rewrite the query as a Socratic question in reframedQuery that guides without giving the answer.
Set confidence between 0 and 1 based on how sure you are.
Identify the technical domain, e.g. react-hooks, async-js, sql, etc.`

    const user = `Query: "${query}"
Hints given so far this session: ${session.hints.length}`

    return { system, user }
}

export default intakePrompt;