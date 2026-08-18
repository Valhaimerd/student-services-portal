# AI Recommendation: Student Status Formatter

## Tool and prompt

**AI tool:** OpenAI Codex

**Prompt:**

> Suggest a TypeScript implementation for converting a student's active/inactive status into a readable label. Explain the implementation and include possible edge cases. Do not use the `any` type.

## Recommendation

Use direct comparisons so each supported runtime value has an explicit label, followed by a safe fallback:

```ts
function getStudentStatusLabel(status: unknown): string {
  if (status === 'active') {
    return 'Active Student';
  }

  if (status === 'inactive') {
    return 'Inactive Student';
  }

  return 'Unknown Student Status';
}
```

The input is `unknown` because a value received at runtime can violate the `StudentStatus` type. Equality checks narrow the value without using `any`. Empty strings, different capitalization, missing values, and unsupported strings all receive the same safe fallback instead of being mistaken for an inactive student.

## Review decision

- **Accepted:** Explicit mappings for `active` and `inactive` and a string return value.
- **Modified:** The parameter accepts `unknown` instead of only `StudentStatus`, allowing the acceptance criterion for unexpected runtime values to be demonstrated.
- **Rejected:** A default branch that treated every non-active value as inactive, because it would silently mislabel bad external data.

## Verification

The TypeScript Handbook explains that `unknown` values must be narrowed with comparisons or type guards before they are used as a more specific type.

- **Official source:** [TypeScript Handbook — Basic Types: Unknown](https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown)
- **Result:** The source confirms that equality and type checks are appropriate for safely narrowing runtime input. No change was required after verification.
