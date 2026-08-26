# Beginner Guide: What This Laboratory Activity Is For

## The main point

This activity is not mainly about building a large Student Services Portal. Its purpose is to teach the workflow used to create software professionally.

By completing it, you practice how to:

- write safer TypeScript;
- check data received at runtime;
- use Git commits and feature branches;
- collaborate through a GitHub Issue and Pull Request;
- use ESLint and Prettier to keep code consistent; and
- review, test, and verify AI suggestions instead of copying them without understanding them.

The small student-status feature is only an example used to practice the complete workflow.

## What was built

The TypeScript program is in [`src/index.ts`](../src/index.ts). It contains:

- a `Student` interface;
- a `StudentStatus` type;
- a generic `ApiResponse<T>` interface;
- a function that formats student information;
- runtime validation for values received as `unknown`; and
- a function that converts student statuses into readable labels.

The status formatter produces:

```text
active     -> Active Student
inactive   -> Inactive Student
unexpected -> Unknown Student Status
```

## How to open and run the project

### 1. Open the TypeScript file

In Visual Studio Code, open the Explorer panel, expand `src`, and select `index.ts`.

### 2. Open a terminal

In Visual Studio Code, select **Terminal → New Terminal**.

Make sure the terminal is inside the project directory:

```text
C:\Users\Valhaimerd\Desktop\Lab Activity 1
```

### 3. Install dependencies

This is normally needed only after downloading or cloning the project:

```bash
npm install
```

### 4. Check and run the program

Run these commands one at a time:

```bash
npm run check
npm run lint
npm run format:check
npm run build
npm start
```

What the commands mean:

- `npm run check` checks TypeScript types without creating output files.
- `npm run lint` checks for code-quality problems.
- `npm run format:check` checks whether files follow the formatting rules.
- `npm run build` compiles TypeScript from `src/` into JavaScript in `dist/`.
- `npm start` executes the compiled JavaScript.

Expected final output includes:

```text
Active Student
Inactive Student
Unknown Student Status
```

## Why TypeScript and runtime validation are both used

TypeScript checks the code while it is being developed. For example, the `Student` interface prevents the program from intentionally assigning a string to a numeric `id`.

Interfaces disappear after TypeScript is compiled into JavaScript. Data received from an API, form, or file can therefore still be incorrect at runtime. The `isStudent` function accepts `unknown` and checks every required property before the value is treated as a `Student`.

## Parts 16–17: Responsible AI use

The goal of the AI exercise is to show that an AI recommendation was reviewed critically. The required sequence is:

```text
Ask -> Understand -> Review -> Modify -> Test -> Verify -> Commit
```

The saved AI response and review are in [`AI_STATUS_RECOMMENDATION.md`](AI_STATUS_RECOMMENDATION.md).

### Prompt used

> Suggest a TypeScript implementation for converting a student's active/inactive status into a readable label. Explain the implementation and include possible edge cases. Do not use the `any` type.

### How to complete the AI review form

Use these answers as a factual summary of the work, but make sure you can explain them in your own words:

**AI Tool:** OpenAI Codex

**Prompt Used:** The prompt shown above.

**AI Recommendation:** Use explicit comparisons for `active` and `inactive`, return a readable label for each, and provide a safe fallback for unexpected runtime values.

**What I Understood:** The function checks the value before returning a label. Explicit checks prevent an invalid value from being incorrectly treated as an inactive student.

**Recommendation Accepted:** The explicit mappings from `active` to `Active Student` and `inactive` to `Inactive Student`.

**Recommendation Modified:** The final function accepts `unknown` so it can safely demonstrate unexpected input received at runtime.

**Recommendation Rejected:** A version that treated every value other than `active` as `inactive`.

**Reason:** Unexpected external data should not be mislabeled. Returning `Unknown Student Status` makes the problem visible and handles it safely.

## Git and GitHub workflow used

The project followed this sequence:

1. Create and configure the TypeScript project.
2. Commit the initial project on `main`.
3. Create GitHub Issue [#1](https://github.com/Valhaimerd/student-services-portal/issues/1).
4. Develop the feature on `feature/student-status`.
5. Test and commit the feature.
6. Push the feature branch.
7. Open Pull Request [#2](https://github.com/Valhaimerd/student-services-portal/pull/2).
8. Request an independent review.
9. Address review feedback if necessary.
10. Merge the Pull Request after approval.

The feature is not on `main` until the Pull Request is merged.

## What you still need to do personally

These steps cannot be completed honestly by the coding agent:

1. Add your name and section to [`LAB_REPORT.md`](../LAB_REPORT.md).
2. Take a screenshot showing your development environment and successful commands.
3. Ask another student or your instructor to leave one meaningful review comment on Pull Request #2.
4. Respond to the feedback and make a revision if requested.
5. Merge the Pull Request after approval.
6. Confirm that Issue #1 closes after the merge.
7. Answer the eight reflection questions in your own words, using three to five sentences each.
8. Submit the repository URL and required evidence.

## Files to know

| File                                                 | Purpose                                             |
| ---------------------------------------------------- | --------------------------------------------------- |
| [`src/index.ts`](../src/index.ts)                    | Main TypeScript program                             |
| [`package.json`](../package.json)                    | Project information, dependencies, and commands     |
| [`tsconfig.json`](../tsconfig.json)                  | TypeScript compiler settings                        |
| [`eslint.config.js`](../eslint.config.js)            | Code-quality rules                                  |
| [`.prettierrc.json`](../.prettierrc.json)            | Formatting rules                                    |
| [`.gitignore`](../.gitignore)                        | Files Git must not track                            |
| [`README.md`](../README.md)                          | Instructions for installing and running the project |
| [`LAB_REPORT.md`](../LAB_REPORT.md)                  | Evidence, AI review, and reflection form            |
| [`VERIFICATION_RESULTS.md`](VERIFICATION_RESULTS.md) | Recorded command and runtime results                |

## Simple summary

The activity teaches you to make a small change using the same process a development team would use for a real project: plan it, work on a branch, use tools to check it, review AI output, document the decision, open a Pull Request, obtain review, and merge only after verification.
