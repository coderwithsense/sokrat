import { getActiveProject } from '../../memory/projects.js';
import { gitLog } from '../../tools/git.js';
import path from 'path';
import os from 'os';
import { render } from 'ink';
import React from 'react';
import { LogUI } from '../../renderer/components/LogUI.js';

export const run = async () => {
    const activeProject = await getActiveProject();
    const projectPath = path.join(os.homedir(), 'sokrat-projects', activeProject.parsedMeta.projectName);
    const logs = await gitLog(projectPath);
    render(React.createElement(LogUI, { logs }));
}

export default run;