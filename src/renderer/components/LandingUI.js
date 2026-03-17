// LandingUI.js
import React from 'react'
import { Box, Text } from 'ink'

export const LandingUI = ({ projects }) => {
    const hasProjects = projects && projects.length > 0;

    return React.createElement(Box, { flexDirection: 'column', paddingX: 1, marginTop: 1 },
        React.createElement(Text, { color: 'cyan', bold: true }, '⚡ sokrat'),
        React.createElement(Text, { color: 'gray', dimColor: true }, 'Learn to code the Socratic way.'),
        React.createElement(Box, { marginTop: 1, flexDirection: 'column' },
            hasProjects
                ? React.createElement(Text, { color: 'white' }, `You have ${projects.length} active project(s). Run 'sokrat continue' to resume.`)
                : React.createElement(Text, { color: 'yellow' }, `No projects yet. Run 'sokrat start' to begin.`)
        ),
        React.createElement(Box, { marginTop: 1, flexDirection: 'column' },
            React.createElement(Text, { color: 'gray', dimColor: true }, '── commands ──────────────────'),
            React.createElement(Text, { color: 'gray' }, '  sokrat start       — begin a new project'),
            React.createElement(Text, { color: 'gray' }, '  sokrat continue    — resume a project'),
            React.createElement(Text, { color: 'gray' }, '  sokrat step        — show current step'),
            React.createElement(Text, { color: 'gray' }, '  sokrat check       — validate your work'),
            React.createElement(Text, { color: 'gray' }, '  sokrat hint        — get a Socratic nudge'),
        )
    )
}