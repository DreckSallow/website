<script lang="ts">
  import Tag from "../ui/tag.svelte";

  export let title: string;
  export let img: string;
  export let imgAlt: string;
  export let desc: string;
  export let tags: string[] = [];
</script>

<article class="overflow-hidden">
  <img
    loading="lazy"
    decoding="async"
    src={img}
    alt={imgAlt}
    class="rounded-2xl h-[200px] w-full"
    height="200px"
  />
  <div class="p-2">
    <h4 class="font-semibold text-xl mb-2">{title}</h4>
    <p class="text-base">{desc}</p>
    <ul class="mt-4">
      {#each tags as tag}
        <Tag text={tag} className="mr-2 mb-2" />
      {/each}
    </ul>
  </div>
</article>
