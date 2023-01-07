<script>
  import { browser } from "$app/environment";
  import { darkMode } from "./store";

  $: {
    if (browser) {
      if ($darkMode === "dark") window.document.body.classList.add("dark-mode");
      else window.document.body.classList.remove("dark-mode");
    }
  }
</script>

<header>
  <nav>
    <a href="/">Home</a>
    <a href="/projects">View my work!</a>
    <a href="/cat">Love cats?</a>
  </nav>
  <div class="dark-mode-switch">
    <button on:click={() => ($darkMode = "dark")}>🌜</button>
    <button on:click={() => ($darkMode = "light")}>💡</button>
    Current Mode: {$darkMode}
  </div>
</header>
<slot />

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap");

  :global(body) {
    font-family: "Heebo", sans-serif;
  }
  :global(body.dark-mode) {
    color: white;
    background: black;
  }
</style>
