<script>
  import { GithubIcon, LinkedinIcon, MailIcon } from "../icons";
  const SKILLS = [
    "Javascript",
    "Typescript",
    "React",
    "Vue",
    "Tailwindcss",
    "Nextjs",
    "Nuxt",
    "Rust",
  ];
</script>

<section
  class="flex justify-between items-center gap-12 lg:gap-6 m-auto mx-6 flex-col lg:flex-row"
>
  <div class="lg:w-1/2">
    <!--<h5 class="text-brand font-semibold text-xs lg:text-sm mb-1">
      WELCOME TO MY WORLD
    </h5>-->
    <h1 class="text-4xl lg:text-6xl font-bold mb-4">Hi, I'm Dikson Aranda</h1>
    <p class="text-base lg:text-lg text-justify lg:text-start">
      I'm <span class="text-brand">frontend developer,</span>
      passionate about technology, and focused on building better projects. Always
      for ways to expand my horizons and challenge myself.
    </p>
    <div class="mt-4">
      <p class="text-base lg:text-lg text-justify lg:text-start">
        These are my skills:
      </p>
      <ul class="gap-3 mt-2 grid grid-cols-2 md:grid-cols-4">
        {#each SKILLS as sk}
          <li
            class="before:content-['>'] before:text-blue-300 before:font-medium flex gap-1 text-base"
          >
            {sk}
          </li>
        {/each}
      </ul>
    </div>
    <div class="mt-8 flex justify-between">
      <a
        download="cv"
        href="/file"
        class="rounded-md bg-txt text-white font-medium text-sm text-center px-5 py-2.5"
      >
        Download CV
      </a>
      <div class="flex gap-2">
        <a href="https://github.com/DreckSallow" class="underline">
          <GithubIcon
            className="w-9 h-9 fill-txt hover:scale-105 transition-transform duration-100"
          />
        </a>
        <a href="https://www.linkedin.com/in/dikson-aranda/" class="underline">
          <LinkedinIcon
            className="w-9 h-9 fill-txt hover:scale-105 transition-transform duration-100"
          />
        </a>
        <a href="mailto:arandadikson@gmail.com" class="underline">
          <MailIcon
            className="w-9 h-9 fill-txt hover:scale-105 transition-transform duration-100"
          />
        </a>
      </div>
    </div>
  </div>
  <img
    src="https://avatars.githubusercontent.com/u/86900322?v=4"
    alt="avatar"
    class="rounded-3xl bg-green-200 w-[45%] aspect-square"
  />
</section>
