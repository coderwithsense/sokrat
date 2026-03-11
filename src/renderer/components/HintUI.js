import React from 'react'
import { Box, Text } from 'ink'

export const HintUI = ({ hint, intent }) => {
    return React.createElement(Box, { flexDirection: 'column', paddingX: 1, marginTop: 1 },

        React.createElement(Box, { gap: 2, marginBottom: 1 },
            React.createElement(Text, { color: 'cyan', bold: true }, '💡 Hint'),
            React.createElement(Text, { color: 'green' }, `[level ${hint.level}/3]`),
            React.createElement(Text, { color: 'gray', dimColor: true }, intent.domain),
        ),

        React.createElement(Box, { borderStyle: 'round', borderColor: 'cyan', paddingX: 2, paddingY: 1, marginBottom: 1 },
            React.createElement(Text, { wrap: 'wrap' }, hint.text),
        ),

        React.createElement(Box, { flexDirection: 'column' },
            React.createElement(Text, { color: 'gray', dimColor: true }, '── follow-ups ──────────────────'),
            ...hint.followUps.map((q, i) =>
                React.createElement(Text, { key: i, color: 'yellow' },
                    `[${String.fromCharCode(97 + i)}] ${q}`
                )
            )
        )
    )
}