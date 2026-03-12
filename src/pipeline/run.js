import { getSession, saveSession } from '../memory/session.js';
import classifyIntent from '../agents/intake.js';
import { generateHint } from '../agents/hintArchitect.js';
import { render } from 'ink';
import { HintUI } from '../renderer/components/HintUI.js';
import React from 'react';
import updateProfile from '../agents/learnerProfile.js';

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
    updateProfile(intent, hint).catch(() => { })
    render(React.createElement(HintUI, { hint, intent }))
}