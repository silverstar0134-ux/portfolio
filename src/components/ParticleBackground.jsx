import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: "#050816",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },

          color: {
            value: "#38bdf8",
          },

          opacity: {
            value: 0.2,
          },

          size: {
            value: { min: 1, max: 3 },
          },

          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },

          links: {
            enable: true,
            color: "#38bdf8",
            opacity: 0.2,
            distance: 150,
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;