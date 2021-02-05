<script context="module">
  export async function load({ page, session, context, fetch }) {
    console.log("index.svelte load() ->", { context });
    return { props: { context } };
  }
</script>

<script>
  export let context;
</script>

Context should be populated here:

<pre><code>{JSON.stringify(context, null, 2)}</code></pre>
