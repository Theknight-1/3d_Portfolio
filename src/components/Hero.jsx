/* eslint-disable react/prop-types */
import { styles } from "../style";
import { motion } from "framer-motion";
import Computers from "./canvas/Computers";
import { BoxReveal } from "../hoc/BoxReveal";
import SectioneWrapper from "../hoc/SectioneWrapper"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 sm:px-16 px-6`}
      >
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-lg bg-[#7ab94af8]" />
          <div className="w-1 sm:h-80 h-40 green-pink-gradient" />
        </div>

        <div className="z-10">
          <BoxReveal duration={1} boxColor="#7ab94af8">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&rsquo;m{" "}
              <span className="text-[#7ab94af8]">Himanshu Saxena</span>
            </h1>
          </BoxReveal>
          <BoxReveal duration={1}>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Hey I&rsquo;m a Student currently pursuing my B.tech.{" "}
              <br className="sm:block hidden" />
              Learning different technologies and Web Development is one of them.
            </p>
          </BoxReveal>
        </div>
      </div>

      <div className="relative w-full h-[calc(100vh-200px)]">
        <Computers />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#work">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
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
