import React from 'react';
import styles from './style.module.css';
import { Button, Grid, Typography } from '@mui/material';

export const Homebanner = () => {


    return (
        <div className={styles.Backgound}>

            <Grid container spacing={3} className='items-center flex justify-center pl-6'>

                <Grid item xs={12} sm={6} md={6} className={` ${styles.banner}`}>
                    <div className={` ${styles.bg}`}>
                        <Typography variant='h6' className=' mt-6 sm:mt-16 lg:mt-16 text-white font-extralight text-lg'>Wake up and make a move!</Typography>
                        <Typography variant='h6' className='text-white font-semibold sm:text-5xl'>Start Your UAE Business Now!</Typography>
                        <Typography variant='h6' className='text-white font-extralight text-lg'>Company setup, trade license, banking, and more.</Typography>

                        <div className={` ${styles.btn}`}>
                            <dl className={`${styles.flex} flex mt-10`} >
                                <Button className=" mt-2 font-medium   bg-white text-green-600 rounded-full px-6 py-2 hover:bg-emerald-700 hover:text-white" fullWidth>About Us</Button>
                                <Button  className={`${styles.border} mt-2 font-medium px-5 ml-2 text-white rounded-full px-6 py-2 border border-white`} fullWidth>Contact Us</Button>
                            </dl>
                            <Button className=" mt-6 font-medium px-5 mr-2 bg-emerald-700 rounded-full px-14 py-2 text-white hover:bg-white hover:text-emerald-700" fullWidth>Book free consultation</Button>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={6} className={`${styles.text}`}>
                    <Typography className='sm:ml-36 bg-white pl-6 pt-6 sm:mt-36 text-green-600 sm:pb-6 pb-4'>SafeLedger drives business growth with comprehensive services including incorporation, accounting, and administration. Our expert support ensures seamless operations and compliance, enabling you to focus on innovation and expansion. Trust Safe Ledger for your business success .</Typography>
                    <div className={`${styles.button} flex mt-4`}>
                        <dl  className='flex'>
                            <Button className=" mt-2 font-medium   bg-white text-green-600 rounded-full" fullWidth>About Us</Button>
                            <Button className="mt-2 font-medium text-white rounded-full border-white border" fullWidth>Contact Us</Button>
                        </dl>
                        <Button className=" mt-6 font-medium bg-emerald-700 rounded-full px-14 text-white" fullWidth>Book free consultation</Button>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}