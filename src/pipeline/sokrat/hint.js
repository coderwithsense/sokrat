import { getSession, saveSession } from '../../memory/session.js';
import classifyIntent from '../../agents/intake.js';
import { generateHint } from '../../agents/hintArchitect.js';
import { getActiveProject } from '../../memory/projects.js';
import updateProfile from '../../agents/learnerProfile.js';
import { render } from 'ink';
import React from 'react';
import { HintUI } from '../../renderer/components/HintUI.js';

export const run = async (question) => {
    // get session
    const session = await getSession();
    // classify intent
    const intent = await classifyIntent(question, session);
    // try to get active project
    let stepContext = null;
    try {
        const activeProject = await getActiveProject();
        const stepIndex = activeProject.parsedMeta.steps.findIndex(s => !s.completed);
        if (stepIndex !== -1) {
            stepContext = activeProject.parsedMeta.steps[stepIndex];
        }
    } catch (e) { };
    // generate hint with step context if available
    const hint = await generateHint({
        query: question,
        intent: intent,
        level: 1,
        stepContext
    });
    // save session, update profile, render result
    await saveSession({ ...session, hints: [...session.hints, hint.text] });
    updateProfile(intent, hint).catch(() => {});
    render(React.createElement(HintUI, { hint, intent }));
}