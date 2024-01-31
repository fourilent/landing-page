<script lang="ts">
  import Particles, { particlesInit } from "@tsparticles/svelte";
  import { loadSlim } from "@tsparticles/slim";
  import { onMount } from "svelte";

  const particlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: -99,
    },
    particles: {
      number: {
        value: 100,
      },
      opacity: {
        value: {
          min: 0,
          max: 1,
        },
        animation: {
          enable: true,
          speed: 2.5,
        },
      },
      size: {
        value: 2,
        random: {
          enable: true,
        },
      },
    },
  };

  void particlesInit(async (engine) => {
    await loadSlim(engine);
  });

  let ParticlesComponent: typeof Particles;

  onMount(async () => {
    const module = await import("@tsparticles/svelte");
    ParticlesComponent = module.default;
  });
</script>

<svelte:component
  this={ParticlesComponent}
  id="tsparticles"
  options={particlesConfig}
/>
