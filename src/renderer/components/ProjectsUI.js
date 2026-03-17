// ProjectsUI.js
import React from 'react'
import { Box, Text } from 'ink'

export const ProjectsUI = ({ projects }) => {
    return React.createElement(Box, { flexDirection: 'column', paddingX: 1, marginTop: 1 },
        React.createElement(Text, { color: 'cyan', bold: true }, '📁 Your Projects'),
        React.createElement(Text, { color: 'gray', dimColor: true }, '── ──────────────────'),
        ...projects.map((project) => {
            const { steps, projectName, title } = project.parsedMeta;
            const completed = steps.filter(s => s.completed).length;
            const total = steps.length;
            const bar = '█'.repeat(Math.round((completed / total) * 10)) + '░'.repeat(10 - Math.round((completed / total) * 10));
            return React.createElement(Box, { key: projectName, flexDirection: 'column', marginBottom: 1 },
                React.createElement(Box, { gap: 2 },
                    React.createElement(Text, { color: 'white', bold: true }, projectName),
                    React.createElement(Text, { color: 'gray', dimColor: true }, title),
                ),
                React.createElement(Box, { gap: 2 },
                    React.createElement(Text, { color: 'cyan' }, bar),
                    React.createElement(Text, { color: 'gray', dimColor: true }, `${completed}/${total} steps`)
                )
            )
        })
    )
}