# sessionTest

this is a test repo - trying to understand the expected behavior of svelte-kit

To reproduce:
- npm init svelte@next sessionTest
- add `/setup/index.js` into /src
- add `/hello.json.js` into /routes
- fetch `/hello.json` from `index.svelte`
- run npm dev, and look at the logs.
- how can we access `context` from within the `index.svelte` load function?