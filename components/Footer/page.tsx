import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import logo from "../../public/footer/Safe_Ledger__1_-removebg-white 1.png";
import fb from "../../public/footer/Vector.png";
import icon1 from "../../public/footer/Vector (1).png";
import icon2 from "../../public/footer/Vector (2).png";
import icon3 from "../../public/footer/Vector (3).png";
import icon4 from "../../public/footer/Vector (4).png";
import apple from "../../public/landing/freebook/free.jpg";
import dropdown from "../../public/footer/dropdown.png";
import flag from "../../public/footer/image 13.png";
import { Typography } from "@mui/material";
import ZohoFormService from "../Form/ZohoForm";

export const Footer = () => {
  return (
    <div className={`${styles.bg} py-20 px-28`}>
      <h2 className="sm:text-5xl lg:text-5xl text-2xl text-center sm:font-semibold lg:font-semibold text-white mb-6 mt-6">
        Let’s keep in{" "}
        <span className={`${styles.red}  font-semibold`}>
          &nbsp;touch
        </span>
      </h2>
      <div className="sm:flex lg:flex justify-between gap-16 mx-auto py-12">
        <div className=" sm:w-1/2 lg:w-1/2 flex flex-col justify-center items-center">
          <p className={styles.footer_head}>
            Get tips on how to run your business smarter
          </p>
          <p className="text-lg text-start text-white mt-4 mb-6">
            Learn crucial tips on how to save money and build a flourishing
            business, with real entrepreneurs sharing their own experiences.
          </p>
        </div>
        <div className=" sm:w-3/4 lg:w-3/4 flex justify-center items-center">
          {/* <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className=" text-white tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  First Name *
                </label>
                <input
                  className="appearance-none font-roboto text-base font-normal leading-6 text-left block w-full bg-transparent border border-solid border-white rounded-lg py-3 px-4 mb-3 placeholder-gray-400 leading-tight focus:outline-none focus:bg-white bg-white"
                  id="first-name"
                  type="text"
                  placeholder="Enter first name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className=" text-white tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="last-name"
                >
                  Last Name *
                </label>
                <input
                  className="appearance-none font-roboto text-base font-normal leading-6 text-left block w-full bg-transparent border border-solid border-white rounded-lg py-3 px-4 mb-3 placeholder-gray-400 leading-tight focus:outline-none focus:bg-white bg-white"
                  id="last-name"
                  type="text"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className=" text-white tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  className="appearance-none font-roboto text-base font-normal leading-6 text-left block w-full bg-transparent border border-solid border-white rounded-lg py-3 px-4 mb-3 placeholder-gray-400 leading-tight focus:outline-none focus:bg-white bg-white"
                  id="email"
                  type="email"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <button
              className={`${styles.bg_red} block w-full text-xl  text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline`}
              type="button"
            >
              SUBSCRIBE
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              By clicking, you agree to our{" "}
              <a href="#" className="text-gray-500 hover:text-blue-800">
                Terms & Conditions
              </a>
              ,{" "}
              <a href="#" className="text-gray-500hover:text-blue-800">
                Privacy and Data Protection Policy
              </a>
            </p>
          </form> */}
          <div className={`bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]	rounded-3xl ${styles.margin}`}
>
             <div className={styles.formContainer}>
            <Typography
              variant="h6"
              gutterBottom
              className="text-black	text-3xl text-center"
            >
              Let’s talk with us!
            </Typography>
            <p className="text-black text-center mb-6">
              If you have any questions, connect us.
            </p>
            <ZohoFormService service={""} />
          </div>
          </div>
         
        </div>
      </div>
      <div
        className={`${styles.flex} border-t pt-20 border-opacity-50 border-blue-500`}
      >
        <div className={`${styles.flex} flex justify-between	 items-start`}>
          <div className="">
            <Image
              className={`${styles.logo} flex justify-end text-end`}
              src={logo}
              alt="logo"
            />
            <p className={`font-roboto ${styles.address} text-left  mt-4`}>
              Registered Address in UK: 124-128, City Road, London, England,
              EC1V 2NX
            </p>
          </div>

          <div className={`${styles.info}`}>
            <div>
              <div className="flex justify-end gap-6  flex-row mt-8">
                <Image src={fb} alt="" />
                <Image src={icon1} alt="" />
                <Image src={icon2} alt="" />
                <Image src={icon3} alt="" />
                <Image src={icon4} alt="" />
              </div>

              <div className="flex justify-end mt-6">
                <div className={`${styles.country}`}>
                  <Image src={flag} alt="" />
                  <span className="text-white text-sm font-bold  leading-tight">
                    UNITED KINGDOM
                  </span>
                  <Image src={dropdown} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
