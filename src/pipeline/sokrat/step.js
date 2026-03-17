import { getActiveProject } from '../../memory/projects.js';

const run = async () => {
    const currentProject = await getActiveProject();
    const currentStepIndex = currentProject.parsedMeta.steps.findIndex(step => !step.completed);
    if (currentStepIndex === -1) {
        console.log('All steps complete!');
        return;
    }
    const { step, title, goal, filesToCreate, hints } = currentProject.parsedMeta.steps[currentStepIndex];
    console.log(`Step ${step}: ${title}`);
    console.log(`Goal: ${goal}`);
    console.log(`Files to create: ${filesToCreate.join(', ')}`);
    console.log(`Hint: ${hints[0]}`);
}

export default run;