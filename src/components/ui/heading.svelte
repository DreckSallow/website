<script lang="ts">
  const sizeMap = {
    title: "text-2xl font-semibold",
    big: "text-3xl font-semibold",
    subtitle: "text-xl font-semibold",
    normal: "text-lg font-medium",
    sm: "text-base font-medium",
  } as const;

  export let underlined = false;
  export let style = "";
  export let size: keyof typeof sizeMap = "title";

  $: as = (() => {
    if (size == "subtitle") return "h2";
    if (size == "normal") return "h3";
    if (size == "sm") return "h4";
    return "h1";
  })();
</script>

<svelte:element
  this={as}
  class={`heading ${style} ${sizeMap[size]} ${underlined ? "border-b-4 border-brand inline" : ""}`}
>
  <slot />
</svelte:element>
