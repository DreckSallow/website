<script lang="ts">
  export let text: String;
  export let className: string = "";
</script>

<span
  class={"rounded-full bg-brand/30 px-3 py-1 text-xs inline-block font-normal dark:bg-brand/20 " +
    className}
>
  {text}
</span>
