import React from "react";
import InquiryForm from "./ui/InquiryForm ";
import PopUPButton from "./ui/PopUPButton";
import style from "./CustomBullet.module.css";
export default function Section5() {
  return (
    <section className={style.bgblueimg}>
      <div className="max-w-[1327px] mx-auto p-4 py-10 text-white ">
        <h2 className="text-5xl font-bold text-center">
          Get in Touch with Us!
        </h2>
        <p className="max-w-[900px] mx-auto text-center pb-10">
          Have questions or need assistance? We're here to help! Reach out to us
          for support, inquiries, or feedback.
        </p>

        <div className="flex flex-col lg:flex-row items-center max-w-[930px] mx-auto">
          <div className="w-full lg:w-1/2 p-4 ">
            <div className="flex gap-2">
              <p>
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2850_1468)">
                    <circle cx="33" cy="34" r="30" fill="white" />
                  </g>
                  <path
                    d="M42.6401 38.3467L39.2534 37.96C38.8552 37.9132 38.4515 37.9573 38.0728 38.0889C37.6941 38.2206 37.3501 38.4363 37.0667 38.72L34.6134 41.1733C30.8286 39.2479 27.7521 36.1715 25.8267 32.3867L28.2934 29.92C28.8667 29.3467 29.1467 28.5467 29.0534 27.7333L28.6667 24.3733C28.5914 23.7228 28.2793 23.1227 27.79 22.6875C27.3007 22.2522 26.6683 22.0123 26.0134 22.0133H23.7067C22.2001 22.0133 20.9467 23.2667 21.0401 24.7733C21.7467 36.16 30.8534 45.2533 42.2267 45.96C43.7334 46.0533 44.9867 44.8 44.9867 43.2933V40.9867C45.0001 39.64 43.9867 38.5067 42.6401 38.3467Z"
                    fill="#13A8DA"
                  />
                  <defs>
                    <filter
                      id="filter0_d_2850_1468"
                      x="0"
                      y="0"
                      width="72"
                      height="72"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="3" dy="2" />
                      <feGaussianBlur stdDeviation="3" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2850_1468"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2850_1468"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </p>
              <p className="text-3xl font-normal text-black">
                Phone number<br></br>
                <a
                  href="tel:+91 82373 58619"
                  className="text-2xl lg:hidden inline font-semibold text-white"
                >
                  +91 82373 58619
                </a>
                <PopUPButton className="text-2xl cursor-pointer hidden lg:inline  font-semibold text-white">
                  +91 82373 58619
                </PopUPButton>
              </p>
            </div>

            <div className="flex gap-2">
              <p>
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2850_1462)">
                    <circle cx="33" cy="34" r="30" fill="white" />
                    <path
                      d="M43.666 23.3333H22.3327C20.866 23.3333 19.666 24.5333 19.666 26V42C19.666 43.4667 20.866 44.6667 22.3327 44.6667H43.666C45.1327 44.6667 46.3327 43.4667 46.3327 42V26C46.3327 24.5333 45.1327 23.3333 43.666 23.3333ZM43.1327 29L34.4127 34.4533C33.546 35 32.4527 35 31.586 34.4533L22.866 29C22.7323 28.925 22.6152 28.8236 22.5219 28.7019C22.4285 28.5803 22.3608 28.441 22.3228 28.2925C22.2848 28.144 22.2774 27.9893 22.3009 27.8378C22.3244 27.6862 22.3785 27.5411 22.4597 27.4111C22.541 27.2811 22.6478 27.1689 22.7737 27.0813C22.8995 26.9938 23.0418 26.9327 23.192 26.9017C23.3422 26.8708 23.4971 26.8706 23.6473 26.9013C23.7975 26.9319 23.94 26.9927 24.066 27.08L32.9994 32.6667L41.9327 27.08C42.0587 26.9927 42.2012 26.9319 42.3514 26.9013C42.5016 26.8706 42.6565 26.8708 42.8067 26.9017C42.9569 26.9327 43.0992 26.9938 43.225 27.0813C43.3509 27.1689 43.4577 27.2811 43.539 27.4111C43.6202 27.5411 43.6743 27.6862 43.6978 27.8378C43.7213 27.9893 43.7139 28.144 43.6759 28.2925C43.6379 28.441 43.5702 28.5803 43.4768 28.7019C43.3835 28.8236 43.2664 28.925 43.1327 29Z"
                      fill="#13A8DA"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_2850_1462"
                      x="0"
                      y="0"
                      width="72"
                      height="72"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="3" dy="2" />
                      <feGaussianBlur stdDeviation="3" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2850_1462"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2850_1462"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </p>
              <p className="text-3xl font-normal text-black">
                Email Address
                <br></br>
                <a
                  href="mailto:social@pintude.co.in"
                  className="text-2xl font-semibold text-white"
                >
                  social@pintude.co.in
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2  p-4">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
