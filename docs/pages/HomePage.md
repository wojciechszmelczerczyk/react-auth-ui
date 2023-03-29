# Homepage

## Description

Component contains arbitrary "Hello" template with current user email.

<b>URL</b>: `/homepage/:user`

<b>URL Paramater</b>: `user=[string]` where `user` is email.

<b>Props</b>: `NO`

<b>Authorized</b>: `YES`

## Success entry

Condition: If user is signed in or jsonwebtoken and email values exist in local storage.

Outcome: User is redirected to homepage.

## Error entry

Condition: If user is not signed in.

Result: User is redirected to sign in page.
