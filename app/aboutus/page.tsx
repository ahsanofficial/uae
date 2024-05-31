import  AboutUsBanner  from '@/components/Aboutus/AboutBanner/page';
import { AboutUsProcess }   from '@/components/Aboutus/AboutProcess/page';
import { AboutBusiness }   from '@/components/Aboutus/AboutBusiness/page';
import { Footer } from '@/components/Footer/page';
import React from 'react';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "About Us - Safe Ledger",
    description: "Generated by create next app",
  };
  
const AboutUs = () => {
    return (
        <div>
           <AboutUsBanner/>
          <AboutUsProcess />
          <AboutBusiness />
           
        </div>
    );
};

export default AboutUs;
