import { readProfile, writeProfile } from '../memory/profile.js';

const updateProfile = async (intent, hint) => {
    const profile = await readProfile();
    const concept = hint.concept;

    if (!profile.concepts[concept]) {
        profile.concepts[concept] = {seen: 0, hintLevels: [], mastery: 0.5}
    }

    profile.concepts[concept].seen += 1;
    profile.concepts[concept].hintLevels.push(hint.level);
    profile.totalSessions += 1;

    await writeProfile(profile);
}

export default updateProfile;