import React from "react";
import styles from "./style.module.css";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import image1 from "../../../public/landing/landingbanner/image1.png";
import image2 from "../../../public/landing/landingbanner/image3.png";
import image3 from "../../../public/landing/landingbanner/image4.png";
import image4 from "../../../public/landing/landingbanner/image5.png";
import image5 from "../../../public/landing/landingbanner/image6.png";
import group from "../../../public/landing2/landingbanner2/Group 40.png";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ZohoFormService from "@/components/Form/ZohoForm";

const HeroSection: React.FC = () => {
  return (
    <div className={styles.Backgound}>
      <Grid container spacing={3} className="  items-center justify-center">
        <div className="flex flex-col justify-right">
          <h1 className="text-5xl text-black font-semibold">
            Company registration in UK
          </h1>
          <h2 className="text-4xl text-blue-600 font-normal">
            Register your company
          </h2>
          <h2 className="text-4xl text-blue-600 font-normal">
            Online hassle-free
          </h2>

          <img src={group.src} />
        </div>

        <Grid
          item
          xs={12}
          sm={3}
          className={`bg-indigo-700	rounded-3xl ${styles.margin}`}
        >
          <div className={styles.formContainer}>
            <Typography
              variant="h6"
              gutterBottom
              className="text-white font-light	text-sm text-center"
            >
              Register yourself
            </Typography>

            <ZohoFormService service={""} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
