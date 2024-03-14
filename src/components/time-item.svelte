<script lang="ts">
  import Heading from "./ui/heading.svelte";

  export let title: string;
  export let subtitle: string;
</script>

<li class="flex flex-row gap-6 mt-8 text-balance">
  <div class="flex flex-col">
    <span
      class="shadow-outer rounded-full bg-brand w-5 aspect-square block mb-2 shadow-brand/40"
    />
    <div class="flex-1 bg-txt/70 w-1 mx-auto dark:bg-dark-txt" />
  </div>
  <section class="flex-1">
    <Heading size="subtitle">{title}</Heading>
    <Heading size="sm" style="mt-2">{subtitle}</Heading>
    <slot />
  </section>
</li>
