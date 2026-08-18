# Student Services Portal

A small TypeScript project that demonstrates a professional development workflow for a future university student-services system. It includes a typed student model, generic API response examples, runtime validation of unknown data, and readable student-status labels.

## Requirements

- Git
- Node.js and npm

## Install

```bash
npm install
```

## Run and check the project

```bash
npm run build
npm start
npm run check
npm run lint
npm run format
```

`npm run build` compiles the TypeScript source, `npm start` runs the compiled example, and `npm run check` performs a TypeScript check without emitting files. Use `npm run format:check` when you want to check formatting without changing files.

## Development workflow

1. Create or select a GitHub Issue for the change.
2. Create a focused feature branch, such as `feature/student-status`.
3. Implement and review the change locally.
4. Run the type check, linting, formatting check, build, and example.
5. Review `git status` and `git diff`, then create a meaningful commit.
6. Push the branch and open a Pull Request linked to the Issue.
7. Address review feedback before merging.

## AI usage policy

AI tools may assist development, but their output is not accepted automatically. All AI-generated code must be understood, reviewed, modified when necessary, tested, and verified with reliable sources before it is committed. Prompts, recommendations, decisions, and verification sources are recorded in `LAB_REPORT.md`.
