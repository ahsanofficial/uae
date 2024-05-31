import React from "react";
import styles from "./style.module.css";

export const ServicesAssist = () => {
  return (
    <div className="flex justify-center items-center mb-6 px-6">
      <div className="w-full max-w-screen-lg bg-white">
        <div className=" p-4">
          <h2 className="text-3xl max-w-md font-medium leading-tight mb-6">
            How will <span className="text-red-600">we assist you?</span>  with UAE mainland company information
          </h2>
          <p className=" font-semibold text-lg mb-8">
            Our Mainland Business Establishment in Dubai, UAE Services include:
          </p>
          <div className="mb-8">
            <h3 className={`text-gray-600 text-lg font-semibold mb-4`}>
              Strategic Consultation
            </h3>
            <p className=" text-base">
              Our professional consultants will collaborate with you to
              understand your business goals and objectives. We provide
              strategic advice on the best legal structures and licensing
              alternatives for your business in Dubai Mainland.
            </p>
          </div>
          <div className="mb-8">
            <h3 className={`text-gray-600 text-lg font-semibold mb-4`}>
              Company Formation
            </h3>
            <p className=" text-base">
              We manage all aspects of business setup in the UAE, such as
              creating documentation, sending applications to appropriate
              authorities, and getting licenses and permissions.
            </p>
          </div>
          <div className="mb-8">
            <h3 className={`text-gray-600 text-lg font-semibold mb-4`}>
              PRO Services
            </h3>
            <p className=" text-base">
              Our dedicated PRO team handles all government-related
              requirements, such as visa processing, labor contracts, and
              document attestation, to ensure compliance with local regulations.
            </p>
          </div>
          <div className="mb-8">
            <h3 className={`text-gray-600 text-lg font-semibold mb-4`}>
              Open a bank account
            </h3>
            <p className=" text-base">
              We make it easier for you to handle company money and transactions
              by assisting you in opening a corporate bank account with
              prominent UAE banks.
            </p>
          </div>
          <div>
            <h3 className={`text-gray-600 text-lg font-semibold mb-4`}>
              Ongoing Support
            </h3>
            <p className=" text-base">
              We provide continuing help to ensure that your company remains
              compliant with all regulatory requirements, such as corporate tax,
              VAT filing, auditing, etc. We also assist with visa services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
