import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "rgba(127, 17, 224, .2)",
        //   },
        // },
        fpsLimit: 80,
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 0.5 } },
            bubble: {
              distance: 400,
              size: 4,
              duration: 0.3,
              opacity: 1,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        particles: {
          number: { value: 67, density: { enable: true, value_area: 800 } },
          color: { value: "#fff" },
          shape: {
            type: "star",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 11 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 10,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
