import React, { useCallback, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";
import AchievementsSection from "./AchievementsSection";


const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });
import { loadSlim } from "tsparticles-slim";

const HeaderSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative lg:py-16 w-full select-none h-screen text-center z-10"
      
    >
      {/* Render particles only when the section is visible */}
      {isVisible && (
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 700,
                  },
                },
                color: { value: "#ffffff" },
                shape: {
                  type: ["image"],
                  image: [
                    {
                      src: "/part1.jpg",
                      width: 400,
                      height: 400,
                    },

                    {
                      src: "/part3.png", 
                      width: 700,
                      height: 700,
                    },
                    {
                      src: "/part5.png",
                      width: 500,
                      height: 500,
                    },
                    {
                      src: "/mask.png", 
                      width: 700,
                      height: 700,
                    },
                    {
                      src: "/binance.png", 
                      width: 600,
                      height: 600,
                    },
                    {
                      src: "/solid.png", 
                      width: 600,
                      height: 600,
                    },
                    {
                      src: "/bitcoin.png", 
                      width: 600,
                      height: 600,
                    },
                    {
                      src: "/gas.png", 
                      width: 1200,
                      height: 1200,
                    },
                    {
                      src: "/solona.png",
                      width: 900,
                      height: 900,
                    },
                    {
                      src: "/rust1.jpg", 
                      width: 600,
                      height: 600,
                    },
                    {
                      src: "/rust.png", 
                      width: 900,
                      height: 900,
                    },

                  ],
                },
                opacity: {
                  value: 0.8,
                  random: false,
                  anim: { enable: false },
                },
                size: {
                  value: 23,
                  random: true,
                  anim: { enable: false },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.9,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: "right",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 83.9,
                    size: 40,
                    duration: 3,
                    opacity: 0.9,
                    speed: 5
                  },
                  repulse: {
                    distance: 50,
                    duration: 2
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-12">

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Hemanth Kumar",
                1000,
                "FullStack Developer",
                1000,
                "Blockchain learner",
                1000,
                "",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {/* Optional description text */}
          </p>
         
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative flex justify-center items-center">
            <div className="ring absolute rounded-full w-[290px] h-[290px] bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="rounded-full bg-[#000000] w-[280px] h-[280px] relative">
              <Image
                src="/hemubg.png"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
                alt="Hemanth Kumar"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="">
        <AchievementsSection />
      </div>
    </section>
  );
};

export default HeaderSection;
