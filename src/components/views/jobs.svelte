<script lang="ts">
  import TimeItem from "../time-item.svelte";

  const sections = [
    {
      title: "Liquid",
      time: "Nov. 2023 - Present",
      descs: [
        "I develop web applications using Vue, Nuxt, Pinia, and Tailwind CSS, with deployments on GCP (Google Cloud Platform).",
        "I collaborate in the design, implementing improvements and corrections to enhance the user experince.",
      ],
    },
    {
      title: "Kimche",
      time: "Jun. 2022 - Ago. 2022",
      descs: [
        "I added new features to the web applications, considering data visualization (tables, graphics, and progress bars).",
        "I identify and resolve problems, improving functioanality and user experience.",
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
  <h1 class="text-2xl font-semibold border-b-4 border-brand inline mr-auto">
    Trajectory
  </h1>

  <h3 class="mt-5">A summarise of my trajectory in programing.</h3>
  <ul class="">
    {#each sections as sec}
      <TimeItem title={sec.title} subtitle={sec.time}>
        {#if sec.descs.length > 0}
          <ul class="list-disc mx-5 mt-2.5 text-base text-balance">
            {#each sec.descs as p}
              <li class="mb-2">{p}</li>
            {/each}
          </ul>
        {/if}
      </TimeItem>
    {/each}
  </ul>
</section>
