import CompanySetup from '@/components/Landing/CompanySetup/page';
import Faq from '@/components/Landing/FAQ’s/page';
import FreeBook from '@/components/Landing/FreeBook/page';
import LandingBanner from '@/components/Landing/LandingBanner/page';
import Client from '@/components/Landing/OURCLIENTS/page';
import Price from '@/components/Landing/Price/page';
import RegistrationProcess from '@/components/Landing/RegistrationProcess/page';
import SafeLedger from '@/components/Landing/SafeLedger/page';
import Testimonials from '@/components/Landing/Testimonials/page';
import WhyChoose from '@/components/Landing/WhyChoose/page';
import Partner from '@/components/Landing/parnter/page';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Landing - Safe Ledger",
    description: "Generated by create next app",
  };
  
const Landing = () => {


    return (
        <div>
            <LandingBanner/>
            <Partner/>
            <WhyChoose/>
            {/* <SafeLedger/> */}
            {/* <CompanySetup/> */}
            <Price/>
            <RegistrationProcess/>
            <Client/>
            <Testimonials/>
            <FreeBook/>
            <Faq/>
        </div>
    )
}
export default Landing;