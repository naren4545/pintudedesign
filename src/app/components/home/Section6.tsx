import React from "react";
import img from "../../assests/amico.png";
import Image from "next/image";
// import { FaQ } from 'react-icons/fa6'
import FAQAccordion from "./ui/FAQaccordian";
export default function Section6() {
  return (
    <section className="" id="faq">
      <div className="max-w-[1327px] mx-auto p-4 py-10  ">
        <h2 className="font-bold text-4xl text-center">
          Got Questions? We’ve Got Answers!
        </h2>
        <p className="max-w-[772px] font-normal mx-auto text-2xl text-center mb-5">
          Find answers to common questions about PinTude, our services, and how
          we can help your business grow.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className=" p-4">
            <Image src={img} alt="about" />
          </div>
          <div className=" col-span-1 lg:col-span-2 p-4">
            <FAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
