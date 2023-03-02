<script>
  import Header from "./Header.svelte";
  import "../app.css";
  import Counter from "./Counter.svelte";
</script>

<div>
  <Header />

  <div class="text-center mt-auto">
    <slot />
  </div>
</div>
