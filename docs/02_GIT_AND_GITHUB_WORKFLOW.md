# Git and GitHub Workflow

## Phase 1: Initial repository

1. Initialize Git and inspect `git status`.
2. Review all files before staging.
3. Create a meaningful initial commit, such as `chore: initialize TypeScript project`.
4. Create and connect a GitHub repository, then push the initial branch.
5. Confirm that source code and the README are visible while `node_modules/`, `.env`, and generated files are absent.

## Phase 2: Tracked feature

Create a GitHub Issue named **Add student-status formatter** with these acceptance criteria:

- `active` becomes `Active Student`;
- `inactive` becomes `Inactive Student`; and
- invalid or unexpected runtime values are handled safely.

Create and work on the feature branch:

```bash
git switch -c feature/student-status
```

Use an approved AI assistant to suggest an implementation without `any`. Review and understand the suggestion before adapting it. Test active, inactive, and unexpected inputs, then run type checking, linting, formatting, and available tests.

Review `git status` and `git diff`, then create a focused commit such as:

```bash
git commit -m "feat: add student status formatter"
git push -u origin feature/student-status
```

## Phase 3: Pull Request and review

The Pull Request must contain:

- summary;
- what changed;
- testing performed;
- AI usage;
- known limitations; and
- a link to the related Issue.

An instructor or another student must review correctness, naming, types, runtime safety, formatting, complexity, AI assumptions, and documentation. Preserve at least one meaningful review comment as evidence.

If revisions are requested, update the same feature branch, rerun checks, commit, and push. After approval, merge the Pull Request and verify that the Issue is closed, `main` contains the feature, and the history is understandable.

## Human actions

Repository creation, authentication, screenshots, Issue/PR submission, peer review, approval, and final merge require the student or instructor unless GitHub access is explicitly provided to the agent.
