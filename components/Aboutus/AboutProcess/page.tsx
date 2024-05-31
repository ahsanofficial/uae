import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import image from "../../../public/about/aboutprocess/Rectangle 221 (1).png";
import imag2 from "../../../public/about/aboutprocess/aboutbuinss.jpeg";
export const AboutUsProcess = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="my-12  sm:ml-6 lg:ml-12">
        <h3 className="font-roboto text-base text-2xl font-bold leading-tight text-left text-teal-700">
          Our Process
        </h3>
        <p className="font-roboto text-lg mt-2 text-base font-medium leading-tight text-left">
          Our simple procedures for setting up a business in Dubai are as
          follows:
        </p>
      </div>
      <div className='sm:flex lg:flex justify-between'>
        <div className={`${styles.points_container}`}>
          <div className="flex mb-6">
            <span className={`${styles.serial}`}>1</span>
            <div className={`${styles.points}`}>Send an Enquiry</div>
          </div>
          <div className="flex mb-6">
            <span className={`${styles.serial}`}>2</span>
            <div className={`${styles.points}`}>Get Free Consultation</div>
          </div>
          <div className="flex mb-6">
            <span className={`${styles.serial}`}>3</span>
            <div className={`${styles.points}`}>Make the Initial Payment</div>
          </div>
          <div className="flex mb-6">
            <span className={`${styles.serial}`}>4</span>
            <div className={`${styles.points}`}>Submit the documents</div>
          </div>
          <div className="flex mb-6">
            <span className={`${styles.serial}`}>5</span>
            <div className={`${styles.points}`}>Proceed to Incorporation</div>
          </div>
        </div>
        <div className="sm:w-2/5 lg:w-2/5 w-full">
          <Image className={styles.img} src={image} alt="" />
          <Image className={styles.img2} src={imag2} alt="" />
        </div>
      </div>
    </div>
  );
};
