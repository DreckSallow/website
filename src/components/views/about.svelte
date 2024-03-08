<script>
  const SKILLS = [
    "Javascript",
    "Typescript",
    "React",
    "Vue",
    "Tailwindcss",
    "Nextjs",
    "Nuxt",
    "Rust",
    "Haskell",
  ];
</script>

<section
  class="flex justify-between items-center gap-12 lg:gap-6 m-auto mx-6 flex-col lg:flex-row"
>
  <div class="lg:w-1/2">
    <h5 class="text-brand font-medium text-xs lg:text-sm mb-1">
      WELCOME TO MY WORLD
    </h5>
    <h1 class="text-4xl lg:text-6xl font-bold mb-4">Hi, I'm Dikson Aranda</h1>
    <p class="text-base lg:text-lg text-justify lg:text-start">
      I'm frontend developer, passionate about technology, and focused on
      building better projects. Always for ways to expand my horizons and
      challenge myself.
    </p>
    <div class="mt-8">
      <h5 class="mb-2 text-brand font-medium">SKILLS</h5>
      <ul class="flex gap-3 flex-wrap">
        {#each SKILLS as sk}
          <li
            class="before:content-['>'] before:text-blue-300 before:font-medium text-sm flex gap-1 text-sm"
          >
            {sk}
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <img
    src="https://avatars.githubusercontent.com/u/86900322?v=4"
    alt="avatar"
  />
</section>
