import { input, select } from '@inquirer/prompts';

export const runOnboarding = async () => {
    const topic = await input({ message: 'What do you want to learn?' });
    
    const level = await select({
        message: 'Experience level',
        choices: [
            { name: 'Beginner', value: 'beginner' },
            { name: 'Some experience', value: 'some-experience' },
            { name: 'Experienced', value: 'experienced' },
        ],
    });

    const depth = await select({
        message: 'How deep do you want to go?',
        choices: [
            { name: 'Quick overview', value: 'quick-overview' },
            { name: 'Solid foundation', value: 'solid-foundation' },
            { name: 'Production ready', value: 'production-ready' },
        ],
    });

    const timeAvailable = await select({
        message: 'Time available',
        choices: [
            { name: '1 day', value: '1-day' },
            { name: '1 week', value: '1-week' },
            { name: '1 month', value: '1-month' },
        ],
    });

    // TODO: call roadmap generator
    return { topic, level, depth, timeAvailable };
}