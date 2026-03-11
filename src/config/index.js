import fs from 'fs/promises'
import os from 'os'
import path from 'path'

const readConfig = async () => {
    try {
        const config = await fs.readFile(path.join(os.homedir(), '.hint-agent', 'config.json'), 'utf-8')
        if (!config) {
            throw new Error('NO_CONFIG_FILE')
        }
        const parsedConfig = JSON.parse(config)
        return parsedConfig;
    } catch (e) {
        throw new Error('hint-agent not initialized. Run `hint init` first.')
    }
}

export default readConfig;