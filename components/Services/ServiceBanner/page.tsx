import React from "react";
import styles from "./style.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import ZohoFormService from "@/components/Form/ZohoForm";

const ServiceBanner: React.FC = () => {
  return (
    <div className={styles.Backgound}>
      <Grid container spacing={3} className={` justify-center  ${styles.container}`}>
        <Grid item xs={12} sm={6} className={styles.gridItem}>
          <div className={` mb-30 ${styles.textContainer}`}>
            <h2 className={`${styles.gray} uppercase text-6xl font-normal  text-emerald-700 text-left`}>
              Start Your Dream <br></br>Business in the UAE
            </h2>
          
          </div>

          <div className={`${styles.para} mt-20`}>
            <p className={`${styles.border}  pl-4 text-lg font-medium leading-7 text-left `}>
              With our distinguished London registered office address, you can
              safeguard your home's privacy and improve your company's
              reputation.
            </p>
            <p className="pl-4 text-lg font-medium leading-7 text-left sm:mb-0 lg:mb-0 mb-8">
              All official government mail is scanned and emailed to you at your
              convenience.
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          className={`bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]	rounded-3xl ${styles.margin}`}
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
        </Grid>
      </Grid>
    </div>
  );
};

export default ServiceBanner;
