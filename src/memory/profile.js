import fs from 'fs/promises';
import os from 'os'

export const readProfile = async () => {
    try {
        const raw = await fs.readFile(`${os.homedir()}/.hint-agent/profile.json`, 'utf-8');
        return JSON.parse(raw);
    } catch (e) {
        return { concepts: {}, totalSessions: 0, createdAt: Date.now() };
    }
}

export const writeProfile = async (profile) => {
    const profilePath = `${os.homedir()}/.hint-agent/profile.json`;
    await fs.writeFile(profilePath, JSON.stringify(profile, null, 2));
}