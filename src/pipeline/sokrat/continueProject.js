import { listProjects, setActiveProject } from "../../memory/projects.js"
import { select } from '@inquirer/prompts';
import { run as showStep } from './step.js';

export const run = async (name) => {
    if (name) {
        await setActiveProject(name);
    }
    else {
        const projects = await listProjects();
        const choices = projects.map(p => ({
            name: p.parsedMeta.projectName,
            value: p.parsedMeta.projectName
        }));
        const selected = await select({ message: 'Pick a project', choices });
        await setActiveProject(selected);
    }
    await showStep();
}
