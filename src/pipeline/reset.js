import { resetSession } from '../memory/session.js';

export const reset = async () => {
    await resetSession();
}