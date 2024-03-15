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
  class="rounded-full bg-brand/20 fixed bottom-2 left-1/2 -translate-x-1/2 backdrop-blur-lg dark:bg-[#2d3748]"
>
  <div class="nav-list" role="list">
    <button on:click={() => page.set("info")} class:selected={$page == "info"}>
      About
      <!--<UserIcon className="w-7 h-7 fill-txt" />-->
    </button>
    <button on:click={() => page.set("jobs")} class:selected={$page == "jobs"}>
      Trajectory
      <!--<BriefcaseIcon className="w-7 h-7 fill-txt" />-->
    </button>
    <button
      on:click={() => page.set("projects")}
      class:selected={$page == "projects"}
    >
      Projects
      <!--<BulbIcon className="w-7 h-7 fill-txt" />-->
    </button>
  </div>
</nav>
