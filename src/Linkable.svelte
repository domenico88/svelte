<script lang="ts">
  export let link: string;
</script>

{#if link}
  <a href={link} class="cursor-pointer"><slot /></a>
{:else}
  <slot />
{/if}
