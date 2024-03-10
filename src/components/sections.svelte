<script>
  import AboutSection from "./views/about.svelte";
  import JobsSection from "./views/jobs.svelte";
  import ProjectsSection from "./views/projects.svelte";
  import { page } from "../store";

  let applyClass = false;
  $: currentPage = $page;
  //TODO: block keybinding when is on transition
  page.subscribe((pg) => {
    if (currentPage == $page) return;
    /*applyClass = true;
    setTimeout(() => {
      currentPage = pg;
    }, 1600);
    setTimeout(() => {
      applyClass = false;
    }, 2600);*/
  });
</script>

{#if currentPage == "info"}
  <AboutSection />
{:else if currentPage == "jobs"}
  <JobsSection />
{:else if currentPage == "projects"}
  <ProjectsSection />
{/if}

<div
  class="fixed bottom-0 left-0 w-screen bg-txt z-40"
  class:animate-pager={applyClass}
/>
