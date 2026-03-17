import { listProjects } from "../../memory/projects.js";
import { render } from 'ink';
import React from 'react';
import { ProjectsUI } from '../../renderer/components/ProjectsUI.js';

const run = async () => {
    const projects = await listProjects();
    render(React.createElement(ProjectsUI, { projects }));
}

export default run;