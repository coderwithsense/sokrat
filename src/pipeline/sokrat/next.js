import { getActiveProject, saveProject } from '../../memory/projects.js';

export const run = async () => {
    const activeProject = await getActiveProject();
    const stepIndex = activeProject.parsedMeta.steps.findIndex(s => !s.completed);
    if (stepIndex === -1) {
        console.log('All steps already complete!');
        return;
    }
    activeProject.parsedMeta.steps[stepIndex].completed = true;
    await saveProject(activeProject.parsedMeta.projectName, activeProject.parsedMeta);
    console.log(`Step ${stepIndex + 1} skipped, moving to step ${stepIndex + 2}`);
}

export default run;