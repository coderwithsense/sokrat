// RoadmapUI.js
import React from 'react'
import { Box, Text } from 'ink'

export const RoadmapUI = ({ roadmap }) => {
    return React.createElement(Box, { flexDirection: 'column', paddingX: 1, marginTop: 1 },
        React.createElement(Text, { color: 'cyan', bold: true }, `🗺  ${roadmap.title}`),
        React.createElement(Text, { color: 'gray', dimColor: true }, '── steps ──────────────────'),
        ...roadmap.steps.map((step) =>
            React.createElement(Box, { key: step.step, gap: 2 },
                React.createElement(Text, { color: step.completed ? 'green' : 'gray' }, step.completed ? '✅' : '⬜'),
                React.createElement(Text, { color: step.completed ? 'gray' : 'white' }, `Step ${step.step}: ${step.title}`)
            )
        )
    )
}