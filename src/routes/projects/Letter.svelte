<script lang="ts">
  import { fly } from "svelte/transition";

  export let letter: string;
  export let li: number;
  export let extraDelay: number;

  let ended = false;
</script>

<span
  class="letter"
  class:ended
  in:fly={{ y: 20, duration: 500, delay: li * 15 + extraDelay }}
  on:introend={() => {
    ended = true;
  }}
>
  {#if letter === " "}&nbsp;{:else}{letter}{/if}
</span>

<style lang="scss">
  span {
    display: inline-block;
    &.ended {
      display: inline;
    }
  }
</style>
