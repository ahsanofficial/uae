"use client";
import { Avatar, Box, Button, Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import image1 from '../../../public/home/experts/imgae1.jpeg';
import image2 from '../../../public/home/experts/image2.jpeg';
import image3 from '../../../public/home/experts/image3.jpeg';
import styles from './style.module.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Expert {
    message: string;
}

const expert = [
    {
        id: 1,
        name: "1",
        avatarUrl: image1.src,
    },
    {
        id: 2,
        name: "2",
        avatarUrl: image2.src,
    },
    {
        id: 3,
        name: "3",
        avatarUrl: image3.src,
    },
    {
        id: 4,
        name: "4",
        avatarUrl: image2.src,
    },
];

const Experts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isDesktop = useMediaQuery('(min-width:600px)');
    const expertPerPage = isDesktop ? 3 : 1;
    const totalPages = Math.ceil(expert.length / expertPerPage);

    const nextTestimonial = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, totalPages - 1));
    };

    const prevTestimonial = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const truncateText = (text: string, maxWords: number): string => {
        const words = text.trim().split(/\s+/);
        return words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : text;
    };

    return (
        <div className={`flex sm:pt-6 lg:pt-6 ${styles.bg}`}>
            <Grid container spacing={2} className="justify-around items-center">
                <Grid item xs={12} sm={4} className='sm:pr-6 lg:pr-6'>
                    <div className='mt-10 '>
                        <h2 className="sm:text-4xl font-extrabold sm:text-3xl lg:text-3xl text-2xl">Connect with our <span className='text-green-600'>Experts</span> </h2>
                        <p className="mt-5">
                            Connect with our SafeLedger experts today to guide you through each phase of your business journey, ensuring compliance, efficiency, and growth. Let's make your business ambitions a reality.
                        </p>
                        <Button variant="outlined" className="font-medium px-5 rounded-full mt-4 mb-6 border border-green-700 text-green-700" fullWidth>Book Consultation</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8} className=' border border-lime-700 mt-10 rounded-2xl'>
                    <Box style={{ display: 'flex', alignItems: 'center', gap: '16px', overflowX: 'auto' }}>
                        <IconButton onClick={prevTestimonial} style={{ marginRight: 'auto' }} disabled={currentIndex === 0}>
                            <NavigateBeforeIcon />
                        </IconButton>
                        {expert.slice(currentIndex, currentIndex + expertPerPage).map((experts) => (
                            <Box key={experts.id} style={{ width: '320px', height: '100%', maxWidth: isDesktop ? '350px' : '100%', display: 'flex', flexDirection: 'column', marginBottom: '16px', padding: '16px', borderRadius: '20px' }}>
                                <Avatar alt={experts.name} src={experts.avatarUrl} style={{ width: 'auto', height: '130px' }} />
                                <Typography variant="subtitle1" className='sm:text-2xl text-2xl text-center mt-6'>
                                    - {experts.name}
                                </Typography>
                            </Box>
                        ))}
                        <IconButton onClick={nextTestimonial} style={{ marginLeft: 'auto' }} disabled={currentIndex + expertPerPage >= expert.length}>
                            <NavigateNextIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Experts;
