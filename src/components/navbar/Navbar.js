/* eslint-disable react/jsx-no-undef */
import React,{useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';


import {Link} from 'react-scroll';

const featureImages=[
  "../../assets/logo.jpg"
];

const Navbar = () => {
  const [nav, setNav]= useState(false)
  const handleClick=() => setNav(!nav)
  return (
    <div className='navbar'>
        <div className='container'>
        <div name='navbar' className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fff] text-black-300'>
        <div>
        <img src={featureImages[0]} style={{width:'50px'}} alt="" />
        </div>

       {/*Menu */}
        
          <ul className='hidden md:flex '>
            <li className='pr-4'><Link activeClass="active" to="home"  smooth={true} duration={500}>
          Home
        </Link></li>
            <li className='pr-4'><Link activeClass="active" to="about"  smooth={true} duration={500}>
          About
        </Link></li>
            <li className='pr-4'><Link activeClass="active" to="skills"  smooth={true} duration={500}>
            Skills
        </Link></li>
            <li className='pr-4'><Link activeClass="active" to="work"  smooth={true} duration={500}>
          Works
        </Link></li>
            <li className='pr-4'><Link activeClass="active" to="contact"  smooth={true} duration={500}>
          Contacts
        </Link></li>
          </ul>
         
    
      {/* Hamburger */}
    
   <div onClick={handleClick}className='md:hidden z-10'> 
     {!nav ? <FaBars/>: <FaTimes/>}
    </div>

    {/* Mobile Menu */}

  
          <ul className={!nav?'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="home"  smooth={true} duration={500}>
          Home
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}activeClass="active" to="about"  smooth={true} duration={500}>
          About
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}activeClass="active" to="skills"  smooth={true} duration={500}>
            Skills
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}activeClass="active" to="work"  smooth={true} duration={500}>
          Works
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick}activeClass="active" to="contact"  smooth={true} duration={500}>
          Contacts
        </Link></li>
          </ul>
        

    

    </div>
    </div>
    </div>
  )
       
    
}

export default Navbar