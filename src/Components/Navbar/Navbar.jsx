import React, { useState } from "react";
import "./Navbar.css";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {IoMdContact} from 'react-icons/io'
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiFillHome />
      </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''} >
        <AiOutlineUser />
      </a>
      <a href='#experiance' onClick={() => setActiveNav('#experiance')} className={activeNav === '#' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href='#service'onClick={() => setActiveNav('#service')} className={activeNav === '#' ? 'active' : ''}>
        <RiServiceLine/>
      </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#' ? 'active' : ''}>
        <IoMdContact />
      </a>
    </nav>
  );
};

export default Navbar;
