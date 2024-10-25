import React from "react";
import img from '../../assests/aboutImgp3.png'
import Image from "next/image";
import style from './CustomBullet.module.css'
export default function Section1() {
  return (
    <section id="about">
      <div className="max-w-[1327px] mx-auto p-4 py-10 ">
<h2 className="font-bold text-5xl">About Pintude</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
  <div className=" p-4"><Image src={img} alt="about"/></div>
  <div className=" col-span-1 lg:col-span-2 p-4">
    <h3 className="text-2xl font-bold text-[#E78B01] font-r">Empowering local businesses with a seamless online presence.</h3>
  
  <p className="text-2xl font-semibold font-r mb-6">At Pintude, our mission is simple: to help businesses establish an effortless 
online presence and connect with customers in their local area. We understand 
that running a business is challenging, so we built a platform that makes it easy 
for entrepreneurs and local businesses to showcase their products, services, 
and expertise without needing technical skills or a large budget.</p>

<h2 className="font-r font-extrabold text-3xl text-[#E78B01] pb-6">Our Core Values:</h2>


<div className={`${style.custombullet} font-r`}>
<p>We believe in making technology accessible and easy to use.</p>
<p>A one-time fee makes our platform cost-effective for all businesses.</p>
<p>Helping businesses reach the customers in their community.</p>
<p>Giving businesses the tools to grow and succeed.</p>
</div>
  </div>
  
</div>


      </div>
    </section>
  );
}
