import React from "react";
import styles from "./style.module.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import inbox from "../../../public/contactus/Vector.png";

const ContactDetails: React.FC = () => {
  return (
    <div className={styles.bg}>
      <div className="sm:flex lg:flex justify-between sm:mt-3 lg:mt-36">
        <div className="sm:w-1/2 lg:w-1/2 mb-6">
          <div className="mb-8">
            <p className="text-lg font-semibold mb-4 text-blue-600">Note:</p>
            <p className="text-sm text-gray-700">
              RegisterKaro is a renowned group of individual professionals that
              has established itself as a market leader in guiding corporate
              houses and entrepreneurs. We specialize in Company Incorporation,
              Tax, and all other services rendered by professionals independently.
              Our registered office is located at #101, Oxford Towers, 139, HAL
              Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold mb-4 text-blue-600">
              Registered Address:
            </p>
            <p className="text-sm font-semibold ">124-128, City Road,</p>
            <p className="text-sm font-semibold"> London, England, EC1V 2NX</p>
          </div>
        </div>
        <div className="sm:mt-0 lg:mt-0 mt-8">
          <div className="mb-8 flex gap-6 items-center">
            <div>
              <Image src={inbox} alt="" />
            </div>
            <div>
              <p className="text-lg font-semibold text-blue-600">
                Information:
              </p>
              <p className="text-lg">Info@safeledger.net</p>
            </div>
          </div>
          <div className="mb-8 flex gap-6">
            <div>
              <Image src={inbox} alt="" />
            </div>
            <div>
              <p className="text-lg font-semibold text-blue-600">
                Sales
              </p>
              <p className="text-lg">Sales@safeledger.net</p>
            </div>
          </div>
          <div className="mb-8 flex gap-6">
            <div>
              <Image src={inbox} alt="" />
            </div>
            <div>
              <p className="text-lg font-semibold text-blue-600">
                Support
              </p>
              <p className="text-lg">Support@safeledger.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ContactDetails;
