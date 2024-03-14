<script lang="ts">
  const sizeMap = {
    normal: "text-base",
    sm: "text-sm",
    xs: "text-xs",
  } as const;

  export let as: "p" | "span" = "p";
  export let style = "";
  export let size: keyof typeof sizeMap = "normal";
</script>

<svelte:element this={as} class={`txt ${sizeMap[size]} ${style}`}>
  <slot />
</svelte:element>
