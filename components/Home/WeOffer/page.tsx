"use client"
import { Avatar, Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import styles from './style.module.css';
import image1 from '../../../public/home/weoffer/image1.jpeg';
import image2 from '../../../public/home/weoffer/image2.jpeg';
import image3 from '../../../public/home/weoffer/image3.jpeg';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const offers = [
    {
        id: 1,
        name: " Registered Office Service ",
        message: "This service offers a prestigious address that companies can use as their official registration address with Companies House. It enhances a business's professional image while ensuring privacy and compliance with statutory correspondence requirements.",
        avatarUrl: image1.src,
    },
    {
        id: 2,
        name: "Office Address Service",
        message: "SafeLedger offers a physical office address for businesses that enhances their corporate presence. This service is ideal for receiving official mail and helps businesses maintain a professional image in the commercial market.",
        avatarUrl: image2.src,
    },
    {
        id: 3,
        name: "Dormant Company Account Service",
        message: "For companies not currently trading, SafeLedger provides services to handle and file dormant accounts, ensuring they meet Companies House requirements without the administrative burden, thus maintaining their good standing.",
        avatarUrl: image3.src,
    },
    {
        id: 4,
        name: "Company Dissolution Service",
        message: "SafeLedger supports businesses in the dissolution process, handling the necessary legal and procedural steps to wind up a company officially. This service ensures that all statutory obligations are met, making the dissolution as smooth and hassle-free as possible",
        avatarUrl: image1.src,
    },
    {
        id: 5,
        name: "Company Incorporation Service",
        message: "SafeLedger provides comprehensive support for setting up new companies in the UK. They handle all aspects of company formation, from filing with Companies House to ensuring legal compliance, making the incorporation process seamless and straightforward for entrepreneurs",
        avatarUrl: image2.src,
    },
    {
        id: 6,
        name: " VAT Registration Service",
        message: "SafeLedger assists businesses in registering for VAT, ensuring compliance with UK tax regulations. This service simplifies the VAT process for companies, guiding them through registration, documentation, and the submission of VAT returns, thereby facilitating smooth tax operations.",
        avatarUrl: image3.src,
    },
];

export const WeOffer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isDesktop = useMediaQuery('(min-width:600px)');
    const testimonialsPerPage = isDesktop ? 3 : 1;

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
    };

    return (
        <div className={`pb-5 ${styles.bg}`}>
            <p className='text-3xl text-center pt-10'>Quick Guide to Services <span className='text-indigo-600'>We Offer</span></p>
            <Box sx={{ position: 'relative', marginBottom: '16px' ,marginTop: '25px'}}>
                <IconButton sx={{ position: 'absolute', left: '-8%', top: '50%', transform: 'translateY(-50%)' }} onClick={prevTestimonial}>
                    <NavigateBeforeIcon />
                </IconButton>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-evenly', gap: '16px', overflowX: 'auto' }}>
                    {offers.map((offer, index) => (
                        (index >= currentIndex && index < currentIndex + testimonialsPerPage) && (
                            <Box key={offer.id} sx={{ maxWidth: 300, minWidth: 250, marginBottom: '16px', border: '1px solid #ccc', borderRadius: '15px' }}>
                                <Avatar alt={offer.name} src={offer.avatarUrl} sx={{ borderRadius: '15px 15px 0 0' }} className={`${styles.size}`} />
                                <div style={{ padding: '16px' }}>
                                    <Typography variant="subtitle1" className='sm:text-3xl text-blue-600 text-2xl'>
                                        {offer.name}
                                    </Typography>
                                    <Typography variant="body1" style={{ marginTop: '8px', marginBottom: '8px' }}>
                                        {offer.message}
                                    </Typography>
                                    <div className="flex justify-around items-center border border-sky-500 rounded-full">
                                        <p className="text-blue-600">Learn More</p>
                                        <div>
                                            <IconButton>
                                                <ArrowCircleRightIcon className='text-blue-600' />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </Box>
                        )
                    ))}
                </Box>
                <IconButton sx={{ position: 'absolute', right: '-8%', top: '50%', transform: 'translateY(-50%)' }} onClick={nextTestimonial}>
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </div>
    );
};
