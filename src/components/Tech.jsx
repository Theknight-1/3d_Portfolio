import React from 'react';
import { BallCanvas } from "./canvas"
import { technologies } from '../constant';
import { Link } from 'react-router-dom';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-5'>
      {technologies.map((technology, index) => (
        <Link to={technology.name} key={technology.name}>
          <div className='w-28 h-28' >
            <BallCanvas icon={technology.icon} name={technology.name} index={index} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Tech