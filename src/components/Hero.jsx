import React from 'react';
import { styles } from '../style';
import { motion } from 'framer-motion';
import Computers from './canvas/Computers';
import { SectioneWrapper } from '../hoc';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col items-center mt-5'>
          <div className='w-5 h-5 rounded-lg bg-[#7ab94af8]' />
          <div className='w-1 sm:h-80 h-40 green-pink-gradient' />
        </div>
        <div className='mt-5'>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#7ab94af8]'>Himanshu Saxena</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Hey I'm a Student currently pursuing my B.tech. <br className='sm:block hidden' /> Learing different technologies and Web Devlopment is one of them.
          </p>
        </div>
      </div>
      <Computers />
      <div className='absolute xs:bottom-10 botton-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[30px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev animate={{ y: [0, 24, 0] }} transition={{
              duration: 1.5,
              repeat: Infinity,
              repeateType: "loop"
            }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default SectioneWrapper(Hero, "home")