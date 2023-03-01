<script lang="ts">
  let count = 0;

  $: testString = count == 2 ? "Wow" : "";
  const incrementCount = () => count++;
  const decreaseCount = () => count--;
  let buttonStyle =
    "bg-fuchsia-800 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded mr-4";
</script>

<div class="text-center mt-10">
  <button class={buttonStyle} on:click={incrementCount}>+ </button>
  {count}
  <button class={buttonStyle + " ml-4"} on:click={decreaseCount}>- </button>
  Clicked {testString}
</div>
