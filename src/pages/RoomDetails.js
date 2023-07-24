import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';

import img1 from '../assets/img/rooms/1-lg.png'
//components
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
//scroll top components
import ScrollToTop from '../components/ScrollToTop';
// contact
import { RoomContext } from '../context/RoomContext';
//icons
import { FaCheck } from 'react-icons/fa';

const RoomDetails = () => {
  const {rooms} = useContext (RoomContext)
  const {id} = useParams();
 
  //get room
  const room = rooms.find(room => { 
    return room.id === Number(id);
  });
  //destructure room
//const {name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <ScrollToTop />
    {/*banner */}
    <div className='bg-room bg-cover h-[560px] relative flex justify-center items-center'>
      {/*overlay */}
      <div className='absolute w-full h-full bg-black/60 ' ></div>
      {/*title */}
      <h1 className='text-[34px] tracking-[2px] max-w-[920px] 
        lg:text-[68px] mb-6 mx-auto text-white z-30 font-primary tetx-center'>
        Luxury Room Details         
      </h1>
    </div>
    <div className=' container mx-auto '>
      <div className=' flex flex-col lg:flex-row h-full py-24'>
        {/*left */}
        <div className='w-full h-full lg:w-[60%] px-6 bg-yellow-100'>
          <h3 className='text-[38px]'>Luxury Room</h3>
        <p>Lorem ipsum dolor, sit amet consectur adipissicing elit. Atque
          error corrupti,ratione nemo dolor, magni blanditiis dicta
          aliquid
          totam libere odit dolorem, natus provident ipsam fugiat autem.
          Eum,
          laudantium consectetur? 
          </p>
          <img src={img1} alt='' /> 
         {/*facilities */}
         <div className='mt-12'>
          <h3 className='h3 mb-3'>Room facilities</h3>
          <p className='mb-12'>  Lorem ipsum dolor, sit amet consectur adipissicing elit.
            porro officiis voluptas mollitia repellendus sad iure a ea vero 
            atque repudiandea! Necessitatibus facere laborum nam error blanditiis 
            culpa reprehenderit quibusdam quis?
          </p>
          {/*grid */}
         {/* <div>{facilities.map ((item, index) => {

          // destructure item
          const {name, icon} = items;
            return(
              const {name, icon} =item;
          return (
            <div key={index}>
              <div>{icon}</div>
            </div>

            );

          })};*/}
          {/*</div>*/}
          
          
         </div>
        </div>
        {/*right */}
        <div className='w-full h-full lg:w-[40%]'>
          {/*reservation */}
          <div className='py-8 px-6 bg-accent/25 mb-12'>
            <div className='flex flex-col space-y-4 mb-4' >
              <h3>Your Reservation</h3>
              <div className='h-[60px]'>
                <CheckIn />
              </div>
              <div className='h-[60px]'>
                <CheckOut/>
              </div>
              <div className='h-[60px]'>
                <AdultsDropdown />
                </div>         
             
                <div className='h-[60px]'>
                  <KidsDropdown />
              </div>
              <button className='btn btn-lg btn-primary w-full'>
                book now for ${250}
                </button>
            </div>
          </div>
          {/* rules */}
          <div>
            <h3>
              Hotel Rules
            </h3>
            <p className='mb-6'>
            Lorem ipsum dolor, sit amet consectur adipissicing elit.
            Nihil
            nulla itaque laboriosam
            </p>
            <ul className='flex flex-col gap-y-4'>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent' />
                Check in: 3: 00 PM - 9: 00 PM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent' />
                Check out:  10: 30 AM
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent' />
              No Pets
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent' />
                No Smoking
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent' />
                No Fighting within the hotel premises
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent' />
                Only Decent Dressing allowed 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default RoomDetails;
