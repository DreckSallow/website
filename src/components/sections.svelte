<script>
  import AboutSection from "./views/about.svelte";
  import JobsSection from "./views/jobs.svelte";
  import ProjectsSection from "./views/projects.svelte";
  import { page } from "../store";

  // $: currentPage = $page;
  // //TODO: block keybinding when is on transition
  // page.subscribe(() => {
  //   if (currentPage == $page) return;
  //   /*applyClass = true;
  //   setTimeout(() => {
  //     currentPage = pg;
  //   }, 1600);
  //   setTimeout(() => {
  //     applyClass = false;
  //   }, 2600);*/
  // });
</script>

{#if $page == "info"}
  <AboutSection />
{:else if $page == "jobs"}
  <JobsSection />
{:else if $page == "projects"}
  <ProjectsSection />
{/if}

<div class="fixed bottom-0 left-0 w-screen bg-txt z-40" />
