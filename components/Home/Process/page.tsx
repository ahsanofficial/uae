// pages/index.tsx

import React from 'react';
import Head from 'next/head';
import styles from './style.module.css';
import { Button, Grid, Typography } from '@mui/material';

const Process: React.FC = () => {
    return (
        <div className={styles.Backgound}>
            <div className={`${styles.card} bg-transparent border-2 border-emerald-900 rounded-xl`}>
                <div className='sm:flex lg:flex justify-between items-center  mt-6'>
                    <div className='pl-4 pt-4'>
                        <Typography variant='h5' className=' text-emerald-900 font-semibold'>Book a Consultation</Typography>
                        <p className='text-base	'>Contact our experts and book a consultation call with us.</p>
                    </div>
                    <Button className={`${styles.text} font-medium bg-emerald-900 rounded-full  text-white`} >Learn More</Button>
                </div>
                <div className='sm:flex lg:flex justify-between items-center mt-10'>
                    <div className='pl-4 pt-4'>
                        <Typography variant='h5' className=' text-emerald-900 font-semibold'>Book a Consultation</Typography>
                        <p className='text-base	'>Contact our experts and book a consultation call with us.</p>
                    </div>
                    <Button className={`${styles.text} font-medium bg-emerald-900 rounded-full text-white`} >Learn More</Button>
                </div>
                <div className='sm:flex lg:flex justify-between items-center mt-10 mb-10'>
                    <div className='pl-4 pt-4'>
                        <Typography variant='h5' className=' text-emerald-900 font-semibold'>Book a Consultation</Typography>
                        <p className='text-base	'>Contact our experts and book a consultation call with us.</p>
                    </div>
                    <Button className={`${styles.text} font-medium bg-emerald-900 rounded-full text-white` } >Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default Process;
