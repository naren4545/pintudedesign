import Image from "next/image";
import aboutImage1 from "../../assests/pana.svg";
import aboutImage2 from "../../assests/rafiki.png";
import styles from "./Section1.module.css";
import styles2 from './CustomBullet.module.css'
export default function Section1() {
  return (
    <section id="about" className="py-20">
      <div className=" mx-auto ">
        <h2 className="font-bold text-5xl text-center border-b-4 border-[#F6830E] w-fit mx-auto mb-5">
          About Pintude
        </h2>

        <p className="text-center text-2xl font-light max-w-3xl mx-auto mb-16">
          Pintude empowers local businesses to effortlessly build an online presence and connect with nearby customers. Our easy-to-use platform helps showcase products and services without technical hassle or high costs.
        </p>

        <div className={`lg:mb-20 mb-10 ${styles.aboutImg}`} py-10>
          <div className="grid lg:grid-cols-3 gap-8 items-center px-3 py-10 max-w-[1327px] mx-auto">
            <div className="lg:col-span-1">
              <Image src={aboutImage1} alt="About Pintude" className="w-full lg:hidden" />
            </div>
            <div className={`lg:col-span-2 lg:ml-auto lg:max-w-3xl lg:py-20  py-10 ${styles.mobBg}`}>
              <h3 className="font-semibold text-[#E78B01] text-5xl mb-6">Our Mission</h3>
              <ul className={`${styles.custombullet} space-y-4 font-r`}>
                {[
                  "Empower businesses to establish an effortless online presence.",
                  "Make it easy for businesses to connect with local customers.",
                  "Enable entrepreneurs to showcase their products, services, and expertise.",
                  "Provide a platform that requires no technical skills or large budgets."
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={`lg:py-20 py-10 ${styles.aboutImg2}`}>
          <div className="grid lg:grid-cols-3 gap-8 items-center max-w-[1327px] py-10 px-3 mx-auto">
            <div className={`lg:col-span-2 lg:max-w-3xl  py-10 ${styles.aboutConbg}`}>
              <h2 className="font-semibold text-[#E78B01] text-5xl mb-6">Our Core Values:</h2>
              <ul className={`${styles.custombullet} space-y-4 font-r`}>
                {[
                  { title: "Accessibility", description: "Technology should be easy to use for everyone." },
                  { title: "Affordability", description: "A one-time fee ensures cost-effectiveness for all businesses." },
                  { title: "Community Reach", description: "Helping businesses connect with their local community." },
                  { title: "Growth Support", description: "Equipping businesses with the tools they need to thrive." }
                ].map((item, index) => (
                  <li key={index}>
                    <span className="font-bold">{item.title}:</span> {item.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-1">
              <Image src={aboutImage2} alt="Core Values" className="w-full lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}