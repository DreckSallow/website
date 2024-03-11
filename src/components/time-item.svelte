<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<li class="flex flex-row gap-6 mt-8 text-balance">
  <div class="flex flex-col">
    <span
      class="shadow-outer rounded-full bg-brand w-5 aspect-square block mb-2 shadow-brand/40"
    />
    <div class="flex-1 bg-txt/80 w-1 mx-auto" />
  </div>
  <section class="flex-1">
    <h4 class="text-2xl font-semibold">{title}</h4>
    <h5 class="text-base mt-2">{subtitle}</h5>
    <slot />
  </section>
</li>
