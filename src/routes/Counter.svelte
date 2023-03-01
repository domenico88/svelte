<script lang="ts">
  import { count } from "../store";

  let countValue: number;

  count.subscribe((value) => {
    countValue = value;
  });

  $: testString = countValue == 2 ? "Wow" : "";
  const incrementCount = () => count.update((c) => c + 1);
  const decreaseCount = () => count.update((c) => c - 1);
  let buttonStyle =
    "bg-fuchsia-800 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded mr-4";
</script>

<div class="text-center mt-10">
  <button class={buttonStyle} on:click={incrementCount}>+ </button>
  {countValue}
  <button class={buttonStyle + " ml-4"} on:click={decreaseCount}>- </button>
  Clicked {testString}
</div>
