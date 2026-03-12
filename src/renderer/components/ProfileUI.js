import React from 'react'
import { Box, Text } from 'ink'

export const ProfileUI = ({ profile }) => {
    const concepts = Object.entries(profile.concepts)

    return React.createElement(Box, { flexDirection: 'column', paddingX: 1, marginTop: 1 },

        React.createElement(Text, { color: 'cyan', bold: true }, '📊 Learner Profile'),
        React.createElement(Text, { color: 'gray', dimColor: true }, `Total sessions: ${profile.totalSessions}`),

        ...concepts.map(([name, data]) =>
            React.createElement(Box, { key: name, gap: 2 },
                React.createElement(Text, { color: 'white' }, name.padEnd(24)),
                React.createElement(Text, { color: data.mastery > 0.7 ? 'green' : data.mastery > 0.4 ? 'yellow' : 'red' },
                    '█'.repeat(Math.round(data.mastery * 10)) + '░'.repeat(10 - Math.round(data.mastery * 10))
                ),
                React.createElement(Text, { color: 'gray', dimColor: true }, `${(data.mastery * 100).toFixed(0)}%`)
            )
        )
    )
}