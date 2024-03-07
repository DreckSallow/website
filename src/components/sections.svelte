<script>
  import AboutSection from "./views/about.svelte";
  import JobsSection from "./views/jobs.svelte";
  import { page } from "../store";

  let applyClass = false;
  let currentPage = $page;
  page.subscribe((pg) => {
    if (currentPage == $page) return;
    applyClass = true;
    setTimeout(() => {
      currentPage = pg;
    }, 1300);
    setTimeout(() => {
      applyClass = false;
    }, 2600);
  });
</script>

{#if currentPage == "info"}
  <AboutSection />
{:else if currentPage == "jobs"}
  <JobsSection />
{/if}

<div
  class="fixed bottom-0 left-0 w-screen bg-txt"
  class:animate-pager={applyClass}
/>
