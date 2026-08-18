# Implementation Tasks

This is intentionally a small task list. Tasks are ordered by dependency; separate agents may handle the independent local work, but one agent should integrate and verify the final result.

## Current status

- **Complete:** T1–T6 and T8.
- **Partly complete:** T7 (local feature branch created; GitHub Issue pending) and T9 (checks and feature commit complete; remote push pending).
- **Waiting on student/instructor:** T10 and the personal/submission portions of T11.

| ID  | Task                                                                          | Owner                      | Depends on | Done when                                                                             |
| --- | ----------------------------------------------------------------------------- | -------------------------- | ---------- | ------------------------------------------------------------------------------------- |
| T1  | Inspect tool versions and initialize the Node/TypeScript project              | Primary agent              | —          | Package files, `tsconfig`, and `src/` exist; versions are recorded                    |
| T2  | Configure `.gitignore`, ESLint, Prettier, and npm scripts                     | Setup agent                | T1         | Type check, lint, and format commands run successfully                                |
| T3  | Implement the `Student` model, formatting, generic responses, and examples    | TypeScript agent           | T1         | Code compiles and demonstrates `ApiResponse<Student>` and `ApiResponse<Student[]>`    |
| T4  | Implement runtime validation and its valid/invalid demonstrations             | TypeScript agent           | T3         | `unknown` is narrowed safely without `any`                                            |
| T5  | Write the project README and prepare the lab-report evidence sections         | Documentation agent        | T1–T4      | Required instructions, explanations, AI policy, and evidence placeholders are present |
| T6  | Initialize Git and create the initial commit                                  | Primary agent              | T1–T5      | Only appropriate source/config/docs files are committed                               |
| T7  | Create the Issue and `feature/student-status` branch                          | Student with GitHub access | T6         | Issue exists and feature work is on the named branch                                  |
| T8  | Review the AI suggestion, implement the status formatter, and test edge cases | Primary agent              | T7         | Acceptance criteria pass and the AI decision is documented                            |
| T9  | Run all checks, inspect the diff, commit, and push the feature                | Primary agent              | T8         | Clean checks and a focused feature commit are visible remotely                        |
| T10 | Open, review, revise, and merge the Pull Request                              | Student/instructor         | T9         | PR links the Issue, contains review evidence, and is merged                           |
| T11 | Complete reflection and final submission audit                                | Primary agent + student    | T10        | Every deliverable is present and each reflection answer has 3–5 sentences             |

## Suggested agent split

For this project, no more than three working agents are useful:

- **Primary agent (me):** integration, Git-safe sequencing, status feature, final checks, and report assembly.
- **Setup/TypeScript agent:** T2–T4 can be delegated as one focused implementation block.
- **Documentation agent:** T5 and the non-personal parts of T11.

The student retains actions involving accounts, authentication, screenshots, personal reflection, peer review, approval, and submission. If only one agent is available, complete T1–T11 in order; the project is small enough that parallel work is optional.
