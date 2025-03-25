import { Tilt } from "react-tilt";
import { SectioneWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../style";
import { live_logo } from "../assets";
import { projects } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

// Initialize Cloudinary
const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_CLOUD_NAME } });

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const sampleImage = cld
    .image(image) // Replace with your uploaded image's public ID
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));

  const githubImg = cld
    .image('Portfolio/ol7jhgqalu3xj93ccmxb') // Replace with your uploaded image's public ID
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()));


  return (
    <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-4 rounded-2xl w-full sm:w-[360px] h-full group"
      >
        <div className="relative w-full h-[190px] overflow-hidden">
          <AdvancedImage
            cldImg={sampleImage}
            alt={`${name} project screenshot`}
            loading="lazy"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex justify-between items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              aria-label={`View live demo of ${name}`}
            >
              <img
                src={live_logo}
                alt="Live demo link"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              aria-label={`View source code of ${name}`}
            >
              <AdvancedImage
                cldImg={githubImg}
                alt="GitHub source code link"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="py-10">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects showcase my skills in{" "}
          <strong>MERN stack</strong>, <strong>Three.js</strong>, and{" "}
          <strong>PostgreSQL with Prisma ORM</strong>. Each includes a brief
          description, live demos, and code repositories, reflecting my ability
          to solve complex problems and work with modern technologies.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectioneWrapper(Works, "work");