import React from "react";
import styles from "./style.module.css";
import arrow from "../../../public/services/servicesestablish/Vector.png";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";

export const ServicesEstablish = () => {
  return (
    <div className="flex justify-center items-center mt-32 mb-6 px-6">
      <div className="w-full max-w-screen-lg bg-white">
        <div className="p-4">
          <h1 className="text-3xl max-w-md font-medium leading-tight ">
            How to Establish a Mainland
            <span className="text-red-600 text-3xl font-medium leading-tight ">
              &nbsp;Business set up in the UAE
            </span>
          </h1>

          <p className="text-base font-medium leading-6 mb-10 mt-6">
            Establishing a mainland business in Dubai requires numerous
            procedures to ensure compliance with local legislation and secure
            relevant permits and licenses. Here's a summary of the process:
          </p>
          <Grid container justifyContent="center" className="items-center	mt-6">
            <Grid item xs={12} sm={4} md={4} className="flex items-center ">
              <h3 className={`${styles.f} text-lg text-gray-600 font-semibold mb-4 lg:mb-0 text-green-900	font-extralight`}> Determine Legal Structure </h3>
            </Grid>
            <Grid item xs={12} sm={1} md={1}>
              <Image className={`${styles.arrow} ml-4`} src={arrow} alt="" />
            </Grid>
            <Grid item xs={12} sm={8} md={7} className="">
              Based on your business goals and requirements, decide whether to form a Limited Liability Company (LLC), sole proprietorship, or partnership.
            </Grid>
          </Grid>

          <div className="lg:flex flex-col lg:flex-row gap-8 sm:gap-4 justify-between items-center mt-6">
            <h3
              className={`${styles.blue_heading} text-lg text-gray-600 font-semibold mb-4 lg:mb-0`}
            >
              Determine Legal Structure
            </h3>
            <div>
              <Image className={`${styles.arrow} mr-4`} src={arrow} alt="" />
            </div>

            <div className="flex items-center">
              <div className={`${styles.para} flex-grow`}>
                <p className="text-left font-normal py-0">
                  Based on your business goals and requirements, decide whether
                  to form a Limited Liability Company (LLC), sole
                  proprietorship, or partnership.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-col lg:flex-row gap-8 sm:gap-4 justify-between items-center mt-6">
            <h3
              className={`${styles.blue_heading} text-lg text-gray-600 font-semibold mb-4 lg:mb-0`}
            >
              Choose a Trade Name and Activity
            </h3>{" "}
            <div>
              <Image className={`${styles.arrow} mr-4`} src={arrow} alt="" />
            </div>
            <div className="flex items-center">
              <div className={`${styles.para} flex-grow`}>
                <p className="text-left font-normal py-0">
                  Select a distinctive trade name for your company that adheres
                  to the Department of Economic Development's (DED) naming
                  conventions. Specify the business activities you want to
                  pursue.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-col lg:flex-row gap-8 sm:gap-4 justify-between items-center mt-6">
            <h3
              className={`${styles.blue_heading} text-lg text-gray-600 font-semibold mb-4 lg:mb-0`}
            >
              Obtain Initial Approval
            </h3>
            <div>
              <Image className={`${styles.arrow} mr-4`} src={arrow} alt="" />
            </div>

            <div className="flex items-center">
              <div className={`${styles.para} flex-grow`}>
                <p className="text-left font-normal py-0">
                  Submit the essential paperwork to the DED for initial
                  approval, including copies of shareholders' passports,
                  anticipated business activities, and the brand name.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-col lg:flex-row gap-8 sm:gap-4 justify-between items-center mt-6">
            <h3
              className={`${styles.blue_heading} text-lg text-gray-600 font-semibold mb-4 lg:mb-0`}
            >
              Finalize Legal Documents
            </h3>
            <div>
              <Image className={`${styles.arrow} mr-4`} src={arrow} alt="" />
            </div>

            <div className="flex items-center">
              <div className={`${styles.para} ${styles.id} flex-grow`}>
                <p className="text-left font-normal py-0">
                  Prepare all legal documents, including the MOA and lease
                  agreement, and get them attested by the appropriate
                  authorities.F
                </p>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-col lg:flex-row gap-8 sm:gap-4 justify-between items-center mt-6">
            <h3
              className={`${styles.blue_heading} text-lg text-gray-600 font-semibold mb-4 lg:mb-0`}
            >
              Obtain a Trade Licence
            </h3>
            <div>
              <Image className={`${styles.arrow} mr-4`} src={arrow} alt="" />
            </div>

            <div className="flex items-center">
              <div className={`${styles.para} flex-grow`}>
                <p className="text-left font-normal py-0">
                  Submit the essential paperwork to the DED for initial
                  approval, including copies of shareholders' passports,
                  anticipated business activities, and the brand name.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:flex flex-col lg:flex-row gap-8 sm:gap-4 justify-between items-center mt-6">
            <h3
              className={`${styles.blue_heading} text-lg text-gray-600 font-semibold mb-4 lg:mb-0`}
            >
              Obtain Initial Approval
            </h3>
            <div>
              <Image className={`${styles.arrow} mr-4`} src={arrow} alt="" />
            </div>

            <div className="flex items-center">
              <div className={`${styles.para} flex-grow`}>
                <p className="text-left font-normal py-0">
                  Apply for a trade license from the Department of Economic
                  Development, stating the nature of your business operations.
                  <br></br>
                  <br></br>
                  It is crucial to note that the process may differ slightly
                  based on the type of business and any additional restrictions
                  imposed by the authorities. It is recommended that you obtain
                  expert guidance from us to be informed with local legislation
                  and ensure a smooth and compliance setup process.<br></br>
                  <br></br> We offer comprehensive support until your company is
                  registered, demonstrating cost-effective engineered solutions,
                  guiding you along a lucid path, and assisting you in making
                  informed decisions. We specialize in managing all elements of
                  company registration in Dubai. We will supply guidance on
                  locating a congenial local service agent and the specific
                  categories of business permits that are necessary in order to
                  aid in your comprehension of the limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};
