#!/usr/bin/env node

import { program } from "commander";
import pkg from "../package.json" assert {type: 'json'}
// import init from "../src/pipeline/init.js"
// import profile from "../src/pipeline/profile.js"
// import reset from "../src/pipeline/reset.js"

program
    .name('sokrat')
    .description('Socratic coding mentor CLI')
    .version(pkg.version)

program
    .argument('[query]', 'description')
    .option('-l, --level <number>', 'desc', '1')
    .option('--no-context')
    .action(async (query, options) => {
        const { startSession } = await import('../src/pipeline/run.js')
        await startSession(query, options)
    })

program
    .command('init')
    .description('Initialize the HintClaw bot')
    .action(async () => {
        const {runInit} = await import('../src/pipeline/init.js')
        await runInit();
    })

program
    .command('profile')
    .description('Get profile and result everything about it')
    .action(async () => {
        const {showProfile} = await import('../src/pipeline/profile.js')
        await showProfile();
    })

program
    .command('reset')
    .description('Get profile and result everything about it')
    .action(async () => {
        const {reset} = await import('../src/pipeline/reset.js')
        await reset();
    })

program.parse()