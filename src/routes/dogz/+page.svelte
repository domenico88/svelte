<script>
  // @ts-nocheck

  import DogCard from "./DogCard.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>Dogz</title>
  <meta name="description" content="Dogz this app" />
</svelte:head>

{#await data}
  <p>...waiting</p>
{:then data}
  <div class="text-column">
    <DogCard img={data.african} />
    <DogCard img={data.airedale} />
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
