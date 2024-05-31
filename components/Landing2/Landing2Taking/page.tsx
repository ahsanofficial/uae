"use client";
import React from "react";

import styles from "./style.module.css";
import { Button } from "@mui/material";
import image1 from "../../../public/landing2/landingtaking/Rectangle 37.png";
import Image from "next/image";

export const Landing2Taking = () => {
  return (
    <div>
      <div className={`flex sm:pt-6 lg:pt-6 ${styles.bg}`}>
        <div
          className={`mx-auto grid max-w-2xl grid-cols-1  gap-x-8 gap-y-16 lg:px-4  sm:px-4 sm:py-24 lg:py-24 lg:max-w-7xl lg:grid-cols-2 ${styles.center}`}
        >
          <div className="mt-10 lg:mt-16 sm:mt-16 lg:mr-16">
            <h2 className="sm:text-5xl text-blue-600 font-bold sm:text-3xl lg:text-3xl text-2xl sm:pr-10 lg:pr-10">
              Taking Details into account
            </h2>
            <p className="mt-5 text-blue-600 sm:pr-10 lg:pr-10">
              Details are important — only through paying attention and
              precisely follow the process we can see the big picture and spot
              opportunities to improve.
            </p>

            <Button
              variant="outlined"
              className="font-medium px-5 rounded-full lg:mt-10 sm:mt-10 "
            >
              Know More
            </Button>
          </div>
          <div className="">
            <img src={image1.src} alt="Walnut" className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
