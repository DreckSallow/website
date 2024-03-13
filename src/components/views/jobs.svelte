<script lang="ts">
  import TimeItem from "../time-item.svelte";

  const sections = [
    {
      title: "Liquid",
      time: "Nov. 2023 - Now",
      descs: [
        "Desarrollé aplicaciones web usando Vue, Nuxt, Pinia, Tailwindcss. Con desplieges en GCP (Google console platform).",
        "Colaboré en el diseño implementando mejoras o correciones para mejorar la experiencia de usuario.",
      ],
    },
    {
      title: "Kimche",
      time: "Jun. 2022 - Ago. 2022",
      descs: [
        "Añadí nuevas características a a la aplicación web considerando la visualización de datos (tablas,grapficos y barras de progreso).",
        "Identificar y solucionar problemas, mejorando la funcionalidad y experiencia de usuario.",
        "Uso de tecnologías web como React, React context, Cubejs.",
      ],
    },
    {
      title: "SoyHenry",
      time: "Oct. 2021 - March 2022",
      descs: [
        "Egresado del bootcamp de SoyHenry, donde aprendí sobre desarrollo web, bajo el ecosistema de Javascript(frontend y backend.).",
        "Como proyecto final desarollamos una tienda online de productos tech.",
        "Habilidades aprendidas: React, Redux, NodeJs, PostgreSql, Html, CSS, Sequelize.",
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
