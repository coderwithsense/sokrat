import { runOnboarding } from "../../agents/onboarding.js";
import generateRoadmap from "../../agents/roadmapGenerator.js";
import { createProject, saveProject } from "../../memory/projects.js";
import { gitInit } from "../../tools/git.js";
import { openInEditor } from '../../tools/editor.js';
import { readConfig, writeConfig } from "../../config/index.js";
import { input } from '@inquirer/prompts';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import os from 'os';

const initIfNeeded = async () => {
    const sokratDir = path.join(os.homedir(), '.sokrat');
    const configPath = path.join(sokratDir, 'config.json');

    if (!existsSync(configPath)) {
        console.log('Welcome to sokrat! Let\'s get you set up first.\n');
        const apiKey = await input({ message: 'Enter your Gemini API key:' });

        mkdirSync(sokratDir, { recursive: true });
        mkdirSync(path.join(sokratDir, 'projects'), { recursive: true });
        mkdirSync(path.join(os.homedir(), 'sokrat-projects'), { recursive: true });

        writeFileSync(configPath, JSON.stringify({
            apiKey,
            model: 'gemini-2.0-flash',
            provider: 'gemini',
            editor: 'code',
            activeProject: null
        }, null, 2));

        console.log('\n✅ Setup complete!\n');
    }
}

export const run = async () => {
    await initIfNeeded();
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