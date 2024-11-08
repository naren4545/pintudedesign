import Image from 'next/image';
import hero from '../../assests/heroImgp3.png';
import React, { memo } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import HeroSlider with loading=lazy
const HeroSlider = dynamic(() => import('./ui/HeroSlider'), {
  ssr: true, // Only if HeroSlider relies on browser APIs
});

// Memoize the hero content to prevent unnecessary re-renders
const HeroContent = memo(() => (
  <div className='hero-content max-w-[724px]'>
    <h1 className='font-m pt-6 text-[40px] leading-[50px] font-bold mb-5 text-[#F6830E]'>
      Your Local Business, <br />
      Digitally Connected
    </h1>
    <p className='text-[#F6830E] text-2xl'>
      Reach new customers and grow your brand with a personalized online
      presence. Build a personalized profile, showcase your products,
      and let customers find you effortlessly.
    </p>
    <HeroSlider />
  </div>
));

HeroContent.displayName = 'HeroContent';

export default function HeroSection() {
  return (
    <section
      className='bg-[linear-gradient(180deg,#FFFFFF_82.34%,#13A8DA_107%)] lg:bg-[linear-gradient(180deg,#FFFFFF_8.34%,#13A8DA_100%)]' >
    
      <div className='max-w-[1327px] mx-auto p-4'>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-[60%] w-full lg:order-1 order-2'>
            <HeroContent />
          </div>
          <div className='lg:w-[40%] w-full lg:order-2 order-1'>
            <Image
              src={hero}
              alt="Local business digital connection hero image"
              className='w-full object-cover'
              width={600}  // Optimized from 1000 to actual display size
              height={600} // Optimized from 1000 to actual display size
              priority={true}
              quality={85}    // Slightly reduced quality for better performance
              placeholder="blur" // Add blur-up placeholder
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAABJRU5ErkJggg==" // Custom blur-up placeholder
            />
          </div>
        </div>
      </div>
    </section>
  );
}