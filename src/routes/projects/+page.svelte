<script lang="ts">
  import { json } from "@sveltejs/kit";
  import { fly } from "svelte/transition";
  import Letter from "./Letter.svelte";

  export let data: any;

  let projects = data.projects;
</script>

<h1>These are my beautiful awesome projects:</h1>

{#each projects as project, i}
  {@const delay = i * 1000}
  <div class="project" in:fly={{ y: 20, duration: 500, delay }}>
    <h2>
      {#each project.title as letter, li}
        <Letter {letter} {li} extraDelay={delay} />
      {/each}
    </h2>
    <p in:fly={{ y: 20, duration: 500, delay: i * 300 + 300 }}>
      {project.description}
    </p>
    {#each project?.links as link}
      <a
        in:fly={{ y: 20, duration: 500, delay: i * 300 + 500 }}
        href={link.href}
        target={link?.target || "_blank"}>{link.label}</a
      >
    {/each}
  </div>
{/each}

<style lang="scss">
  h2 {
    .letter {
      display: inline-block;
    }
  }
  a {
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 25px 10px 20px;
    cursor: pointer;
    color: white;
    // color: ${({ theme }) => theme[theme.mode].colors.button.text};
    position: relative;
    &:after {
      display: block;
      content: "";
      background: linear-gradient(to bottom, #00acee, #0072e0);
      border-radius: 1em;
      z-index: -1;
      position: absolute;
      inset: 0;
      transition: inset 80ms ease-in-out, opacity 40ms linear,
        filter 20ms linear;
      filter: drop-shadow(0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2));
    }
    &:hover:after {
      top: -2px;
      bottom: -2px;
      left: 2px;
      right: 2px;
      filter: drop-shadow(0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.3));
    }
  }
</style>
