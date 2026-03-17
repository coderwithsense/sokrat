import { getActiveProject } from '../../memory/projects.js'
import validateStep from '../../agents/validator.js';
import { render } from 'ink';
import React from 'react';
import { ValidationUI } from '../../renderer/components/ValidationUI.js';

export const run = async () => {
    const currentProject = await getActiveProject();
    const currentStepIndex = currentProject.parsedMeta.steps.findIndex(step => !step.completed);
    if (currentStepIndex === -1) {
        console.log('All steps complete!');
        return;
    }
    const results = await validateStep(currentProject, currentStepIndex);
    render(React.createElement(ValidationUI, { result: results }));
}
