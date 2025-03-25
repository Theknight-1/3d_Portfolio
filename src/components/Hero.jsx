/* eslint-disable react/prop-types */
import { styles } from "../style";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { BoxReveal } from "../hoc/BoxReveal";
import SectioneWrapper from "../hoc/SectioneWrapper";
import ErrorBoundary from "../components/ErrorBoundary";

// Lazy load the Computers component
const Computers = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto overflow-hidden"
      id="home"
    >
      {/* Main content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[80px] md:top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}
      >
        {/* Indicator line */}
        <div className="flex flex-col items-center mt-5 shrink-0">
          <div className="w-5 h-5 rounded-lg bg-[#7ab94af8]" />
          <div className="w-1 h-40 sm:h-80 green-pink-gradient" />
        </div>

        {/* Text content */}
        <div className="z-10">
          <BoxReveal duration={1} boxColor="#7ab94af8">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I’m{" "}
              <span className="text-[#7ab94af8]">Himanshu Saxena</span>
            </h1>
          </BoxReveal>
          <BoxReveal duration={1}>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I’m a Computer Engineering graduate and full-stack web developer skilled in{" "}
              <span className="font-semibold">MERN stack</span>,{" "}
              <span className="font-semibold">Three.js</span>, and{" "}
              <span className="font-semibold">PostgreSQL with Prisma ORM</span>.
              Explore my work below!
            </p>
          </BoxReveal>
        </div>
      </div>

      {/* Lazy-loaded 3D canvas with Error Boundary */}
      <div className="relative w-full h-[calc(100vh-200px)] md:h-[calc(100vh-240px)]">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-[#7ab94af8] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <ErrorBoundary>
            <Computers />
          </ErrorBoundary>
        </Suspense>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 xs:bottom-10 w-full flex justify-center items-center">
        <a href="#work" aria-label="Scroll to Work section">
          <div className="w-[30px] h-[56px] xs:w-[35px] xs:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectioneWrapper(Hero, "home");