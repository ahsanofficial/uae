import BusinessForm from '@/components/Home/BusinessForm/page';
import { Blog } from '../components/Home/Blog/page';
import Experts from "@/components/Home/Experts/page";
import { Homebanner } from "@/components/Home/HomeBanner/page";
import { NumberSpeaks } from "@/components/Home/NumberSpeaks/page";
import Patners from "@/components/Home/Partners/page";
import { WeOffer } from "@/components/Home/WeOffer/page";
import TestimonialSlider from '@/components/Landing/Testimonials/page';
import Process from '@/components/Home/Process/page';
import Client from '@/components/Landing/OURCLIENTS/page';
import Best from '@/components/Home/Best/page';

export default function Home() {
  return (
    <div>
      <Homebanner />
      <Patners />
      <Process />
      <Experts />
      <Client />
      {/* <NumberSpeaks /> */}
      <TestimonialSlider/>
      <Best/>
      {/* <Blog/> */}
      {/* <BusinessForm/> */}
    </div>
  );
}