<script>
  import { GithubIcon, LinkedinIcon, MailIcon } from "../icons";
  import Text from "../ui/text.svelte";
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
    <h1 class="heading text-4xl lg:text-6xl font-bold mb-4">
      Hi, I'm Dikson Aranda
    </h1>
    <Text style="lg:text-lg">
      I'm <span class="text-brand">frontend developer,</span>
      passionate about technology, and focused on building better projects. Always
      for ways to expand my horizons and challenge myself.
    </Text>
    <div class="mt-4">
      <Text style="lg:text-lg">These are my skills:</Text>
      <ul class="gap-3 mt-2 grid grid-cols-2 md:grid-cols-4">
        {#each SKILLS as sk}
          <li
            class="before:content-['>'] before:text-blue-300 before:font-medium flex gap-1 text-base"
          >
            <Text as="span">
              {sk}
            </Text>
          </li>
        {/each}
      </ul>
    </div>
    <div class="mt-8 flex justify-between">
      <a
        download="cv"
        href="/file"
        class="rounded-md bg-txt text-white font-medium text-sm text-center px-5 py-2.5 dark:bg-brand/70"
      >
        Download CV
      </a>
      <div class="flex gap-2">
        <a href="https://github.com/DreckSallow" class="underline">
          <GithubIcon className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/dikson-aranda/" class="underline">
          <LinkedinIcon className="social-icon" />
        </a>
        <a href="mailto:arandadikson@gmail.com" class="underline">
          <MailIcon className="social-icon" />
        </a>
      </div>
    </div>
  </div>
  <img
    src="https://avatars.githubusercontent.com/u/86900322?v=4"
    alt="avatar"
    class="rounded-3xl bg-green-200 w-[70%] aspect-square lg:w-[45%]"
  />
</section>
