import React from 'react'
import { logo, ptulogo } from '../import'
import {AboutCard} from '../index'

const AboutUs = () => {
  
  return (
    <div id='aboutus' className='scroll-mt-20'>
        <div className='flex flex-col gap-2 mb-4'>
          <div className='text-center text-lg sm:text-5xl font-semibold' >About Us</div>
          <AboutCard img={ptulogo} title='PUDUCHERRY TECHNOLOGICAL UNIVERSITY' desc= 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'/>
          <AboutCard img={ptulogo} title='DEPARTMENT OF INFORMTAION TECHNOLOGY' desc= 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'/>
          <AboutCard img={logo} title='NEURA' desc= 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'/>
        </div>
    </div>
  )
}

export default AboutUs