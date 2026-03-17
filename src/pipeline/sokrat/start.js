import { runOnboarding } from "../../agents/onboarding.js";
import generateRoadmap from "../../agents/roadmapGenerator.js";
import { createProject, saveProject } from "../../memory/projects.js";
import { gitInit } from "../../tools/git.js";
import { openInEditor } from '../../tools/editor.js';
import { readConfig, writeConfig } from "../../config/index.js";

export const run = async () => {
    try {
        const { topic, level, depth, timeAvailable } = await runOnboarding();
        const roadmap = await generateRoadmap({topic, level, depth, timeAvailable});
        const projectPath = await createProject(roadmap.projectName);
        await gitInit(projectPath);
        await saveProject(roadmap.projectName, roadmap);
        const config = await readConfig();
        config.activeProject = roadmap.projectName;
        await writeConfig(config);
        await openInEditor(projectPath);
    } catch (e) {
        console.error(`Something went wrong: ${e.message}`);
        process.exit(1);
    }
}