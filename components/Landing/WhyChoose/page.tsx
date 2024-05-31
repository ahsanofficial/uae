import { Avatar, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.css';
import book from '../../../public/landing/whychoose/book.png';

const WhyChoose: React.FC = () => {
    return (
        <div className={` ${styles.back}`}>
            <div className={` ${styles.response}`}>
                <Grid container spacing={2}>
                    <div className=" sm:flex lg:flex justify-between mt-10">
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant='h4' className='text-green-600'>Why Choose Us?</Typography>
                            <Typography variant='h6' className='text-sm	leading-6 mt-6 text-green-900'>At Safe Ledger, we're not just another service provider; we're your strategic partner in business success. Our dedicated team of experts brings a wealth of experience and a commitment to excellence, ensuring that your journey to establishing your business in the UAE is not only smooth but also rewarding.</Typography>
                            <Typography variant='h6' className='text-sm	leading-6 mt-6 text-green-900'>We prioritize your unique needs, offering tailored solutions that combine local expertise with a global perspective. With us by your side, you gain access to personalized guidance, comprehensive support, and unwavering dedication, empowering you to navigate the complexities of the UAE business landscape with confidence and ease.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className='flex'>
                        </Grid>
                    </div>
                </Grid>
                <Grid container spacing={2}>
                    <div className=" flex justify-end mt-10 w-full mb-10 items-center">
                        <Grid item xs={12} sm={6} md={6}>
                        <Avatar src={book.src}></Avatar>                      
                          </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant='h5' className='text-green-900'>UAE Business Setup Guide</Typography>
                            <Typography variant='h6' className='text-sm	leading-6 mt-6 text-green-900'>Discover the step-by-step procedures and essential considerations you need before setting up a company in UAE.</Typography>
                            <Button variant="contained" className='text-white bg-black my-6'>DOWNLOAD NOW</Button>
                        </Grid>
                    </div>
                </Grid>

            </div>
        </div>

    );
};

export default WhyChoose;
