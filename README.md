# sokrat

**The AI that teaches you to code — not codes for you.**

[![npm version](https://img.shields.io/npm/v/sokrat)](https://www.npmjs.com/package/sokrat)
[![npm downloads](https://img.shields.io/npm/dm/sokrat)](https://www.npmjs.com/package/sokrat)
[![license](https://img.shields.io/npm/l/sokrat)](LICENSE)
[![node](https://img.shields.io/node/v/sokrat)](package.json)

sokrat is a Socratic coding mentor CLI. You tell it what you want to learn. It gives you a structured project roadmap, tells you what to build, and validates your work — without ever writing the code for you.

No autocomplete. No copilot. No spoon-feeding. Just you, your editor, and a mentor that asks better questions.

---

## Why sokrat?

Every AI coding tool today optimizes for one thing: getting code written faster. sokrat optimizes for something different — **actually learning**.

If you want to become a better developer, you need to write the code yourself, make mistakes, catch them, and understand why they happened. sokrat is built for that loop.

- You say what you want to learn
- sokrat generates a personalized, project-based roadmap
- You build each step yourself
- sokrat validates your implementation against real success criteria
- Pass → auto git commit, unlock next step
- Fail → Socratic hints about what's missing, never the solution

Your git log becomes a literal learning timeline. Every completed step is a commit.

---

## Install

```bash
npm install -g sokrat
```

Requires Node.js 18+. You'll need a [Google Gemini API key](https://aistudio.google.com/app/apikey) — free tier works fine.

---

## Quick Start

```bash
sokrat start
```

That's it. sokrat walks you through onboarding, generates your roadmap, and opens your project in your editor.

---

## Commands

| Command | Description |
|---|---|
| `sokrat start` | Begin a new learning project — answer a few questions, get a personalized roadmap |
| `sokrat step` | Show the current step: what to build, which files to create, and your opening hint |
| `sokrat check` | Validate your implementation against the step's success criteria |
| `sokrat hint [question]` | Get a Socratic nudge on your current step, or ask anything |
| `sokrat next` | Mark current step as skipped and advance to the next one |
| `sokrat roadmap` | See the full roadmap for your active project |
| `sokrat projects` | Browse all your learning projects and their progress |
| `sokrat continue [name]` | Resume a project — picks up where you left off |
| `sokrat log` | View your commit history as a learning timeline |
| `sokrat open` | Open the active project in your configured editor |

---

## How It Works

### 1. Onboarding

Run `sokrat start` and answer 4 questions:

- What do you want to learn?
- Experience level (beginner / some experience / experienced)
- How deep to go (quick overview / solid foundation / production ready)
- Time available (1 day / 1 week / 1 month)

### 2. Roadmap Generation

sokrat calls Gemini to generate a structured roadmap tailored to your answers. Each step has:

- A clear **goal** — what you should be able to do after this step
- **Files to create** — exact file paths you need to build
- **Success criteria** — observable things in your code the validator checks for
- **Socratic hints** — 3 levels of hints if you get stuck, none of which give you the answer

### 3. Build

Open your project in your editor (`sokrat open`), read the current step (`sokrat step`), and write the code yourself. No templates, no starters beyond the project folder.

### 4. Validate

Run `sokrat check`. sokrat reads your files, sends them to the LLM along with the step's success criteria, and returns:

- Pass or fail
- A score out of 100
- Specific feedback on what's missing or wrong
- Socratic hints if you failed (not solutions)

Pass → auto git commit with message `sokrat: step N complete — title`. Your learning is recorded.

### 5. Repeat

Move to the next step. Build. Check. Commit. The git log at the end of a project is proof of what you built and when.

---

## Philosophy

sokrat is built on one belief: **AI should make you a better developer, not replace you as one.**

The Socratic method — asking questions instead of giving answers — is one of the oldest and most effective teaching techniques in existence. sokrat applies it to software development.

When you get stuck, sokrat doesn't fix your bug. It asks: "What do you think is causing this?" Level 1 hints are broad and directional. Level 2 hints name the concept. Level 3 hints are near-answers where you make the final connection yourself.

This is uncomfortable. It's supposed to be. That discomfort is learning.

---

## Project Structure

sokrat creates two directories on your machine:

```
~/.sokrat/                          # sokrat metadata
  config.json                       # API key, model, active project
  projects/
    react-basics/
      meta.json                     # roadmap, step definitions
      progress.json                 # completion state

~/sokrat-projects/                  # your actual code lives here
  react-basics/
    src/
    package.json
    ...
```

---

## Configuration

First run of `sokrat start` prompts for your Gemini API key and writes `~/.sokrat/config.json`:

```json
{
  "apiKey": "your-gemini-api-key",
  "model": "gemini-2.5-flash",
  "provider": "gemini",
  "editor": "code",
  "activeProject": "react-basics"
}
```

Edit this file directly to change your model or editor. Supported editors: `code` (VSCode), `cursor`, `vim`, `nvim`, `nano`.

---

## Example Session

```bash
$ sokrat start

✔ What do you want to learn? react
✔ Experience level Beginner
✔ How deep do you want to go? Quick overview
✔ Time available 1 day

# sokrat generates a 4-step React roadmap and opens your project

$ sokrat step

 📍 Step 1  Setting Up Your First React App
 ┌─────────────────────────────────────────────┐
 │ Set up a new React project and run it       │
 │ locally to see the default app in browser.  │
 └─────────────────────────────────────────────┘
 ── files to create ──
   my-react-app/package.json
   my-react-app/src/index.js
   my-react-app/public/index.html
   my-react-app/src/App.js
 ── opening hint ──
   What command initiates a new React project?

# you write the code...

$ sokrat check

 ✅ Passed  ██████████  95/100
 ┌─────────────────────────────────────────────┐
 │ Great work! All required files are present  │
 │ and the React app structure is correct.     │
 └─────────────────────────────────────────────┘

# auto-committed: "sokrat: step 1 complete — Setting Up Your First React App"

$ sokrat log

 📜 Learning Timeline
 ──────────────────────────────
 19/3/2026  sokrat: step 1 complete — Setting Up Your First React App
```

---

## Tech Stack

- **Runtime**: Node.js (ESM)
- **CLI**: Commander.js
- **Terminal UI**: Ink (React for the terminal)
- **LLM**: Google Gemini (structured outputs via `responseSchema`)
- **Git**: simple-git
- **Prompts**: @inquirer/prompts
- **Storage**: Local filesystem (`~/.sokrat/`)

---

## Roadmap

sokrat is being actively developed. Here's what's coming:

**v1.1 — UX & Flow**
- [ ] Persistent session mode — stay-alive CLI, no more typing `sokrat` before every command
- [ ] Loader animations during LLM generation
- [ ] Auto-open editor on `sokrat start` and `sokrat continue`
- [ ] Show next step automatically after a passing `sokrat check`
- [ ] `sokrat config` — interactive config editor, no more manual JSON editing
- [ ] Landing screen — `sokrat` with no args shows active project and quick actions
- [ ] Scaffold choice on start — auto-generate project structure or build it yourself

**v1.2 — Intelligence**
- [ ] Progressive hint levels — sokrat remembers you saw level 1 and escalates automatically
- [ ] Skills/context files — track what you've learned across projects, inform future hints
- [ ] `sokrat undo` — revert a falsely passed step
- [ ] Resume context on recheck — LLM remembers what it said in previous failed attempts
- [ ] LLM usage and cost tracking per session

**v1.3 — Security & Reliability**
- [ ] API key stored in system keychain via `keytar` (not plaintext config)
- [ ] `sokrat doctor` — checks dependencies, API key validity, folder permissions
- [ ] Graceful LLM error handling and offline fallback messages
- [ ] Path sanitization to prevent directory traversal on project names
- [ ] Config validation on startup with readable error messages

**v2.0 — Platform**
- [ ] Multi-provider support (OpenAI, Anthropic, local models via Ollama)
- [ ] `sokrat export` — generate a PDF or markdown summary of your learning history
- [ ] `sokrat share` — shareable gist of your learning timeline
- [ ] `sokrat delete <name>` — remove a project cleanly
- [ ] Web dashboard for learning progress
- [ ] DEBUG mode — `DEBUG=true sokrat` for full stack traces in development

---

## Contributing

sokrat is early and evolving fast. Issues and PRs welcome.

```bash
git clone https://github.com/himanshu-poptani/sokrat
cd sokrat
npm install
node bin/sokrat.js start
```

---

## License

MIT

---

Built by [@himanshu-poptani](https://github.com/himanshu-poptani) — subscribe to [Orchestrate AI](https://youtube.com/@orchestrateai) for videos on building production AI systems.