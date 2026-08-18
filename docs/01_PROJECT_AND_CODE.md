# Project and Code Requirements

## Goal

Create the foundation of a University Student Services Portal. This lab is about a professional development workflow, not a complete portal.

## 1. Verify the environment

Record the installed versions of:

```bash
git --version
node --version
npm --version
```

Use `pnpm --version` too if pnpm is selected.

## 2. Expected project structure

Keep the project small:

```text
student-services-portal/
├── src/
│   └── index.ts
├── .gitignore
├── eslint.config.*
├── package.json
├── README.md
├── tsconfig.json
└── prettier configuration
```

Initialize the Node.js project, install TypeScript as a development dependency, and add npm scripts for the normal development checks.

## 3. TypeScript requirements

Implement a `Student` model with:

- numeric `id`;
- string `name`;
- string `email`; and
- status limited to `"active"` or `"inactive"`.

Add these behaviors:

- `formatStudent(student)` returns a readable student summary;
- generic `ApiResponse<T>` supports both one student and a student array;
- runtime validation accepts `unknown` and determines whether it is a valid `Student`;
- validation examples include one valid value, one value with an invalid `id`, and one value missing `name`; and
- `getStudentStatusLabel(status)` maps `active` to `Active Student` and `inactive` to `Inactive Student`, while unexpected runtime input is handled safely.

Do not use `any`. Be prepared to explain why generics are safer than `data: any`, and why an interface cannot validate data received at runtime.

## 4. Code-quality tools

Configure ESLint and Prettier with scripts equivalent to:

```bash
npm run lint
npm run format
```

Also provide a TypeScript checking or build command. Run every configured check and save useful terminal output for the report.

## 5. Ignored files

At minimum, `.gitignore` should contain:

```gitignore
node_modules/
dist/
.env
*.log
```

Document the reason for each pattern. Before every commit, confirm that dependencies, generated output, logs, and secrets are not staged.

## 6. README content

The project README must include:

- project title and description;
- requirements and installation;
- how to run the project;
- type checking, linting, and formatting commands;
- the feature-branch development workflow; and
- an AI usage policy stating that generated work is reviewed, understood, tested, and verified before commit.
