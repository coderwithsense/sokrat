// StepUI.js
import React from 'react'
import { Box, Text } from 'ink'

export const StepUI = ({ step }) => {
    return React.createElement(Box, { flexDirection: 'column', paddingX: 1, marginTop: 1 },
        React.createElement(Box, { gap: 2, marginBottom: 1 },
            React.createElement(Text, { color: 'cyan', bold: true }, `📍 Step ${step.step}`),
            React.createElement(Text, { color: 'white', bold: true }, step.title),
        ),
        React.createElement(Box, { borderStyle: 'round', borderColor: 'cyan', paddingX: 2, paddingY: 1, marginBottom: 1 },
            React.createElement(Text, { wrap: 'wrap' }, step.goal),
        ),
        React.createElement(Box, { flexDirection: 'column', marginBottom: 1 },
            React.createElement(Text, { color: 'gray', dimColor: true }, '── files to create ──────────────────'),
            ...step.filesToCreate.map((f, i) =>
                React.createElement(Text, { key: i, color: 'yellow' }, `  ${f}`)
            )
        ),
        React.createElement(Box, { flexDirection: 'column' },
            React.createElement(Text, { color: 'gray', dimColor: true }, '── opening hint ──────────────────'),
            React.createElement(Text, { color: 'cyan' }, `  ${step.hints[0]}`)
        )
    )
}