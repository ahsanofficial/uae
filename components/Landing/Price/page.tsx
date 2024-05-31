"use client";
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    IconButton,
    useMediaQuery
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styles from './style.module.css';

interface Testimonial {
    title: string;
    bgColor: string;
    midBgColor: string;
    textColor: string;
    midTextColor: string;
    btnBgColor: string;
    btnTextColor: string;
    startingFrom: string;
    features: string[];
}

const Price: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const isLargeScreen = useMediaQuery('(min-width:600px)');
    const testimonialsPerPage = isLargeScreen ? 3 : 1;

    const testimonials: Testimonial[] = [
        {
            title: 'Dubai Mainland',
            bgColor: 'bg-gray-200',
            midBgColor: 'bg-black',
            textColor: 'text-gray-600',
            midTextColor: 'text-white',
            btnBgColor: 'bg-white',
            btnTextColor: 'text-black',
            startingFrom: 'AED 11,000*',
            features: [
                '* Get all-inclusive licenses',
                '* Receive assistance with Corporate Banking',
                '* Avail FREE VAT Consultation',
                '* License Approval within 24hrs',
                '* Enjoy full business ownership',
            ],
        },
        {
            title: 'Free Zone',
            bgColor: 'bg-gray-200',
            midBgColor: 'bg-black',
            textColor: 'text-gray-600',
            midTextColor: 'text-white',
            btnBgColor: 'bg-white',
            btnTextColor: 'text-black',
            startingFrom: 'AED 14,900*',
            features: [
                '* Free VAT Consultation Included',
                '* Access to Dedicated Account Manager',
                '* IFZA & RAKEZ Options',
                '* Visa Assistance Provided',
                '* 100% Ownership Guaranteed'
            ],
        },
        {
            title: 'OffShore',
            bgColor: 'bg-gray-200',
            midBgColor: 'bg-black',
            textColor: 'text-gray-600',
            midTextColor: 'text-white',
            btnBgColor: 'bg-white',
            btnTextColor: 'text-black',
            startingFrom: 'AED 18,000*',
            features: [
                '* Registered Agent Services Available',
                '* 100% Ownership Assureds',
                '* UAE Offshore Company Formation',
                '* Starting from AED 18,000* only',
                '* Remote Licensing Option'
            ],
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % testimonials.length
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    const getDisplayedTestimonials = () => {
        const endIndex = currentIndex + testimonialsPerPage;
        if (endIndex > testimonials.length) {
            return [
                ...testimonials.slice(currentIndex, testimonials.length),
                ...testimonials.slice(0, endIndex - testimonials.length)
            ];
        }
        return testimonials.slice(currentIndex, endIndex);
    };

    const displayedTestimonials = getDisplayedTestimonials();
    const middleIndex = Math.floor(testimonialsPerPage / 2);

    return (
        <div className={`pt-16 ${styles.bg}`}>
            <Box style={{ margin: 'auto', padding: '16px', textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom className="mb-10">
                    As Our Client Says…
                </Typography>
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '16px',
                        overflowX: 'auto',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {displayedTestimonials.map((testimonial, index) => {
                        const isMiddle = index === middleIndex;
                        return (
                            <div
                                key={index}
                                className={`slider-slide ${styles.width}`}
                            >
                                <div
                                    className={`rounded-2xl ${isMiddle ? testimonial.midBgColor : testimonial.bgColor} py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16`}
                                >
                                    <div className={`mx-auto max-w-xs px-8 ${styles.price}`}>
                                        <Typography
                                            variant="body1"
                                            className={`text-base font-semibold ${isMiddle ? testimonial.midTextColor : testimonial.textColor}`}
                                        >
                                            {testimonial.title}
                                        </Typography>
                                        <div className="mt-6 items-baseline justify-center gap-x-2 text-left">
                                            <Typography variant="body2" className={`text-slate-400 text-sm ${isMiddle ? testimonial.midTextColor : testimonial.textColor}`}>
                                                Starting From
                                            </Typography>
                                            <span className="text-3xl font-bold tracking-tight text-rose-700">
                                                {testimonial.startingFrom}
                                            </span>
                                        </div>

                                        <ul className={`text-left mt-8 ${isMiddle ? 'text-white' : testimonial.textColor}`}>
                                            {testimonial.features.map(
                                                (feature, idx) => (
                                                    <li key={idx} className="text-xs pt-2">
                                                        {feature}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <Button
                                            variant="contained"
                                            className={`mt-10 block w-full ${testimonial.btnBgColor} ${testimonial.btnTextColor} px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full`}
                                        >
                                            Inquire Now
                                        </Button>
                                        <Typography
                                            variant="body2"
                                            className={`mt-6 text-xs leading-5 ${isMiddle ? 'text-white' : testimonial.textColor}`}
                                        >
                                            T&C Apply *
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Box>
                {testimonials.length > testimonialsPerPage && (
                    <div className="flex justify-center mt-4">
                        <IconButton onClick={handlePrev} aria-label="previous">
                            <NavigateBeforeIcon />
                        </IconButton>
                        <IconButton onClick={handleNext} aria-label="next">
                            <NavigateNextIcon />
                        </IconButton>
                    </div>
                )}
            </Box>
        </div>
    );
};

export default Price;
