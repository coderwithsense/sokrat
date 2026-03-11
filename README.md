# hint-agent

> A Socratic coding mentor CLI. Hints only — never the answer.

## Install
```bash
npm install -g hint-agent
hint init
```

## Usage
```bash
hint "why is my useEffect running every render"
hint "explain this error: cannot read properties of undefined"
hint --level 2 "how does event delegation work"
hint profile   # view your concept mastery
hint reset     # clear session memory
```

## How it works
The agent classifies your query, reads your codebase for context,
and generates the minimal nudge you need — never the solution.
Ask for the next hint level when you're still stuck.

## Config
Set your API key after running `hint init`:
```
~/.hint-agent/config.json
```
