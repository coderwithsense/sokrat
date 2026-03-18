// LogUI.js
import React from 'react'
import { Box, Text } from 'ink'

export const LogUI = ({ logs }) => {
    return React.createElement(Box, { flexDirection: 'column', paddingX: 1, marginTop: 1 },
        React.createElement(Text, { color: 'cyan', bold: true }, '📜 Learning Timeline'),
        React.createElement(Text, { color: 'gray', dimColor: true }, '── ──────────────────'),
        ...logs.map((commit, i) =>
            React.createElement(Box, { key: i, gap: 2 },
                React.createElement(Text, { color: 'gray', dimColor: true }, new Date(commit.date).toLocaleDateString()),
                React.createElement(Text, { color: 'white' }, commit.message)
            )
        )
    )
}