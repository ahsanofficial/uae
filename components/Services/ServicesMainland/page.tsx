import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import imgDesktop from "../../../public/services/servicesmaniland/Rectangle 121.png";
import imgMobile from "../../../public/services/servicesmaniland/Rectangle 121.png";

export const ServicesMainland = () => {
  return (
    <div className={`flex justify-center items-center h-screen  md:mb-8 px-6 mt-4 ${styles.container}`}>
      <div className={`w-full max-w-screen-lg bg-white rounded-lg border border-solid border-gray-500 p-8 ${styles.content}`}>
        <div className={`flex flex-col md:flex-row justify-between items-center gap-8 ${styles.grid}`}>
          <div className="sm: w-full md:w-2/5 md:order-2">
          <Image src={imgDesktop} alt="" className="w-full md:hidden" />
            <Image src={imgMobile} alt="" className="w-full hidden md:block" />
          </div>
          <div className="sm: w-full md:w-3/5 md:order-1">
            <h2 className="font-brfirma text-xl font-medium leading-6 text-left mb-6">
              UAE Mainland Company Formation
            </h2>
            <div className="flex flex-col space-y-6">
              <p className="font-brfirma text-base leading-5 text-left font-extralight text-sm">
                The United Arab Emirates is one of the world's safest countries
                and the Middle East's trading hub. As a tax haven with a solid
                banking network, businessmen see the UAE mainland as an
                appropriate location to establish a corporation and bank
                account.
              </p>
              <p className="font-brfirma text-base font-extralight leading-5 text-left text-sm">
                The Limited Liability Company (LLC) is a prominent business form
                in the UAE's mainland. The latest cabinet decision allows expats
                to hold 100% of a mainland company in selected industry sectors,
                eliminating the need for a local sponsor for those industries
                and business operations. Consequently, investors can establish a
                Limited Liability Company without the need for a local sponsor.
              </p>
              <p className="font-brfirma text-base font-extralight leading-5 text-left text-sm">
                The modifications made to Federal Law No. 2 of 2015 on
                Commercial Companies and the modified Law No. 26 of 2020 apply
                to any entity engaged in commercial, financial, industrial,
                agricultural, real estate, or other types of economic operations
                on the mainland.
              </p>
              <p className="font-brfirma text-base font-extralight leading-5 text-left text-sm">
                The UAE's Department of Economic Development (DED) licenses
                mainland enterprises as business entities. They provide
                exceptional flexibility and opportunities. With the freedom to
                operate anywhere in the UAE and engage in a wide range of trade
                operations, they are a popular choice for entrepreneurs
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
