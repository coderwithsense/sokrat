import { exec } from 'child_process';
import { readConfig } from '../config/index.js';

async function openInEditor(projectPath) {
    const config = await readConfig();
    exec(`${config.editor} ${projectPath}`);
}

async function openTerminal(projectPath) {
    if (process.platform === 'darwin') {
        exec(`open -a Terminal ${projectPath}`)
    } else {
        exec(`xterm ${projectPath}`);
    }
}

export { openInEditor, openTerminal };