import React from "react";
import Image from "next/image";
import img1 from "../../../assests/Features.svg";
import img2 from "../../../assests/Events.svg";
import img3 from "../../../assests/Offers.svg";
import img4 from "../../../assests/Collaborations.svg";
import img5 from "../../../assests/Promotions.svg";
import img6 from "../../../assests/Announcements.svg";
import img7 from "../../../assests/Services.svg";
// import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const HeroSlider: React.FC = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="relative overflow-hidden w-full max-w-[1200px] mx-auto">
      <Marquee className="pt-10" pauseOnHover speed={20}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-auto h-[147px] p-4">
            <Image
              src={image}
              alt={`Feature ${index + 1}`}
              className="w-full h-full object-cover"
              width={600} // Optimized from 1000 to actual display size
              height={600} // Optimized from 1000 to actual display size
              priority={true}
              quality={85} // Slightly reduced quality for better performance
              placeholder="blur" // Add blur-up placeholder
              
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAABJRU5ErkJggg==" // Custom blur-up placeholder
            />
          </div>
        ))}
      </Marquee>

      {/* Left blur effect */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background/50 to-transparent z-10"
        aria-hidden="true"
      ></div>

      {/* Right blur effect */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background via-background/50 to-transparent z-10"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default HeroSlider;
