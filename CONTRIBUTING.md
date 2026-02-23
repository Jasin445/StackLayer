# Contributing to StackLayer

Thank you for your interest in contributing to StackLayer. This document explains how to get involved, what we expect from contributors, and how to submit your work.

---

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Branch Naming](#branch-naming)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## Getting Started

1. Fork the repository
2. Clone your fork locally

```bash
git clone https://github.com/your-username/stacklayer.git
cd stacklayer
```

3. Install dependencies

```bash
npm install
```

4. Copy the environment file and fill in your values

```bash
cp .env.example .env
```

5. Run the development server

```bash
npm run dev
```

---

## How to Contribute

There are several ways to contribute to StackLayer:

- Fix a bug
- Implement a feature from the roadmap
- Improve documentation
- Add or correct tool data in the database seeds
- Improve UI or accessibility
- Write tests

If you are unsure where to start, look for issues labeled `good first issue` or `help wanted`.

---

## Branch Naming

Use clear, descriptive branch names following this pattern:

```
type/short-description
```

| Type | When to use |
|---|---|
| `feat/` | Adding a new feature |
| `fix/` | Fixing a bug |
| `docs/` | Documentation changes |
| `style/` | UI or CSS changes with no logic change |
| `refactor/` | Code restructuring with no behavior change |
| `chore/` | Maintenance tasks, dependency updates |

**Examples**

```
feat/tool-detail-page
fix/search-filter-bug
docs/update-readme
```

---

## Commit Messages

Write clear, concise commit messages in the present tense:

```
feat: add tool detail page
fix: correct search filter query
docs: update contributing guide
chore: update dependencies
```

Avoid vague messages like `update`, `fix stuff`, or `changes`.

---

## Pull Request Process

1. Make sure your branch is up to date with `main` before opening a PR
2. Keep PRs focused — one feature or fix per PR
3. Fill out the PR description explaining what you changed and why
4. Link any related issues using `Closes #issue-number`
5. Request a review from a maintainer
6. Address all review feedback before merging

PRs that are too large, undescribed, or unrelated to an open issue may be closed without merging.

---

## Code Style

- Use consistent indentation — 2 spaces
- Write clear variable and function names
- Add comments where logic is not immediately obvious
- Keep functions small and focused on a single responsibility
- Validate all user inputs on the backend before processing

There is no strict linter enforced at this stage, but clean, readable code is expected.

---

## Reporting Bugs

To report a bug, open an issue and include:

- A clear title describing the problem
- Steps to reproduce the bug
- What you expected to happen
- What actually happened
- Your browser, OS, and Node version if relevant
- Screenshots if applicable

---

## Suggesting Features

To suggest a feature, open an issue with the label `enhancement` and include:

- A clear description of the feature
- The problem it solves
- How it fits into StackLayer's workflow-based model
- Any relevant examples or references

---

## Questions

If you have questions that are not covered here, open a discussion or reach out to the maintainers directly through the repository.

We appreciate every contribution, no matter how small.