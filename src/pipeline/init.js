import os from 'os'
import path from 'path'
import fs from 'fs/promises'
import 'dotenv/config';

export const runInit = async () => {
    const HINT_DIR_LOC = path.join(os.homedir(), '.hint-agent')

    const configFile = {
        apiKey: process.env.GEMINI_API_KEY || '', model: 'gemini-2.5-flash', provider: 'gemini', hintLadderMax: 3, indexDepth: 3
    }
    const profileFile = {
        concepts: {}, totalSessions: 0, createdAt: Date.now()
    }

    await fs.mkdir(HINT_DIR_LOC, {recursive: true})
    await fs.writeFile(path.join(HINT_DIR_LOC, 'config.json'), JSON.stringify(configFile, null, 2))
    await fs.writeFile(path.join(HINT_DIR_LOC, 'profile.json'), JSON.stringify(profileFile, null, 2))

    console.log('✓ initialized at', HINT_DIR_LOC)
}