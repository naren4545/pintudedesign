// import Image from 'next/image'; // Make sure to import the Image component
import React from "react";
interface CustomSectionProps {
  children: React.ReactNode; // Define prop types
  heading: string;
  para: string;
  opp: boolean;
}

const CustomSection: React.FC<CustomSectionProps> = ({
  children,
  heading,
  para,
  opp = false,
}) => {
  return (
    <div className="py-4 ">
      <div
        className={`flex bg-[#F1F8FA] rounded-lg flex-col md:flex-row items-center gap-4 p-4 max-w-[900px]  ${
          opp ? "lg:ml-auto " : "lg:mr-auto"
        } `}
      >
        {/* Left Section - Image */}
        <div
          className={`w-full lg:w-[25%] ${
            opp ? "lg:order-2 order-1 lg:text-right text-left" : ""
          }`}
        >
          {children}
        </div>

        {/* Right Section - Text */}
        <div
          className={`w-full lg:w-[75%]   text-left ${
            opp ? "lg:order-1 lg:pl-6  pl-0 order-2 " : ""
          }`}
        >
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="mt-2 text-xl ">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
