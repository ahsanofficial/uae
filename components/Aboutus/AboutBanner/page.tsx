import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import banner from "../../../public/about/aboutbanner/Group 161.png";
import { Grid } from "@mui/material";

const AboutUsBanner: React.FC = () => {
  return (
    <div>
      <div className={` ${styles.background}`}>
      </div>
      <div className={`sm:flex lg:flex justify-between items-end bg-white gap-36  sm:p-8 ${styles.container}`}>

        <Grid container spacing={2} className="justify-around	">
          <Grid item xs={12} sm={5}>
            <div className={` sm:text-center ${styles.quickly}`}>
              <h1 className="font-roboto sm:text-6xl lg:text-6xl text-3xl sm:mt-0 lg:mt-0 mt-6 font-medium leading-tight text-left text-teal-700">
                WHO WE ARE
              </h1>
              <p className="font-roboto text-base font-light  mt-6 text-left">
                Safe Ledger is a full-service management consulting firm headquartered
                in Dubai. For investors looking to start or grow their businesses in
                the United Arab Emirates, the company specializes in designing and
                developing bespoke solutions for Business Setup across the country. We
                have a wealth of knowledge regarding corporate and individual bank
                accounts in the UAE, as well as solid relationships with leading UAE
                banks. We assist our devoted clients in fulfilling all requirements
                prior to successfully opening a bank account in the United Arab
                Emirates. <p className="mt-4 font-roboto text-base font-light leading-tight text-left">Even the most seasoned business owner may find it
                  difficult to establish a business in Dubai or elsewhere in the UAE.</p>
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Image src={banner} alt="" className={`${styles.img}`} />
          </Grid>
        </Grid>
      </div>
    </div>

  );
};

export default AboutUsBanner;
