import React from 'react';
import styles from './style.module.css';
import { Button, Grid, TextField, Typography } from '@mui/material';
import ZohoFormService from '@/components/Form/ZohoForm';
import Image from "next/image";
import img from "../../../public/contactus/Rectangle 222.png"


const ContactUsBanner: React.FC = () => {

    return (
        <div className={`${styles.Backgound}`}>
            <div className={styles.bg}>
                <Grid container spacing={2} className='sm:flex lg:flex justify-between	mt-36 lg:mt-36'>
                    <Grid item xs={12} sm={4} className={`bg-white shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-3xl  ${styles.margin}`}>
                        <div >
                            <Typography variant="h6" gutterBottom className='text-black	text-3xl text-center pt-4'>
                                Let’s talk with us!
                            </Typography>
                            <p className='text-black text-center mb-6'>If you have any questions, connect us.</p>
                            <ZohoFormService service={''} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div >
                            <Image src={img} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
};

export default ContactUsBanner;
