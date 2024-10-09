import Image from 'next/image'
import React from 'react'
import hero from '../../assests/Group 373.png'
import icons from '../../assests/Frame 1.png'
import HeroSlider from './ui/HeroSlider'
export default function HeroSection() {
  return (
    <section  style={{
        background: "linear-gradient(180deg, #FFFFFF 8.34%, #13A8DA 100%)"
      }} className='hero-sec'>
        <div className='max-w-[1327px] mx-auto p-4 '>
<div className='flex flex-col lg:flex-row'>

    <div className='lg:w-[60%] w-full lg:order-1 order-2'>
<div className='hero-content max-w-[724px]'>
    <h1 className='font-m pt-6 text-[40px] leading-[50px] font-bold mb-5 text-[#F6830E]'>Your Local Business, <br/>
    Digitally Connected</h1>
    <p className=' text-[#F6830E] text-2xl'>Reach new customers and grow your brand with a 
personalized online presence. Build a personalized profile, 
showcase your products, and let customers find you effortlessly.</p>
{/* <Image className='mt-16' src={icons} alt='icons'/> */}
<HeroSlider/>

</div>

    </div>
    <div className='lg:w-[40%] w-full lg:order-2 order-1'>
        <Image src={hero} alt='hero'/>
    </div>
</div>

        </div>
      
    </section>
  )
}
