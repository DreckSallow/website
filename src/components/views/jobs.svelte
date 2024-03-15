<script lang="ts">
  import TimeItem from "../time-item.svelte";
  import Heading from "../ui/heading.svelte";
  import Text from "../ui/text.svelte";

  const sections = [
    {
      title: "Liquid",
      time: "Nov. 2023 - Present",
      descs: [
        "I developed web applications using Vue, Nuxt, Pinia, and Tailwind CSS, with deployments on GCP (Google Cloud Platform).",
        "I collaborate with the design team to improve the workflow and user experience",
      ],
    },
    {
      title: "Kimche",
      time: "Jun. 2022 - Ago. 2022",
      descs: [
        "I added new features to the web applications, considering data visualization (tables, graphics, and progress bars).",
        "I identified and resolved problems, improving functioanality and user experience.",
        "I used technologies like React, React Context and Cubejs.",
      ],
    },
    {
      title: "SoyHenry",
      time: "Oct. 2021 - March 2022",
      descs: [
        "I graduated from Soy Henry's Bootcamp, where I learned about web development, under the javascript ecosystem(frontend and backend).",
        "As a final project, we developed an online store for tech products.",
        "Skills learned: React, Redux, NodeJs, PostgreSql, Html, CSS, Sequelize.",
      ],
    },
  ].reverse();
</script>

<section class="w-full mb-6">
  <Heading underlined style="inline">Trajectory</Heading>
  <Text as="p" style="mt-5">A summarise of my trajectory in programing.</Text>
  <ul class="pb-6">
    {#each sections as sec}
      <TimeItem title={sec.title} subtitle={sec.time}>
        {#if sec.descs.length > 0}
          <ul class="list-disc mx-5 mt-2.5 text-base text-balance">
            {#each sec.descs as p}
              <li class="mb-2">
                <Text as="span">
                  {p}
                </Text>
              </li>
            {/each}
          </ul>
        {/if}
      </TimeItem>
    {/each}
  </ul>
</section>
