# Login page

## Description

Component which contains [Auth Form](../components/AuthForm.md).

<b>URL</b>: `/signup` or `/signin`

<b>URL Paramater</b>: `None`

<b>Props</b>: `None`

<b>Authorized</b>: `NO`

## Success entry

Condition: No requirements needed, user have access to this page.

Outcomes:

- `/signup` - user is redirected to `/signin`.
- `/signin` - user is redirected to `/homepage/:user`.

## Error entry

Condition: User provided incorrect credentials.

Outcome: User is prompted with specific error message.
