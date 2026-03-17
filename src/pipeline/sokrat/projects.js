import { listProjects } from "../../memory/projects.js";

const run = async () => {
    const projects = await listProjects();
    for (const project of projects) {
        const { steps, projectName, title } = project.parsedMeta;
        const currentStep = steps.findIndex(step => !step.completed);
        const totalSteps = steps.length;
        console.log(`${projectName}: ${title} — step ${currentStep + 1}/${totalSteps}`);
    }
}

export default run;