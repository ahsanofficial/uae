import React from 'react';
import styles from "./style.module.css";
import { Typography } from '@mui/material';

const Best: React.FC = () => {
  return (
    <div className={`${styles.background}`}>
      <div className={`${styles.bg}`}>
        <Typography variant='h4' className='font-semibold	text-green-800 text-center py-10'>What Makes Us the Best?</Typography>
        <Typography className='sm:py-6'>We are your complete business ally in Dubai, offering more than just company setup. We handle everything, including office leasing, Corporate tax registration, vat services, accounting, and PRO services. Simplify your company's operations with our all-inclusive solutions, conveniently located under one roof.</Typography>
        <Typography variant='h5' className='font-semibold	text-green-800'>Company Setup</Typography>
        <Typography className='mt-2'>Our UAE Company Setup services can help you open up new business prospects in Dubai. We handle all documentation and follow-up for Mainland and Free Zone Company formations, ensuring development and full ownership. Allow us to manage the process while you concentrate on success.</Typography>
        <Typography variant='h5' className='font-semibold	text-green-800 pt-10'>PRO Services</Typography>
        <Typography className='mt-2'>Our effective PRO services will help you simplify your company processes. From visa processing and document attestation to government permissions and licence renewals, our skilled staff can handle everything. Focus on your main business while we handle your administrative needs.</Typography>
        <Typography variant='h5' className='font-semibold	text-green-800 pt-10'>Vat and Accounting</Typography>
        <Typography className='mt-2'>We provide services such as recording and maintaining your company's bookkeeping, auditing financial statements, assisting with investment banking, notifying tax litigation and regulatory rules across a variety of firms, and more.</Typography>
        <Typography variant='h5' className='font-semibold	text-green-800 pt-10'>Come On, Let's Start</Typography>
        <Typography className='pb-10 mt-2'>A one-stop shop for all your business needs is our goal. We provide specialized solutions to aid your business from start-up to growth. Contact us to start your successful business adventure in the UAE.</Typography>
      </div>
    </div>

  );
};

export default Best;
