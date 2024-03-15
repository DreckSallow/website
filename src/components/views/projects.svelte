<script lang="ts">
  import MelodyImg from "../../imgs/prj-melody.png";
  import QuippImg from "../../imgs/quipp-image.png";
  import FlixImg from "../../imgs/flix-markdown.webp";
  import FlowImg from "../../imgs/flow-img.gif";
  import CountriesAppImg from "../../imgs/countries-app.webp";
  import PcshopImg from "../../imgs/pcshop-img.png";

  import CardProject from "../cards/project.svelte";
  import Heading from "../ui/heading.svelte";
  import Text from "../ui/text.svelte";
</script>

<section class="w-full">
  <Heading size="title" underlined>Projects</Heading>
  <Text style="mt-5">Show open source projects I've created.</Text>
  <ul
    class="mt-8 grid gap-y-6 gap-x-4 pb-9 mx-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:mx-8"
  >
    <li class="w-[350px] relative overflow-hidden rounded-2xl">
      <CardProject
        title="Melody"
        img={MelodyImg.src}
        imgAlt="Countries app image"
        desc="🎼 Music Player for the terminal (TUI). Listen music and navigate between sections using the keyboard."
        tags={["Rust"]}
        githubLink="https://github.com/DreckSallow/melody"
      />
    </li>
    <li class="w-[350px] relative overflow-hidden rounded-2xl">
      <CardProject
        title="Quipp"
        img={QuippImg.src}
        imgAlt="Quipp project image"
        desc="🎼 Website to interact with other people, like community. Used for QA's streams."
        tags={["Rust", "Websockets", "Supabase", "Next", "Tailwindcss"]}
        githubLink="https://github.com/DreckSallow/qa-web"
        webLink="https://qa-web.vercel.app/"
      />
    </li>
    <li class="w-[350px] relative overflow-hidden rounded-2xl">
      <CardProject
        title="Flix"
        img={FlixImg.src}
        imgAlt="Flix project image"
        desc="🖥️ A powerful, versatile and Open Source desktop aplication designed for use the Anki decks and make notes."
        tags={["Rust", "Tauri", "Vue", "Astro", "UnoCss"]}
        githubLink="https://github.com/DreckSallow/flix"
        webLink="https://flixdev.netlify.app/"
      />
    </li>
    <li class="w-[350px] relative overflow-hidden rounded-2xl">
      <CardProject
        title="Flow"
        img={FlowImg.src}
        imgAlt="Flix project image"
        desc="🖥️ CLI task manager focused on better controlling your tasks and projects. Improving your workflow."
        tags={["Rust"]}
        githubLink="https://github.com/DreckSallow/flow"
      />
    </li>
    <li class="w-[350px] relative overflow-hidden rounded-2xl">
      <CardProject
        title="Countries App"
        img="https://www.arandadev.com/_next/image?url=https%3A%2F%2Fdrecksallow.github.io%2FDreckSallow%2Fcountries-app.png&w=384&q=75"
        imgAlt="Countries app image"
        desc="🌍 Website to search, filter and sort countries, obtained from the backend using a GaphQl API."
        tags={["Typescript", "Prisma", "NodeJs", "SvelteKit"]}
        githubLink={CountriesAppImg.src}
        webLink="https://countries-app-svelte-6x6p-kadnr1vr8-dreck2003.vercel.app/"
      />
    </li>
    <li class="w-[350px] relative overflow-hidden rounded-2xl">
      <CardProject
        title="Pcshop"
        img={PcshopImg.src}
        imgAlt="Pcshop project image"
        desc="🏪 SoyHenry final project. Ecommerce online about tech products."
        tags={["Nodejs", "React", "Redux"]}
        githubLink="https://github.com/nmacenco/Ecommerce-Project"
        webLink="https://pcshop-ecommerce-project.vercel.app/"
      />
    </li>
  </ul>
</section>
