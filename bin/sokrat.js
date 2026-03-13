#!/usr/bin/env node

import { program } from "commander";
import pkg from "../package.json" assert {type: 'json'};

program
    .name('sokrat')
    .description('Learn to code the socratic way.')
    .version(pkg.version)

program
    .command('start')
    .description('Begin a new learning project — answer a few questions, get a personalized roadmap')
    .action(async (arg) => {
        const { run } = await import('../src/pipeline/sokrat/start.js')
        await run(arg);
    })

program
    .command('projects')
    .description('Browse all your learning projects and track their progress')
    .action(async () => {
        const { run } = await import('../src/pipeline/sokrat/projects.js')
        await run();
    })

program
    .command('continue')
    .argument('[name]')
    .description('Resume a project — shows current step and opens your editor')
    .action(async (argument) => {
        const { run } = await import('../src/pipeline/sokrat/continueProject.js')
        await run(argument);
    })

program
    .command('step')
    .description('Show the current step: what to build, which files to create, and your opening hint')
    .action(async () => {
        const { run } = await import('../src/pipeline/sokrat/step.js')
        await run();
    })

program
    .command('check')
    .description(`Validate your implementation against the step's success criteria`)
    .action(async (options) => {
        const { run } = await import('../src/pipeline/sokrat/check.js')
        await run(options);
    })

program
    .command('hint')
    .argument('[question]')
    .description('Get a Socratic nudge on your current step, or ask anything')
    .action(async (argument) => {
        const { run } = await import('../src/pipeline/sokrat/getHint.js')
        await run(argument);
    })

program
    .argument('[question]')
    .description('Get a Socratic nudge on your current step, or ask anything')
    .action(async (question) => {
        const { run } = await import('../src/pipeline/sokrat/getHint.js')
        await run(question);
    })

program
    .command('next')
    .description('Mark current step as skipped and advance to the next one')
    .action(async () => {
        const { run } = await import('../src/pipeline/sokrat/next.js')
        await run();
    })

program
    .command('log')
    .description('View your commit history as a learning timeline')
    .action(async (argument) => {
        const { run } = await import('../src/pipeline/sokrat/log.js')
        await run();
    })

program
    .command('open')
    .description('Open the active project in your configured editor')
    .action(async (argument) => {
        const { run } = await import('../src/pipeline/sokrat/openProject.js')
        await run(argument);
    })

program
    .command('roadmap')
    .description('See the full roadmap for your active project')
    .action(async (argument) => {
        const { run } = await import('../src/pipeline/sokrat/roadmap.js')
        await run();
    })

program.parse()