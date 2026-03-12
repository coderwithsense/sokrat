# hint-agent

> A Socratic coding mentor CLI. Hints only — never the answer.

## Install
```bash
npm install -g sokrat
sokrat init
```

## Usage
```bash
sokrat "why is my useEffect running every render"
sokrat "explain this error: cannot read properties of undefined"
sokrat --level 2 "how does event delegation work"
sokrat profile   # view your concept mastery
sokrat reset     # clear session memory
```

## How it works
The agent classifies your query, reads your codebase for context,
and generates the minimal nudge you need — never the solution.
Ask for the next hint level when you're still stuck.

## Config
Set your API key after running `sokrat init`:
```
~/.hint-agent/config.json
```
