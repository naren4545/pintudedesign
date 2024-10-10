

import React from 'react';
import img1 from '../../../assests/Group 39.svg'
import img2 from '../../../assests/Group 33.svg'
import img3 from '../../../assests/Group 34.svg'
import img4 from '../../../assests/Group 35.png'
import img5 from '../../../assests/Group 36.png'
import img6 from '../../../assests/Group 37.png'
import img7 from '../../../assests/Group 38.png'
import Image from 'next/image';
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
     
      <div className={"flex w-[calc(300px*14)] items-end animate-marquee pt-10"}>
     

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
