// import Image from "next/image";
import React from "react";
interface HowItWorksCardsProps {
  // Assuming this is a URL or image path
  iconSrc: string; // Assuming this is a URL or image path
  children: React.ReactNode; // For JSX content inside the component
}

const HowItWorksCards: React.FC<HowItWorksCardsProps> = ({
  iconSrc,
  children,
}) => {
  return (
    <div className="relative shadow-xl h-full rounded-xl bg-white px-5 py-6 text-center">
      <img src={iconSrc} className="mx-auto pt-5" alt="icon" />
      {children}
    </div>
  );
};

export default HowItWorksCards;
