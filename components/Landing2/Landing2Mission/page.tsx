import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import styles from "./style.module.css";
import image1 from "../../../public/home/partners/image1.jpeg";
import left from "../../../public/landing2/landingmission/Vector.png";
import right from "../../../public/landing2/landingmission/Vector (1).png";
import Image from "next/image";

export const Landing2Mission = () => {
  return (
    <div>
      <div className={`pt-16 ${styles.bg}`}>
        <div className="py-10 px-80">
          {" "}
          <h1 className="text-black text-4xl text-center">
            Our mission is to enable entrepreneurs to
            <strong className="text-blue-600 font-normal">
              &nbsp;accelerate positive changes
            </strong>{" "}
          </h1>
        </div>

        {/* <h1 className="text-indigo-600 text-3xl text-center mb-6 mt-2">
          SafeLedger?
        </h1> */}
        <Grid container spacing={9} justifyContent="center">
          <div className="flex items-center">
            <Image src={left} alt="Previous Card" />
          </div>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="bg-slate-600 shadow-md rounded-xl">
              <img
                src={image1.src}
                alt="Card 1"
                className="w-full h-72 object-cover rounded-t-lg"
              />
              <CardContent className={styles.background}>
                <Typography variant="h6" gutterBottom className="text-white">
                  Building a better future for the entrepreneurs
                </Typography>
                <ul className="list-disc p-1 px-7 pb-2 pl-4.5 mb-2.5 mx-auto">
                  <li className="text-white mx-auto mb-2.5 ">
                    We believe that in years entrepreneurs.
                  </li>
                  <li className="text-white mx-auto mb-2.5 ">
                    Will know that administrative routine.
                  </li>
                  <li className="text-white mx-auto mb-2.5 ">
                    Will know that administrative routine.
                  </li>
                </ul>
                <div className="text-right">
                  <Button
                    variant="outlined"
                    className="mt-5 rounded-full	border-slate-50	text-white "
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="bg-slate-600 shadow-md rounded-xl">
              <img
                src={image1.src}
                alt="Card 1"
                className="w-full h-72 object-cover rounded-t-lg"
              />
              <CardContent className={styles.background}>
                <Typography variant="h6" gutterBottom className="text-white">
                  Keeping transparency as a key-valueF
                </Typography>
                <ul className="list-disc p-1 px-7 pb-16 pl-4.5 mb-2.5 mx-auto">
                  <li className="text-white mx-auto mb-2.5 ">
                    We believe that in years entrepreneurs.
                  </li>
                  <li className="text-white mx-auto mb-2.5 ">
                    Will know that administrative routine.
                  </li>
                  <li className="text-white mx-auto mb-2.5 ">
                    Will know that administrative routine.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <div className="flex items-center ms-16">
            <Image src={right} alt="Next Card" />
          </div>
        </Grid>
      </div>
    </div>
  );
};
