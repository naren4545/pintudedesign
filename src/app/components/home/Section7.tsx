import React from 'react'
import img from '../../assests/Group 406.png'
import Image from 'next/image'
import NotifyMeForm from './ui/NotifyMeForm'
export default function Section7() {
  return (
    <section className="bg-blueimg2">
      <div className="max-w-[1327px] mx-auto p-4 py-10 text-white ">
      <div className="flex flex-col lg:flex-row items-center  mx-auto">
      <div className="w-full lg:w-1/2 p-4 ">
<Image src={img} alt="iphone"/>
      </div>

      <div className="w-full lg:w-1/2 p-4 text-center">
<h3 className='text-3xl font-medium pb-20'>The PinTude app for Android and iOS are 
launching soon. Seamless business discovery 
and interaction, right in your pocket!</h3>


<p className='text-2xl font-medium'>Want to be the first to know when our app 
launch? Click below and we'll notify 
you as soon as they're available.</p>

<NotifyMeForm/>
</div>
      </div>
    </div>
    </section>
  )
}
