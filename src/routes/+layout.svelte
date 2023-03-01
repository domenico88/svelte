<script>
  import Header from "./Header.svelte";
  import "../app.css";
</script>

<div>
  <Header />

  <div class="text-center mt-auto">
    <slot />
  </div>

  <div
    class="absolute bottom-0 w-full text-center p-4 bg-white rounded-lg shadow "
  >
    Footer
  </div>
</div>
