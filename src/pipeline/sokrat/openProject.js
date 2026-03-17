import { getActiveProject } from '../../memory/projects.js';
import { openInEditor } from '../../tools/editor.js';
import path from 'path';
import os from 'os';

export const run = async () => {
    const activeProject = await getActiveProject();
    const projectPath = path.join(os.homedir(), 'sokrat-projects', activeProject.parsedMeta.projectName);
    await openInEditor(projectPath);
}

export default run;