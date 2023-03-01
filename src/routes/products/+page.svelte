<script lang="ts">
  import { count } from "../../store";

  let countValue: number;

  count.subscribe((value) => {
    countValue = value;
  });
</script>

<svelte:head>
  <title>Products</title>
  <meta name="description" content="About this app" />
</svelte:head>
<div class="text-column">
  {#each Array(countValue) as _, i}
    <div class="max-w-sm rounded overflow-hidden shadow-lg inline-block mr-5 mt-7">
      <img
        class="w-full"
        src="/img/card-top.jpg"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#photography</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#travel</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#winter</span
        >
      </div>
    </div>
  {/each}
</div>
