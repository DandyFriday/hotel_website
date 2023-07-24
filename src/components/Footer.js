import React from 'react';
//logo
import LogoWhite from '../assets/img/logo-white.svg';
import LogoDark from '../assets/img/logo-dark.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12 '>
      <div className='container mx-auto text-white flex justify-between  '>
       {/*logo */}
       <a href='/'>
       <img src={LogoWhite} alt='' /> 
       </a>
       Copyright &copy;2023. All rights reserved.<br/>
       Engr. George Dandy
      </div>
    </footer>
  );
};

export default Footer;
