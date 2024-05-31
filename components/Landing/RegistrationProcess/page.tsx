import React from 'react';
import styles from './style.module.css';
import { Avatar, Button, Grid, IconButton, Typography } from '@mui/material';
import image1 from '../../../public/landing/RegistrationProcess/burjkalifa.jpeg';
import process from '../../../public/landing/RegistrationProcess/planing.png';

const RegistrationProcess = () => {


    return (
        <div>
            <div className={`${styles.Backgound}`}>
            <Grid container spacing={2}>
                    <div className=" sm:flex lg:flex justify-between mt-10 w-full mb-10 items-center">
                        <Grid item xs={12} sm={6} md={6}>
                            <Avatar src={image1.src} className={`${styles.img}`}></Avatar>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Typography variant='h5' className='text-green-900 font-semibold sm:pt-0 lg:pt-0 pt-6'>Registration Process</Typography>
                            <Typography variant='h6' className='text-sm	leading-6 mt-6 text-green-900'>Welcome to Safe Ledger, your trusted partner for seamless company registration and business setup services in the vibrant landscape of the United Arab Emirates. With our expertise and dedication, we streamline the complex process of establishing your presence in the UAE market, ensuring a smooth and efficient journey from inception to operation</Typography>
                            <Typography className='text-sm leading-6 mt-6 text-green-900'>We’ll walk you through the company registration process in the UAE in three simple steps.</Typography>
                            {/* <Button variant="contained" className='text-white bg-black my-6'>DOWNLOAD NOW</Button> */}
                            <Avatar src={process.src} className={`${styles.dot} pt-6`}></Avatar>
                        </Grid>
                    </div>
                </Grid>
            </div>
        </div>

    )
}
export default RegistrationProcess;