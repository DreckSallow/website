<script lang="ts">
  import { onMount } from "svelte";
  // import { UserIcon, BriefcaseIcon, BulbIcon } from "./icons";
  import { page, type PageValue } from "../store";
  let currentI = 0;
  const pageDirections: PageValue[] = ["info", "jobs", "projects"];
  onMount(() => {
    document.addEventListener("keydown", (e) => {
      if (!e.ctrlKey) return;
      const getI = (i: number) => {
        if (i < 0) return 0;
        if (i >= pageDirections.length - 1) return pageDirections.length - 1;
        return i;
      };
      const key = e.key;
      if (key == "ArrowRight") {
        currentI = getI(currentI + 1);
        page.set(pageDirections[currentI]);
      }
      if (key == "ArrowLeft") {
        currentI = getI(currentI - 1);
        page.set(pageDirections[currentI]);
      }
    });
  });
</script>

<nav
  class="m-auto rounded-full bg-brand/20 fixed bottom-2 left-1/2 -translate-x-1/2 backdrop-blur-lg"
>
  <div
    class="w-full h-full py-2 px-3 flex flex-row gap-4 text-txt font-medium text-sm"
    role="list"
  >
    <button class="cursor-pointer" on:click={() => page.set("info")}>
      About
      <!--<UserIcon className="w-7 h-7 fill-txt" />-->
    </button>
    <button class="cursor-pointer" on:click={() => page.set("jobs")}>
      Experience
      <!--<BriefcaseIcon className="w-7 h-7 fill-txt" />-->
    </button>
    <button class="cursor-pointer" on:click={() => page.set("projects")}>
      Projects
      <!--<BulbIcon className="w-7 h-7 fill-txt" />-->
    </button>
  </div>
</nav>
