import { getActiveProject } from '../../memory/projects.js'
import validateStep from '../../agents/validator.js';

const run = async () => {
    const currentProject = await getActiveProject();
    const currentStepIndex = currentProject.parsedMeta.steps.findIndex(step => !step.completed);
    if (currentStepIndex === -1) {
        console.log('All steps complete!');
        return;
    }
    const results = await validateStep(currentProject, currentStepIndex);
    console.log(results);
}

export default run;