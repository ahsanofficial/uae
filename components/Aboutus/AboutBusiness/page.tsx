import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import img from "../../../public/about/aboutbusiness/Rectangle 220.png";

export const AboutBusiness = () => {
  return (
    <div className={`${styles.container}`}>
      <h1 className="font-roboto sm:text-3xl lg:text-3xl text-2xl font-bold leading-75 text-center text-teal-700 sm:mt-16 lg:mt-16">
        Is starting a business in Dubai your dream?
      </h1>
      <h3 className="font-roboto text-xl font-bold leading-47 text-center text-teal-700">
        UAE’s Best Business Setup Consultancy
      </h3>
      <div className="bg-white pt-12  pb-8 sm:flex lg:flex justify-between items-center  mx-auto  py-12">
        <div className=" sm:w-1/2 lg:w-1/2 pr-8">
          <h2 className="text-xl font-bold mb-4 text-teal-700">Our Goal</h2>
          <p className="text-base mb-6">
            By offering all value-added services for companies to innovate and
            develop business models that significantly increase profitability
            and sustainability, Safe Ledger aims to lead the MENA region.
          </p>
          <h2 className="text-xl font-bold mb-4 text-teal-700">Our Purpose</h2>
          <p className="text-base mb-6">
            By offering high-quality services that change businesses, you can
            create happy customers.
          </p>
          <h2 className="text-xl font-bold mb-4 text-teal-700">How can we help?</h2>
          <p className="text-base mb-6">
            Companies can set up virtual offices, Smart desks in Dubai, meeting
            spaces, co-working spaces, and much more through Better Way
            Consultancy. Our areas of expertise include:
          </p>
          <ul className="list-disc pl-6 pb-2">
            <li className="text-base pb-2">Bank Assistance</li>
            <li className="text-base pb-2">Setting up Business in UAE</li>
            <li className="text-base pb-2">
              Trademark and product registration on behalf of a company
            </li>
            <li className="text-base pb-2">
              Business Licenses, including Commercial and Industrial Trade
              License Professional License, Tourism License, and other types of
              trade license in Dubai
            </li>
            <li className="text-base pb-2">Legal Advisory</li>
            <li className="text-base pb-2">PRO Services</li>
            <li className="text-base pb-2">Investors’ Visa</li>
          </ul>
        </div>
        <div className="sm:w-2/5 lg:w-2/5">
          <Image
            src={img}
            alt="Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
