import { runOnboarding } from "../../agents/onboarding.js";
import generateRoadmap from "../../agents/roadmapGenerator.js";
import { createProject, saveProject } from "../../memory/projects.js";
import { gitInit } from "../../tools/git.js";
import fs from 'fs/promises';
import os from 'os';
import path from "path";
import { openInEditor } from '../../tools/editor.js';

export const run = async () => {
    try {
        const { topic, level, depth, timeAvailable } = await runOnboarding();
        const roadmap = await generateRoadmap({topic, level, depth, timeAvailable});
        const projectPath = await createProject(roadmap.projectName);
        await gitInit(projectPath);
        await saveProject(roadmap.projectName, roadmap);
        const config = JSON.parse(await fs.readFile(path.join(os.homedir(), '.sokrat', 'config.json')));
        config.activeProject = roadmap.projectName;
        await fs.writeFile(path.join(os.homedir(), '.sokrat', 'config.json'), JSON.stringify(config));
        await openInEditor(projectPath);
    } catch (e) {
        console.error(`Something went wrong: ${e.message}`);
        process.exit(1);
    }
}