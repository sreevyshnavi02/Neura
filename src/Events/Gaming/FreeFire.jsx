import React from 'react'
import { Link } from 'react-router-dom';
import {logo, blindCoding, freeFire} from '../import';
import {IndividualTitle} from '../../Components'

const FreeFire = () => {
  return (
    <div className='bg-white'>
        <div className='bg-black w-full z-10 backdrop-filter backdrop-blur-lg bg-opacity-[40%] '>
          <div className='max-w-7xl mx-auto flex px-6 py-3 items-center justify-between'>
            <div className='flex gap-5 items-center'>
                <img src={logo} className='w-9 h-10'/> 
                <p className='text-lg md:text-2xl text-white font-cinel'>NEURA 2K23</p>
            </div>
            <div className='flex gap-5 text-sm sm:text-xl'>
              <Link to='/'><button className='rounded-lg px-2 py-1 hover:bg-orange'>BACK</button></Link>
            </div>
          </div>
        </div>

        <div className='flex max-w-6xl h-auto flex-col items-center justify-start mt-8 gap-10 mx-2 sm:mx-auto'>
          <IndividualTitle text='FREE FIRE' />
          <div className='sm:flex'>
            <img src={freeFire} alt="" className='svg-hidden sm:w-96 sm:h-96'/>
            <div className='flex flex-col mx-2 text-left gap-2 '>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION FEE</span> : INR 200 </div>
              <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>PRIZE AMOUNT</span> : INR 3200 </div>
              <div>
                <p className='font-medium text-lg sm:text-xl'>RULES : </p>
                <ul className='flex flex-col gap-2 text-b ase sm:text-lg my-3'> 
                  <li>1. EACH TEAM SHOULD HAVE 4 MEMBERS. </li>
                  <li className='font-medium'>3. ALL PLAYERS ARE REQUESTED TO DOWNLOAD THE MAPS.  </li>
                  <li>4. IF ANY PLAYER IS FOUND USING ANY HACKS OR GAME BUGS, THEN THE WHOLE TEAM WILL BE DISQUALIFIED. </li>
                  <li>5. DECISION MADE BY THE CO-ORDINATORS WILL BE FINAL IN ALL ASPECTS. </li>
                  <li>6. WINNERS WILL BE BASED ON BOTH KILLS AND BOOYAH. </li>
                  <li>7. EMULATORS NOT ALLOWED. </li>
                </ul>
              </div>
              <div className='bg-backGround rounded-xl py-2 px-5 space-y-3'>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>REGISTRATION</span> : ONLY SPOT REGISTACTION</div>
                <div className='text-base sm:text-lg'><span className='font-medium text-lg sm:text-xl'>FOR FURTHER DETAILS CONTACT</span> : THIRU VIKRAM V - 8778807523</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FreeFire