<script lang="ts">
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

  <h3 class="mt-5">A summarise of my trajectory on programing.</h3>
  <ul
    class="timeline mx-auto mt-10 flex flex-col relative after:bg-txt/80 pb-6"
  >
    {#each sections as sec}
      <li class="relative after:bg-txt px-4 md:w-1/2">
        <div class="src-only ind bg-txt/40 before:bg-txt before:w-5 -mt-2" />
        <div class="rounded-2xl bg-white p-4 mx-6 shadow-lg">
          <h4 class="text-xl font-semibold">{sec.title}</h4>
          <span class="font-medium text-sm">{sec.time}</span>
          {#if sec.descs.length > 0}
            <ul class="list-disc mx-5 mt-2.5 text-base">
              {#each sec.descs as p}
                <li class="mb-2">{p}</li>
              {/each}
            </ul>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  .timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: -3px;
  }
  .timeline > li:nth-child(even) {
    left: 0;
  }

  .timeline > li .ind {
    position: absolute;
    border-radius: 9999px;
    padding: 0.4rem;
    aspect-ratio: 1;
    z-index: 10;
  }

  .timeline > li .ind::before {
    content: "";
    display: block;
    height: 100%;
    border-radius: 9999px;
  }

  .timeline > li .ind {
    left: 0;
    transform: translateX(-50%);
  }
  @media (min-width: 768px) {
    .timeline::after {
      left: 50%;
    }
    .timeline > li:nth-child(even) {
      left: 50%;
    }
    .timeline > li:nth-child(odd) .ind {
      transform: translateX(50%);
      right: 0;
      left: auto;
    }
  }
</style>
