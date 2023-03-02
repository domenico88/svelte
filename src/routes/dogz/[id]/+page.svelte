<script>
  // @ts-nocheck

  import DogCard from "../DogCard.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div>
  {#each data.item.message.slice(0, 10) as dog}
    <DogCard img={dog} />
  {/each}
</div>
