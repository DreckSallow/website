<script lang="ts">
  const sections = [
    {
      title: "Liquid",
      time: "Sep. 2023 - Now",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut, voluptas sunt earum vero incidunt eos sed quibusdam natus. Doloribus dolore distinctio sunt quasi nostrum labore quae similique nemo neque.",
    },
    {
      title: "Kimche",
      time: "Apr. 2022 - Jun 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut, voluptas sunt earum vero incidunt eos sed quibusdam natus. Doloribus dolore distinctio sunt quasi nostrum labore quae similique nemo neque.",
    },
    {
      title: "SoyHenry",
      time: "Oct. 2021 - March 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut, voluptas sunt earum vero incidunt eos sed quibusdam natus. Doloribus dolore distinctio sunt quasi nostrum labore quae similique nemo neque.",
    },
  ];
</script>

<section class="w-full">
  <h1 class="text-2xl font-semibold border-b-4 border-brand inline mr-auto">
    Experience
  </h1>

  <h3 class="mt-5">A summarise of my experience on programing.</h3>
  <ul class="timeline mx-auto mt-6 flex flex-col relative after:bg-txt/80">
    {#each sections as sec}
      <li class="relative after:bg-txt py-4 md:w-1/2">
        <div class="src-only ind bg-brand/40 before:bg-brand before:w-6 mt-4" />
        <div class="rounded-2xl bg-white p-4 mx-6 shadow-lg">
          <h4 class="text-xl font-semibold">{sec.title}</h4>
          <span class="font-medium text-sm">{sec.time}</span>
          <p class="mt-2 text-base">{sec.description}</p>
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
