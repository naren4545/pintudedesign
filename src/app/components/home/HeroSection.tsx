import Image from 'next/image';
import { CardItem, CardBody, CardContainer } from '@/components/ui/3d-card';
import hero from '../../assests/heroImgp3.png';
import React from 'react';
import HeroSlider from './ui/HeroSlider';
import style from './CustomBullet.module.css';

export default function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 8.34%, #13A8DA 100%)"
      }}
      className={style.herosec}
    >
      <div className='max-w-[1327px] mx-auto p-4'>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-[60%] w-full lg:order-1 order-2'>
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
          </div>
          <div className='lg:w-[40%] w-full lg:order-2 order-1 '>
            <CardContainer className='h-full top-0'>
              <CardBody>
                <CardItem
                  translateX={-20}
                  translateY={20}
                  translateZ={50}
                  rotateX={10}
                  rotateY={10}
                >
                  <Image src={hero} alt="hero" className='w-full object-cover'   />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </section>
  );
}