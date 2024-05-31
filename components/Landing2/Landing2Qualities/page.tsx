import React from "react";
import icon1 from "../../../public/landing2/landingqualities/rating-stars 1.png";
import icon2 from "../../../public/landing2/landingqualities/office-building 1.png";
import icon3 from "../../../public/landing2/landingqualities/office-building 2.png";
import icon4 from "../../../public/landing2/landingqualities/rate 1.png";
import Image from "next/image";
import styles from "./style.module.css";

export const Landing2Qualities = () => {
  return (
    <div className={`${styles.bg}`}>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <Image className="mx-auto mb-4" src={icon1} alt="" />
          <p className="text-blue-600 text-lg text-center  font-bold">250+ </p>
          <p className="text-blue-600 text-lg text-center  font-bold">Experts</p>
        </div>
        <div className="flex flex-col justify-center">
          <Image className="mx-auto mb-4" src={icon2} alt="" />
          <p className="text-blue-600 text-lg text-center  font-bold">10+</p>
          <p className="text-blue-600 text-lg text-center  font-bold">Years</p>
          <p className="text-blue-600 text-lg text-center  font-bold">of Experience</p>
        </div>
        <div>
          <Image className="mx-auto mb-4" src={icon3} alt="" />
          <p className="text-blue-600 text-lg text-center  font-bold">1000+</p>
          <p className="text-blue-600 text-lg text-center  font-bold">Companies</p>
          <p className="text-blue-600 text-lg text-center  font-bold">Incorporated</p>
        </div>
        <div>
          <Image className="mx-auto mb-4" src={icon4} alt="" />
          <p className="text-blue-600 text-lg text-center  font-bold">4.5+</p>
          <p className="text-blue-600 text-lg text-center  font-bold">Google</p>
          <p className="text-blue-600 text-lg text-center  font-bold">Ratings</p>
        </div>
      </div>
    </div>
  );
};
