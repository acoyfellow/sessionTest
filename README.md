# sessionTest

this is a test repo - trying to understand the expected behavior of svelte-kit

To reproduce:
- npm init svelte@next sessionTest
- add `/setup/index.js` into /src
- add `/hello.json.js` into /routes
- fetch `/hello.json` from `index.svelte`
- run npm dev, and look at the logs.

- you'll notice the `/setup/index.js` gets called twice: bfore the index.svelte, and the hello.json fetch.
- notice, the headers come in with the first, but not the second

here is where the problem is: what do i do when i need the headers.cookie to validate session?# sessionTest
