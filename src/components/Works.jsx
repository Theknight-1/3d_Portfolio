
import { Tilt } from 'react-tilt'
import { SectioneWrapper } from '../hoc'
import { motion } from "framer-motion"
import { styles } from '../style'
import { live_logo } from '../assets'
import { projects } from '../constant'
import { fadeIn, textVariant } from '../utils/motion'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react'


// Initialize Cloudinary
const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_CLOUD_NAME } }); // Replace 'dp09hey5j' with your actual Cloudinary cloud name

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

  console.log(sampleImage, "Image form cloudinary");


  return (
    <>
      <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[200px]'>
            <AdvancedImage
              cldImg={sampleImage}
              alt='project_image'
              loading='lazy'
              className='w-full h-full object-contain rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-between card-img_hover'>
              <div
                onClick={() => window.open(live_link, "_blank")}
                className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img
                  src={live_logo}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <AdvancedImage
                  cldImg={githubImg}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description.slice(0, 300) + "..."}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag, i) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectioneWrapper(Works, "work")