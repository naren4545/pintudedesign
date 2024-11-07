import React from 'react'

import logo from '../../assests/PinTude_Logo_v4_Transparent 1.png'
import Image from 'next/image';
import Logo from './ui/Logo';
import FooterLogo from './ui/FooterLogo';
export default function Footer() {

    const shareLinks = {
        facebook:
          "https://www.facebook.com/sharer/sharer.php?u=https://hellopintude.com?utm_source=facebook&utm_medium=social&utm_campaign=pre_launch",
        twitter:
          "https://twitter.com/intent/tweet?url=https://hellopintude.com?utm_source=twitter&utm_medium=social&utm_campaign=pre_launch&text=Check+out+PinTude!+Join+the+pre-launch+now!",
        instagram:
          "https://www.instagram.com/?url=https://hellopintude.com?utm_source=instagram&utm_medium=social&utm_campaign=pre_launch",
        linkedin:
          "https://www.linkedin.com/shareArticle?mini=true&url=https://hellopintude.com?utm_source=linkedin&utm_medium=social&utm_campaign=pre_launch",
        email:
          "mailto:social@pintude.co.in?subject=Join+PinTude+Pre-Launch&body=Check+out+PinTude:+https://hellopintude.com?utm_source=newsletter&utm_medium=email&utm_campaign=pre_launch",
        sms: "sms:?&body=Check+out+PinTude:+https://hellopintude.com?utm_source=sms&utm_medium=sms&utm_campaign=pre_launch",
        telegram:
          "https://telegram.me/share/url?url=https://hellopintude.com?utm_source=telegram&utm_medium=social&utm_campaign=pre_launch&text=Check+out+PinTude!+Join+the+pre-launch+now!",
      };

  return (
    <footer>
      <div className="max-w-[1327px] py-9 mx-auto ">

{/* <NewsletterSection/> */}


<div className="grid grid-cols-1 place-items-center px-4 pt-5 lg:place-items-start lg:grid-cols-7 gap-8 mt-10">
          
          <div className=" md:col-span-3 relative top-[12px]   ">
            <div className='relative'>
           

            <FooterLogo/>
<p className='pb-3 max-w-[368px] mx-auto lg:mx-0 '>Our mission is to help businesses establish an 
effortless online presence and connect with 
customers in their local area.</p>



</div>


          </div>

          
          

         
          <div className='max-w-[200px] w-full'>
          <h3 className=" text-xl font-semibold  mb-5">Quick Links</h3>
            <ul className="space-y-1 text-base font-light footer-ul">
              <li>
                <a href="#" className=" ">About</a>
              </li>
              <li>
                <a href="#" className=" ">How It Works</a>
              </li>
              <li>
                <a href="#" className=" ">Pricing</a>
              </li>
              <li>
                <a href="#" className=" ">Contact </a>
              </li>
            </ul>
          </div>

         
          <div className='max-w-[200px] w-full '>
            <h3 className=" text-xl font-semibold  mb-5">Resources</h3>
            <ul className="space-y-1 text-base font-light footer-ul">
              <li>
                <a href="#" className=" ">Support</a>
              </li>
              <li>
                <a href="#" className=" ">Careers</a>
              </li>
              <li>
                <a href="#" className=" ">Security</a>
              </li>
            </ul>
          </div>
          
          
          <div className='text-center lg:text-left lg:col-span-2 '>
          <h3 className=" text-xl font-semibold  mb-5">Follow Us:</h3>
<div className='flex'>
<a href='https://www.linkedin.com/company/pintude/about/' target='_blank' className='mr-3'><svg className='inline' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2850_1509)">
<circle cx="27" cy="27" r="20" fill="#13A8DA"/>
</g>
<path d="M20.6758 18.25C20.6755 18.9131 20.4117 19.5488 19.9427 20.0174C19.4736 20.486 18.8376 20.7491 18.1745 20.7488C17.5115 20.7484 16.8757 20.4847 16.4071 20.0157C15.9385 19.5466 15.6755 18.9106 15.6758 18.2475C15.6761 17.5845 15.9398 16.9487 16.4089 16.4801C16.878 16.0115 17.514 15.7484 18.177 15.7488C18.8401 15.7491 19.4758 16.0128 19.9444 16.4819C20.413 16.951 20.6761 17.587 20.6758 18.25ZM20.7508 22.6H15.7508V38.25H20.7508V22.6ZM28.6508 22.6H23.6758V38.25H28.6008V30.0375C28.6008 25.4625 34.5633 25.0375 34.5633 30.0375V38.25H39.5008V28.3375C39.5008 20.625 30.6758 20.9125 28.6008 24.7L28.6508 22.6Z" fill="white"/>
<defs>
<filter id="filter0_d_2850_1509" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2850_1509"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2850_1509"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2850_1509" result="shape"/>
</filter>
</defs>
</svg>
</a>
<a href='https://www.facebook.com/sharer/sharer.php?u=https://hellopintude.com?utm_source=facebook&utm_medium=social&utm_campaign=pre_launch' target='_blank' className='mr-3'><svg className='inline' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2850_1505)">
<circle cx="27" cy="27" r="20" fill="#13A8DA"/>
</g>
<path d="M29.5 28.875H32.625L33.875 23.875H29.5V21.375C29.5 20.0875 29.5 18.875 32 18.875H33.875V14.675C33.4675 14.6213 31.9287 14.5 30.3037 14.5C26.91 14.5 24.5 16.5712 24.5 20.375V23.875H20.75V28.875H24.5V39.5H29.5V28.875Z" fill="white"/>
<defs>
<filter id="filter0_d_2850_1505" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2850_1505"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2850_1505"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2850_1505" result="shape"/>
</filter>
</defs>
</svg>

</a>
<a href='https://twitter.com/intent/tweet?url=https://hellopintude.com?utm_source=twitter&utm_medium=social&utm_campaign=pre_launch&text=Check+out+PinTude!+Join+the+pre-launch+now!' target='_blank' className='mr-3'><svg className='inline' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_2850_1501)">
<circle cx="27" cy="27" r="20" fill="#13A8DA"/>
</g>
<path d="M40.0758 19.5C39.1133 19.9375 38.0758 20.225 37.0008 20.3625C38.1008 19.7 38.9508 18.65 39.3508 17.3875C38.3133 18.0125 37.1633 18.45 35.9508 18.7C34.9633 17.625 33.5758 17 32.0008 17C29.0633 17 26.6633 19.4 26.6633 22.3625C26.6633 22.7875 26.7133 23.2 26.8008 23.5875C22.3508 23.3625 18.3883 21.225 15.7508 17.9875C15.2883 18.775 15.0258 19.7 15.0258 20.675C15.0258 22.5375 15.9633 24.1875 17.4133 25.125C16.5258 25.125 15.7008 24.875 14.9758 24.5V24.5375C14.9758 27.1375 16.8258 29.3125 19.2758 29.8C18.4893 30.0162 17.6633 30.0461 16.8633 29.8875C17.2028 30.9531 17.8677 31.8855 18.7646 32.5537C19.6614 33.2218 20.7451 33.5921 21.8633 33.6125C19.9679 35.1131 17.6183 35.9242 15.2008 35.9125C14.7758 35.9125 14.3508 35.8875 13.9258 35.8375C16.3008 37.3625 19.1258 38.25 22.1508 38.25C32.0008 38.25 37.4133 30.075 37.4133 22.9875C37.4133 22.75 37.4133 22.525 37.4008 22.2875C38.4508 21.5375 39.3508 20.5875 40.0758 19.5Z" fill="white"/>
<defs>
<filter id="filter0_d_2850_1501" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2850_1501"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2850_1501"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2850_1501" result="shape"/>
</filter>
</defs>
</svg>

</a>

<a href='https://www.instagram.com/?url=https://hellopintude.com?utm_source=instagram&utm_medium=social&utm_campaign=pre_launch' target='_blank' className='mr-3'><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3025_1295)">
<circle cx="27" cy="27" r="20" fill="#13A8DA"/>
</g>
<path d="M26.9192 23.1338C24.8279 23.1338 23.1213 24.8404 23.1213 26.9317C23.1213 29.023 24.8279 30.7297 26.9192 30.7297C29.0104 30.7297 30.717 29.023 30.717 26.9317C30.717 24.8404 29.0104 23.1338 26.9192 23.1338ZM38.31 26.9317C38.31 25.359 38.3242 23.8005 38.2359 22.2306C38.1476 20.4071 37.7316 18.7888 36.3982 17.4554C35.062 16.1191 33.4465 15.706 31.6231 15.6177C30.0504 15.5293 28.4919 15.5436 26.922 15.5436C25.3493 15.5436 23.7908 15.5293 22.221 15.6177C20.3975 15.706 18.7792 16.122 17.4458 17.4554C16.1096 18.7916 15.6965 20.4071 15.6081 22.2306C15.5198 23.8033 15.5341 25.3618 15.5341 26.9317C15.5341 28.5016 15.5198 30.063 15.6081 31.6329C15.6965 33.4564 16.1124 35.0747 17.4458 36.4081C18.7821 37.7444 20.3975 38.1575 22.221 38.2458C23.7937 38.3342 25.3521 38.3199 26.922 38.3199C28.4947 38.3199 30.0532 38.3342 31.6231 38.2458C33.4465 38.1575 35.0648 37.7415 36.3982 36.4081C37.7344 35.0719 38.1476 33.4564 38.2359 31.6329C38.3271 30.063 38.31 28.5045 38.31 26.9317ZM26.9192 32.7754C23.6854 32.7754 21.0756 30.1656 21.0756 26.9317C21.0756 23.6979 23.6854 21.0881 26.9192 21.0881C30.1529 21.0881 32.7627 23.6979 32.7627 26.9317C32.7627 30.1656 30.1529 32.7754 26.9192 32.7754ZM33.0021 22.2135C32.247 22.2135 31.6373 21.6038 31.6373 20.8487C31.6373 20.0937 32.247 19.484 33.0021 19.484C33.7571 19.484 34.3668 20.0937 34.3668 20.8487C34.367 21.028 34.3319 21.2056 34.2634 21.3713C34.1949 21.537 34.0943 21.6875 33.9676 21.8143C33.8408 21.9411 33.6903 22.0416 33.5246 22.1101C33.3589 22.1786 33.1813 22.2137 33.0021 22.2135Z" fill="white"/>
<defs>
<filter id="filter0_d_3025_1295" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_3025_1295"/>
<feOffset/>
<feGaussianBlur stdDeviation="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3025_1295"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3025_1295" result="shape"/>
</filter>
</defs>
</svg>

</a>
</div>
</div>

        </div>
<div>


</div>

      </div>
      <div className=' bg-[#13A8DA] text-white'>
      <div className="py-6 flex items-center flex-col md:flex-row justify-between max-w-[1327px] mx-auto px-4 ">

<p className='text-base mb-0'>Copyright © 2024 Pintude, All Rights Reserved.</p>
                <p className='text-base mb-0'>Terms | Privacy</p>
              </div>
              </div>
    </footer>
  )
}
