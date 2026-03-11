import { getSession, saveSession } from '../memory/session.js';
import classifyIntent from '../agents/intake.js';

export const startSession = async (query, options) => {
    const currSession = await getSession();
    const intent = await classifyIntent(query, currSession);
    // const hint = await generateHint() — coming soon
    await saveSession({
        ...currSession,
        hints: [
            ...currSession.hints,
            'placeholder'
        ]
    });
    console.log(intent);
    // console.log(hint);
}