// ValidationUI.js
import React from 'react'
import { Box, Text } from 'ink'

export const ValidationUI = ({ result }) => {
    const scoreBar = '█'.repeat(Math.round(result.score / 10)) + '░'.repeat(10 - Math.round(result.score / 10))

    return React.createElement(Box, { flexDirection: 'column', paddingX: 1, marginTop: 1 },
        React.createElement(Box, { gap: 2, marginBottom: 1 },
            React.createElement(Text, { color: result.passed ? 'green' : 'red', bold: true }, result.passed ? '✅ Passed' : '❌ Failed'),
            React.createElement(Text, { color: result.passed ? 'green' : 'yellow' }, scoreBar),
            React.createElement(Text, { color: 'gray', dimColor: true }, `${result.score}/100`),
        ),
        React.createElement(Box, { borderStyle: 'round', borderColor: result.passed ? 'green' : 'red', paddingX: 2, paddingY: 1, marginBottom: 1 },
            React.createElement(Text, { wrap: 'wrap' }, result.feedback),
        ),
        !result.passed && React.createElement(Box, { flexDirection: 'column' },
            React.createElement(Text, { color: 'gray', dimColor: true }, '── hints ──────────────────'),
            ...result.hintsIfFailed.map((h, i) =>
                React.createElement(Text, { key: i, color: 'yellow' }, `[${i + 1}] ${h}`)
            )
        )
    )
}