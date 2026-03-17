import { getActiveProject } from '../../memory/projects.js';

export const run = async () => {
    const activeProject = await getActiveProject();
    const { steps, title } = activeProject.parsedMeta;
    console.log(`Roadmap: ${title}\n`);
    steps.forEach(step => {
        const status = step.completed ? '✅' : '⬜';
        console.log(`${status} Step ${step.step}: ${step.title}`);
    });
}

export default run;