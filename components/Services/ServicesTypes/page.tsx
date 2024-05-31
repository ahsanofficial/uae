import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import icon1 from "../../../public/services/servicestypes/Group 195.png";
import icon2 from "../../../public/services/servicestypes/Group 196.png";
import icon3 from "../../../public/services/servicestypes/Group 197.png";
import icon4 from "../../../public/services/servicestypes/Group 198.png";

export const ServicesTypes = () => {
  return (
    <div className={`${styles.main} flex flex-col md:flex-row justify-center items-center sm:mt-16 md:mt-20 mb-16`}>
      <div className={`w-full md:w-1/2 ${styles.container}`}>
        <h2 className="font-brfirma text-3xl font-medium leading-tight text-center">
          Types of Mainland Business Setups in the{" "}
          <span className="text-red-600 font-brfirma text-4xl font-medium leading-tight text-center">
            UAE
          </span>
        </h2>
        <p className="font-brfirma text-base font-medium leading-6 text-center mt-4 mb-8 ">
          The types of company formation in Dubai mainland that you might choose
          when creating a business may fall into one of the following
          categories:
        </p>
        <div className="flex flex-col space-y-8">
          <div className={`${styles.box} flex justify-start relative right-40`}>
            <div className={`${styles.boxIn} flex  flex-row justify-between items-center gap-8 border pr-8 pl-4 py-2 rounded-md`}>
              <div className={`${styles.text} w-7/10`}>
                <h3 className="text-lg font-normal leading-9 text-left text-gray-600 mb-2">
                  Limited Liability Companies (LLC)
                </h3>
                <p className="text-base font-medium leading-6 text-left">
                  A Limited Liability Company is one of the most popular company
                  structures in the UAE. It provides limited liability to its
                  shareholders, which means that their personal assets are
                  safeguarded from the company's liabilities.
                </p>
                <a href="#" className="text-red-600">
                  Read more
                </a>
              </div>
              <div className={`w-3/5 ${styles.icon}`}>
                <Image src={icon1} alt="" className="w-full" />
              </div>
            </div>
            <div></div>
          </div>
          <div className={`${styles.box} ${styles.boxIn} flex flex-row relative lg:left-40 justify-between items-center gap-8 border pr-8 pl-4 py-2 rounded-md`}>
            <div className={`${styles.text} w-7/10`}>
              <h3 className="text-lg font-normal leading-9 text-left text-gray-600 mb-2">
                Sole proprietorship
              </h3>
              <p className="text-base font-medium leading-6 text-left">
                A sole proprietorship is the simplest type of business
                organization in which a single person owns and operates the
                business. The proprietor has unlimited liability, which means
                they are personally liable for all of the...
              </p>
              <a href="#" className="text-red-600">
                Read more
              </a>
            </div>
            <div className={`w-3/5 ${styles.icon}`}>
              <Image src={icon2} alt="" className="w-full" />
            </div>
          </div>
          <div className={`${styles.boxIn} ${styles.box} flex  flex-row lg:right-40 relative justify-between items-center gap-8 border pr-8 pl-4 py-2 rounded-md`}>
            <div className={`${styles.text} w-7/10`}>
              <h3 className="text-lg font-normal leading-9 text-left text-gray-600 mb-2">
                Civil Company
              </h3>
              <p className="text-base font-medium leading-6 text-left">
                A Civil Company consists of two or more individuals or entities
                who pool their resources and expertise to carry out a business
                activity. Each partner shares profits and losses in accordance
                with the conditions of their agreement...
              </p>
              <a href="#" className="text-red-600">
                Read more
              </a>
            </div>
            <div className={`w-3/5 ${styles.icon}`}>
              <Image src={icon3} alt="" className="w-full" />
            </div>
          </div>
          <div className={`${styles.box} ${styles.boxIn} flex flex-row relative lg:left-40 justify-between items-center gap-8 border pr-8 pl-4 py-2 rounded-md`}>
            <div className={`${styles.text} w-7/10`}>
              <h3 className="text-lg font-normal leading-9 text-left text-gray-600 mb-2">
                Civil Company
              </h3>
              <p className="text-base font-medium leading-6 text-left">
                A Civil Company consists of two or more individuals or entities
                who pool their resources and expertise to carry out a business
                activity. Each partner shares profits and losses in accordance
                with the conditions of their agreement...
              </p>
              <a href="#" className="text-red-600">
                Read more
              </a>
            </div>
            <div className={`w-3/5 ${styles.icon}`}>
              <Image src={icon4} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
