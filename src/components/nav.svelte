<script>
  import { page } from "../store";
  import { UserIcon, BriefcaseIcon, BulbIcon } from "./icons";
</script>

<nav
  class="m-auto rounded-full bg-blue-300 fixed bottom-2 h-[40px] left-1/2 -translate-x-1/2"
>
  <div
    class="w-full h-full py-2 px-3 flex flex-row gap-4 text-white"
    role="list"
  >
    <button class="cursor-pointer" on:click={() => page.set("info")}>
      <UserIcon className="w-6 h-6 fill-blue-800" />
    </button>
    <button class="cursor-pointer" on:click={() => page.set("jobs")}>
      <BriefcaseIcon className="w-6 h-6 fill-blue-800" />
    </button>
    <button class="cursor-pointer" on:click={() => page.set("projects")}>
      <BulbIcon className="w-6 h-6 fill-blue-800" />
    </button>
  </div>
</nav>
