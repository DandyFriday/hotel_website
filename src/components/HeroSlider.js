import React from 'react';
//import swiper react component

import {Swiper, SwiperSlide } from 'swiper/react'; 
//import swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
//import required modules
import   {EffectFade, Autoplay}  from 'swiper';
//images
import img1 from  '../assets/img/heroSlider/1.jpg';
import img2 from  '../assets/img/heroSlider/2.jpg';
import img3 from  '../assets/img/heroSlider/3.jpg';

const slides = [
  {
    title: 'Your Luxury For Vacation',
    bg: img1,
    btnText: 'See Our Rooms',
  },
  {
    title: 'Your Luxury For Vacation',
    bg: img2,
    btnText: 'See Our Rooms',
  },
  {
    title: 'Your Luxury For Vacation',
    bg: img3,
    btnText: 'See Our Rooms',
  },
]
  const HeroSlider = () => {
    return (
     <Swiper
      modules={'EffectFade, Autoplay'} 
       effect={'fade'} 
       loop ={true} 
       autoplay ={{delay: 3000,
      disableOnInteraction: false,
     }}
     className='heroSlider h-[600px] lg:h-[860px]'>
      {slides.map((slide, index) => {
        //destructure slide
        const {title, bg, btnText} = slide
        return (
          <SwiperSlide className='h-full relative flex justify-center
          items-center ' key={index}>
            
           
              <div className='absolute top-0 w-full h-full'>
                <img className='object-cover h-full w-full'
                 src={bg} alt='' />               
            </div>
            {/*overlay */}
            <div className='w-full h-full bg-black/60 
             text-center text-white uppercase py-80 fixed tracking-[6px] mb-5'>
               Just Enjoy and Relax 
               <div className='text-[32px] tracking-[2px] max-w-[920px] 
               lg:text-[68px] leading-tight mb-6 mx-auto'>
                <h1>{title}</h1>
                <button className='btn btn-lg btn-primary mx-auto '>
                  {btnText}</button>
                </div>
                </div>
               
          </SwiperSlide>
        );
      })}
     </Swiper>
    );
  };
export default HeroSlider;