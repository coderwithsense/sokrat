import { getSession, saveSession } from '../memory/session.js';
import classifyIntent from '../agents/intake.js';
import { generateHint } from '../agents/hintArchitect.js';

export const startSession = async (query, options) => {
    const currSession = await getSession();
    const intent = await classifyIntent(query, currSession);
    const hint = await generateHint({ query, intent, level: options.level })
    await saveSession({
        ...currSession,
        hints: [
            ...currSession.hints,
            hint.text
        ]
    });
    console.log(intent);
    console.log(hint);
}