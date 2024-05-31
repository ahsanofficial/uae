import React from 'react';
import styles from './style.module.css';
import { Avatar, Button, Typography } from '@mui/material';
import book from '../../../public/landing/freebook/free.jpg';

function FreeBook() {
    return (
        <div>
             <Avatar src={book.src} className={`${styles.img}`}></Avatar>
            <div className={` ${styles.background}`}>
                <div className={` ${styles.bg} sm:flex lg:flex justify-evenly text-center`}>
                    <Typography variant='h5' className='text-white text-xl sm:mt-4 lg:mt-4'>Book a free consultation with our company formation experts</Typography>
                    <Button variant="contained" className='text-white bg-black rounded-xl mt-4'>BOOK FREE CONSULTATION</Button>
                </div>
            </div>
        </div>


    );
}

export default FreeBook;
