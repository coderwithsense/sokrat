import fs from 'fs/promises';
import path from 'path';
import os from 'os';

const getSession = async () => {
    try {
        const raw = await fs.readFile(`${os.tmpdir()}/hint-agent-session.json`, 'utf-8')
        return JSON.parse(raw)
    } catch (e) {
        return { hints: [], startedAt: Date.now() };
    }
}

const saveSession = async (session) => {
    const sessionPath = '/tmp/hint-agent-session.json';
    await fs.writeFile(sessionPath, JSON.stringify(session, null, 2));
}

const resetSession = async () => {
    await saveSession({ hints: [], startedAt: Date.now() });
}

export { getSession, saveSession, resetSession };