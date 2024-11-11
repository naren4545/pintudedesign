import React from "react";
import style from "./CustomBullet.module.css";
export default function Section4() {
  return (
    <section id="pricing" className="py-10">
      <div className=" bg-[#13A8DA] text-white py-10">
        <div className="max-w-[1327px] mx-auto">
          <h2 className="text-5xl font-m font-bold text-center mb-3">
            Our Pricing
          </h2>

          <p className="text-2xl pb-4 max-w-[928px] mx-auto font-m font-light text-center">
            The benefits of going digital with Pintude provide excellent value,
            empowering businesses to grow and succeed in the digital space.
          </p>
          <div
            className={`${style.custombullet1} flex  flex-col px-3 md:flex-row gap-7 font-medium py-7`}
          >
            <p>
              For this minimal investment, you can take your business digital,
              establish a strong online presence, and attract more customers.{" "}
            </p>
            <p>
              The benefits far outweigh the cost, making it an excellent value
              for businesses looking to expand their reach in the digital space.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-white text-black py-10">
        <div className="max-w-[1327px] mx-auto p-4">
          <div className="max-w-[1068px] mx-auto shadow-xl bg-white py-10 px-7 mt-[-79px] rounded-xl">
            <div className="grid md:grid-cols-2 gap-5 max-w-[906px] mx-auto py-10">
              <div className="max-w-[246px]">
                <p className="text-2xl">For just</p>
                <p className="text-8xl font-bold">₹500</p>
                <p className="text-2xl text-right">a year</p>

                <div className="pt-9 text-center">
                  <a
                    href=""
                    className="mx-auto text-2xl font-bold shadow-[0_8px_15px_rgba(234,152,15,0.3)]  text-white  bg-[#E78B01] py-6 px-8 "
                  >
                    Signup Now
                  </a>
                </div>
              </div>
              <div className="md:pt-0 pt-10">
                <div
                  className={
                    "custom-bullet2 font-medium max-w-[345px] max-auto " +
                    style.custombullet2
                  }
                >
                  <p>Simple, Transparent Pricing for Every Business </p>
                  <p>
                    Get listed today, enjoy all the benefits of our platform
                    with one simple, affordable subscription.
                  </p>
                  <p>
                    We accept UPI payments, ensuring a quick and hassle-free
                    transaction process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
