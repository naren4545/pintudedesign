import React from "react";
import img from '../../assests/rafiki.png'
import Image from "next/image";
import style from './CustomBullet.module.css'
export default function Section1() {
  return (
    <section id="about">
      <div className=" py-10 ">
<h2 className="font-bold text-5xl center border-b-[4px] w-fit mx-auto  border-[#F6830E]">About Pintude</h2>
      
      <p className="text-center text-2xl font-light max-w-[837px] pt-5 mx-auto font-m">Pintude empowers local businesses to effortlessly build an online presence and connect 
with nearby customers. Our easy-to-use platform helps showcase products and 
services without technical hassle or high costs.</p>
      <div className="  aboutImg py-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-[1327px] mx-auto ">
  <div className=" p-4 flex items-center"><Image src={img} alt="about" className="invisible"/></div>
  <div className=" col-span-1 lg:col-span-2 p-4 max-w-[759px] lg:ml-auto">
    <h3 className=" font-semibold text-[#E78B01] font-r text-5xl py-5">Our Mission</h3>
  
    <div className={`${style.custombullet} font-r`}>
<p>Empower businesses to establish an effortless online 
presence.</p>
<p>Make it easy for businesses to connect with local 
customers.</p>
<p>Enable entrepreneurs to showcase their products, 
services, and expertise.</p>
<p>Provide a platform that requires no technical skills or 
large budgets.</p>
</div>


  </div>
  </div>
</div>


<div className="grid grid-cols-1 lg:grid-cols-3 pt-10 gap-4">
  
  <div className=" col-span-1 lg:col-span-2 p-4 py-10 aboutConbg">
    

<h2 className="font-semibold text-[#E78B01] font-r text-5xl py-5">Our Core Values:</h2>


<div className={`${style.custombullet} font-r`}>
<p><span className="font-bold">Accessibility:</span> Technology should be easy to use for 
everyone.</p>
<p><span className="font-bold">Affordability:</span>  A one-time fee ensures cost-effectiveness 
for all businesses.</p>
<p><span className="font-bold">Community Reach:</span>  Helping businesses connect with 
their local community.</p>
<p><span className="font-bold">Growth Support:</span>  Equipping businesses with the tools 
they need to thrive.</p></div>
  </div>
  <div className=" p-4"><Image src={img} alt="about"/></div>
</div>

      </div>
    </section>
  );
}
