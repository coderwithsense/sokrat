import { getActiveProject } from '../../memory/projects.js';
import { render } from 'ink';
import React from 'react';
import { StepUI } from '../../renderer/components/StepUI.js';

export const run = async () => {
    const currentProject = await getActiveProject();
    const currentStepIndex = currentProject.parsedMeta.steps.findIndex(step => !step.completed);
    if (currentStepIndex === -1) {
        console.log('All steps complete!');
        return;
    }
    const { step, title, goal, filesToCreate, hints } = currentProject.parsedMeta.steps[currentStepIndex];
    render(React.createElement(StepUI, { step: currentProject.parsedMeta.steps[currentStepIndex] }));
}
