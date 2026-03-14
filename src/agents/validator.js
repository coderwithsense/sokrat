import { readFile } from '../tools/filesystem.js';
import { saveProject } from '../memory/projects.js';
import { autoCommitStep } from '../tools/git.js';
import path from 'path';
import os from 'os';

const validateStep = async (project, stepIndex) => {
    const step = project.parsedMeta.steps[stepIndex];
    const projectPath = path.join(os.homedir(), 'sokrat-projects', project.parsedMeta.projectName);
    let checkContent = ""
    for (const filePath of step.filesToCreate) {
        const content = await readFile(filePath)
        checkContent += `This is the file ${filePath}: ${content}. `
    }
    // Call llm to check the content todo validator schema and prompting
    // const result = await llm({
    //     ...validatorPrompt({ step, checkContent }),
    //     schema: validatorSchema
    // })
    const result = {passed: true}
    if (result.passed) {
        project.parsedMeta.steps[stepIndex].completed = true;
        await saveProject(project.parsedMeta.projectName, project.parsedMeta);
        await autoCommitStep(projectPath, stepIndex + 1, step.title);
    }
    return result;
}

export default validateStep;