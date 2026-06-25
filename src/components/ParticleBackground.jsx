import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

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

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#38bdf8",
          },

          opacity: {
            value: 0.2,
          },

          size: {
            value: 3,
          },

          move: {
            enable: true,
            speed: 1,
          },

          links: {
            enable: true,
            color: "#38bdf8",
            opacity: 0.2,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;