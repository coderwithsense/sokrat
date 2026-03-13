import fs from 'fs/promises';
import os from 'os';
import path from 'path';

const PROJECTS_FOLDER = path.join(os.homedir(), 'sokrat-projects')

const createFile = async(filePath, name) => {
    await fs.writeFile(path.join(PROJECTS_FOLDER, filePath, name));
}

const createFolder = async(folderPath, name) => {
    await fs.mkdir(path.join(PROJECTS_FOLDER, folderPath, name));
}

const readFile = async (project, filePath) => {
    try {
        const file = await fs.readFile(path.join(PROJECTS_FOLDER, project, filePath));
        return file;
    } catch (e) {
        return `File ${filePath} at project ${project} doesn't exist.`
    }
}

const listFiles = async (folderPath) => {
    try {
        const files = await fs.readdir(folderPath);
        return files;
    } catch (e) {
        return `Folder ${folderPath} doesn't exist.`
    }
}

const checkFileExists = async (filePath) => {
    try {
        const file = await fs.readFile(filePath);
        if (file) {
            return true;
        }
    } catch (e) {
        return false;
    }
}

const scaffoldProject = async (basePath, structure) => {
    for (const [name, value] of Object.entries(structure)) {
        const fullPath = path.join(basePath, name);

        if (value === null) {
            await fs.writeFile(fullPath, "");
        } else {
            await fs.mkdir(fullPath, { recursive: true });
            await scaffoldProject(fullPath, value);
        }
    }
};

export { createFile, readFile, createFolder, listFiles, checkFileExists, scaffoldProject };