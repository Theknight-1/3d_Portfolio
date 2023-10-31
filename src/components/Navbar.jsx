import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style';
import { navLinks } from '../constant/index';
import { menu, close, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex justify-between items-center gap-3' onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="Logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            <span className='text-[#7ab94af8]'>Himanshu</span><span className='sm:block hidden'>The Knight</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px]
                font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[20px] h-[20px] object-contain cursor-pointer z-20' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? "hidden" : 'flex'} p-2 black-gradient absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none mr-5 flex gap-3'>
              {
                navLinks.map((link) => (
                  <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-mono font-medium cursor-pointer text-[16px] hover:underline`} 
                  onClick={() => {setActive(link.title);setToggle(!toggle)}}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
