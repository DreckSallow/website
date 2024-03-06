<script>
  import AboutSection from "./views/about.svelte";
  import JobsSection from "./views/jobs.svelte";
  import { page } from "../store";
</script>

{#if $page == "info"}
  <AboutSection />
{:else if $page == "jobs"}
  <JobsSection />
{/if}
