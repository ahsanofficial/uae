import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import img from "../../../public/services/servicesbenefits/Rectangle 183.png";

export const ServicesBenefits = () => {
  return (
    <div className="flex sm:flex-col w-full items-center px-6">
      <div className={`${styles.main} sm:py-4 lg:py-4`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.text} sm:px-4 lg:px-4`}>
            <h2 className={`${styles.heading} font-brfirma  md:text-4xl  font-medium leading-tight text-left mb-4`}>
              <span className="text-red-600">Benefits</span> of forming a
              company on the UAE mainland
            </h2>


            <ul className={`${styles.ul} list-disc pl-10 font-brfirma text-lg font-medium leading-6 text-left`}>

              <li className=" mb-4">
                Commercial space is available for lease in any area.
              </li>
              <li className=" mb-4">
                Capability to conduct a variety of business operations.
              </li>
              <li className=" mb-4">
                100% foreign ownership, with the flexibility to trade within the
                UAE.
              </li>
              <li className=" mb-4">There are no limits on currencies.</li>
              <li className=" mb-4">Processing work visas is simple.</li>
              <li className=" mb-4">
                Advantage of filing a proposal for government employment.
              </li>
              <li className=" mb-4">Easy to open a corporate bank account.</li>
            </ul>
          </div>
          <div
            className={` sm:hidden md:block ${styles.border} sm:w-full md:w-1/2 md:h-1/2`}>
            <Image src={img} alt="" className="w-full top-6 left-6 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};
