

import React from 'react';
import img1 from '../../../assests/Features.svg'
import img2 from '../../../assests/Events.svg'
import img3 from '../../../assests/Offers.svg'
import img4 from '../../../assests/Collaborations.svg'
import img5 from '../../../assests/Promotions.svg'
import img6 from '../../../assests/Announcements.svg'
import img7 from '../../../assests/Services.svg'
import Image from 'next/image';
import style  from './HeroSlider.module.css';
const HeroSlider: React.FC = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ];

  return (
    <div className="relative overflow-hidden w-full max-w-[1200px] mx-auto">
     
      <div className={`flex w-[calc(300px*14)] items-end ${style.animatemarquee} pt-10`}>
     

        {/* Double the array to create a seamless loop */}
        {[...images, ...images].map((image, index) => (
          <div key={index} className="flex-shrink-0 w-auto h-[147px] p-4">
            <Image src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
