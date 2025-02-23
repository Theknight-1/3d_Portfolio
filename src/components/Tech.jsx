import { motion } from "framer-motion";
import { lazy, Suspense } from "react"; // For lazy loading
import { Link } from "react-router-dom";
import { technologies } from "../constant";
import { textVariant } from "../utils/motion";
import { styles } from "../style";
import { SectioneWrapper } from "../hoc";

// Lazy load BallCanvas
const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-5 mt-8">
        <Suspense
          fallback={
            <div className="flex flex-row flex-wrap justify-center gap-5">
              {technologies.map((_, index) => (
                <div
                  key={index}
                  className="w-28 h-28 rounded-full bg-gray-200 animate-pulse"
                />
              ))}
            </div>
          }
        >
          {technologies.map((technology, index) => (
            <Link
              to={`/tech/${technology.name.toLowerCase()}`}
              key={technology.name}
              className="focus:outline-none focus:ring-2 focus:ring-[#7ab94af8] rounded-full"
              aria-label={`Learn more about ${technology.name}`}
            >
              <div className="w-28 h-28 transition-transform duration-300 hover:scale-105">
                <BallCanvas
                  icon={technology.icon}
                  name={technology.name}
                  index={index}
                />
              </div>
            </Link>
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default SectioneWrapper(Tech, "tech");