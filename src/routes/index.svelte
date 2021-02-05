<script context="module">
  export async function load({ fetch }) {
    console.log("index.svelte load() ->");
    let url = `/hello.json`;
    let result = await fetch(url);
    const json = await result.json();
    console.log("/hello.json response:", json);
    return { props: json };
  }
</script>

<script>
  export let hello;
</script>

Hello {hello}
