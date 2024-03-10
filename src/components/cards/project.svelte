<script lang="ts">
  import Tag from "../ui/tag.svelte";

  export let title: string;
  export let img: string;
  export let imgAlt: string;
  export let desc: string;
  export let tags: string[] = [];
  export let githubLink: string;
  export let webLink: string | undefined = undefined;
</script>

<article class="overflow-hidden h-full flex flex-col justify-between">
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
  <div class="flex justify-between gap-4 m-2 text-sm">
    <a
      class="flex-1 bg-txt/90 rounded-md px-2 py-1 text-white font-medium text-center"
      href={githubLink}
      target="_blank"
    >
      Github
    </a>
    {#if webLink}
      <a
        class="flex-1 bg-brand/90 rounded-lg px-2 py-1 text-center font-semibold"
        href={webLink}
        target="_blank"
      >
        Demo
      </a>
    {/if}
  </div>
</article>
