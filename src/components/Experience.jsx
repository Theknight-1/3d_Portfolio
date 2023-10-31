import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import {styles} from "../style"
import {experiences} from '../constant'
import {SectioneWrapper} from '../hoc'
import { textVariant } from '../utils/motion';


const ExperienceCard = ({experienc})=>{
  return (
    <VerticalTimelineElement contentStyle={{background:'#1d4936', color:"#fff"}} contentArrowStyle={{borderRight:'7px solid #232631'}} date={experienc.date} iconStyle={{background:experienc.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experienc.icon} alt={experienc.company_name} className='w-[80%] h-[80%] object-contain tex-center'/>
      </div>
    }>
      <div>
        <h3 className='text-black text-[24px] font-bold'>
          {experienc.title}
        </h3>
        <p className='text-[18px] font-semibold' style={{margin:0}}>
          {experienc.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          experienc.points.map((point,index)=>(
            <li key={`experienc.point-${index}`}
             className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
          ))
        }
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far?</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            experiences.map((experience, index)=>(
              <ExperienceCard key={index} experienc={experience}/>
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectioneWrapper(Experience, "experience")