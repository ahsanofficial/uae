import React from "react";

import styles from "./style.module.css";
import Image from "next/image";

export const ServicesMandatory = () => {
  return (
    <div className="flex justify-center items-center mb-6 px-6">
      <div className="w-full max-w-screen-lg bg-white">
        <div className=" p-4">
          <h2
            className={`${styles.red_heading} text-3xl max-w-md font-medium leading-tight mb-6`}
          >
            Mandatory License in UAE <br className="lg:hidden" />
            <span className="text-red-600 text-3xl font-medium leading-tight ">
              {" "}
              Mainland
            </span>
          </h2>
          <p className="text-base font-medium leading-6 text-left mb-4">
            Forming a mainland corporation in Dubai can be a lucrative
            investment opportunity for both individuals and organizations.
            Mainland enterprises are corporate entities that are allowed to
            operate and function within the Emirati jurisdiction's
            commercialized geographical regions.
          </p>
          <p className="text-left font-normal mb-4">
            All business activities in the UAE require a license in one of three
            categories: commercial, industrial, or professional.
          </p>
          <p className="text-left font-normal mb-4">
            We provide business consultation for obtaining a Dubai license and
            starting a business in one of the UAE's most desirable locations. We
            help you save time and money on obtaining a Dubai trade license by
            ensuring that your mainland license in Dubai, UAE, meets the Dubai
            Economic Department's requirements.
          </p>
        </div>
      </div>
    </div>
  );
};
