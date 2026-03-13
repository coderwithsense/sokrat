import simpleGit from "simple-git"

const gitInit = async (projectPath) => {
    const git = simpleGit(projectPath);
    return await git.init();
}

const gitAdd = async (projectPath) => {
    const git = simpleGit(projectPath);
    return await git.add('.');
}

const gitCommit = async (projectPath, message) => {
    const git = simpleGit(projectPath);
    return await git.commit(message);
}

const gitLog = async (projectPath) => {
    const git = simpleGit(projectPath);
    const logs = await git.log({
        maxCount: 10
    });
    return logs.all.map(commit => ({
        hash: commit.hash,
        message: commit.message,
        date: commit.date
    }));
}

const autoCommitStep = async (projectPath, stepNumber, stepTitle) => {
    await gitAdd(projectPath);
    await gitCommit(projectPath, `sokrat: step ${stepNumber} complete — ${stepTitle}`)
}

export { gitInit, gitAdd, gitCommit, gitLog, autoCommitStep };