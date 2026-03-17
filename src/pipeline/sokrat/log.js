import { getActiveProject } from '../../memory/projects.js';
import { gitLog } from '../../tools/git.js';
import path from 'path';
import os from 'os';

export const run = async () => {
    const activeProject = await getActiveProject();
    const projectPath = path.join(os.homedir(), 'sokrat-projects', activeProject.parsedMeta.projectName);
    const logs = await gitLog(projectPath);
    logs.forEach(commit => {
        console.log(`${commit.date} — ${commit.message}`);
    });
}

export default run;