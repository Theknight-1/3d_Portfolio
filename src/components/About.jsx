/* eslint-disable react-refresh/only-export-components */
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from '../constant';
import { fadeIn, textVariant } from '../utils/motion';
import { SectioneWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={
          {
            max: 45,
            scale: 1,
            speed: 450
          }
        } className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:transition-all duration-1000 hover:bg-gradient-to-t to-blue/10 via-black/10 from-violet-800 bg-size-200 bg-pos-0 hover:bg-pos-100'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Software developers use programming and design knowledge to build software that meets the needs of users. Typically, they will meet with a client who has a need for software to be developed, and then will build, test and deploy that software based on the specifications they have received.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectioneWrapper(About, "about")