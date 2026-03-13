import os from 'os';
import fs from 'fs/promises';
import path from 'path';
import { readConfig } from '../config/index.js'

const createProject = async (name) => {
    try {
        const projectPath = `${os.homedir()}/.sokrat/projects/${name}`;
        await fs.mkdir(`${os.homedir()}/.sokrat/projects/${name}`, {recursive: true});
        await fs.writeFile(path.join(projectPath, 'progress.json'), JSON.stringify({}));
        await fs.writeFile(path.join(projectPath, 'meta.json'), JSON.stringify({}));
    } catch (e) {
        throw new Error(`Failed to create project ${name}: ${e.message}.`)
    }
}

const getProject = async (name) => {
    try {
        const projectPath = `${os.homedir()}/.sokrat/projects/${name}`;
        const meta = await fs.readFile(path.join(projectPath, 'meta.json'));
        const progress = await fs.readFile(path.join(projectPath, 'progress.json'));
        const parsedMeta = JSON.parse(meta);
        const parsedProgress = JSON.parse(progress);
        return { parsedMeta, parsedProgress };
    } catch (e) {
        throw new Error(`Project '${name}' not found`);
    }
}

const listProjects = async () => {
    try {
        const projectPath = `${os.homedir()}/.sokrat/projects`;
        const projects = await fs.readdir(projectPath);
        const projectsArray = [];
        for (const p of projects) {
            const project = await getProject(p);
            projectsArray.push(project);
        }
        return projectsArray;
    } catch (e) {
        return [];
    }
}

const saveProject = async (name, meta) => {
    const projectPath = `${os.homedir()}/.sokrat/projects/${name}`;
    await fs.writeFile(path.join(projectPath, 'meta.json'), JSON.stringify(meta));
}

const saveProgress = async (name, progress) => {
    const projectPath = `${os.homedir()}/.sokrat/projects/${name}`;
    await fs.writeFile(path.join(projectPath, 'progress.json'), JSON.stringify(progress))
}

const getActiveProject = async () => {
    const config = await readConfig();
    const activeProject = config.activeProject;
    return await getProject(activeProject);
}

export { createProject, getActiveProject, getProject, listProjects, saveProgress, saveProject };