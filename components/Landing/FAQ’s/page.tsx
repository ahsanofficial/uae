import { Accordion, AccordionDetails, AccordionSummary, Button, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './style.module.css';
const Faq = () => {


    return (
        <div className={`${styles.bg}  sm:rounded-b-3xl`}>
            <Typography variant='h5' className='text-white text-center pt-6'>Frequently asked questions (FAQ’s)</Typography>
            <div className={`${styles.back} pt-6 sm:px-6 lg:px-6`}>
                <Accordion className='mt-6' defaultExpanded={true} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q1. How to start a business in Dubai?
                    </AccordionSummary>
                    <AccordionDetails className='text-white'>
                        Starting a business in Dubai involves choosing the right location tailored to your business needs. Dubai offers various zones for business setup, including mainland, free zone, and offshore. Each zone caters to specific requirements, so businesses must carefully select the most suitable location for their operations.                    </AccordionDetails>
                </Accordion>
                <Accordion className='mt-6' defaultExpanded={true} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q2. What are the different types of business entities I can establish in the UAE?
                    </AccordionSummary>
                    <AccordionDetails className='text-white'>
                        The UAE offers several business structures, including a Limited Liability Company (LLC), a Free Zone Company, a Branch Office, and a Representative Office.                    </AccordionDetails>
                </Accordion>

                <Accordion className='mt-6' defaultExpanded={true} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >Q3. How To Get an Investor Visa In Dubai? </AccordionSummary>
                    <AccordionDetails className='text-white'>
                        Obtaining an investor visa in Dubai offers numerous advantages and favourable conditions, making it an attractive option for expatriates worldwide. While individual preferences may vary, Dubai's overall appeal as a destination stems from its diverse opportunities and advantageous environment.                    </AccordionDetails>
                </Accordion>
                <Accordion className='mt-6' defaultExpanded={true} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q4. What is a Free Zone Company, and what are its advantages?
                    </AccordionSummary>
                    <AccordionDetails className='text-white'>
                        A Free Zone Company is a business entity established within one of the many free zones in the UAE. It offers 100% foreign ownership, tax exemptions, and easy company setup procedures.
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mt-6' defaultExpanded={true} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q5. What are the requirements for setting up a business in a UAE-free zone?
                    </AccordionSummary>
                    <AccordionDetails className='text-white'>
                        Requirements vary depending on the free zone but generally include selecting a business activity, choosing a company name, obtaining a trade license, and leasing office space within the designated free zone.                    </AccordionDetails>
                </Accordion>
                <Accordion className='mt-6 mb-6' defaultExpanded={true} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q6. Can foreigners own 100% of a business in the UAE?</AccordionSummary>
                    <AccordionDetails className='text-white'>
                        Yes, in certain free zones, foreigners can own 100% of their business without the need for a local sponsor or partner.                    </AccordionDetails>
                </Accordion>

                <Accordion className='mt-6' defaultExpanded={true} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >Q7. How long does it take to set up a business in the UAE? </AccordionSummary>
                    <AccordionDetails className='text-white'>
                        The time frame varies depending on the type of business and the location (mainland or free zone), but it generally takes between 1 and 4 weeks.</AccordionDetails>
                </Accordion>
                <Accordion className='mt-6' defaultExpanded={true} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q8. Can an Indian set up a company in Dubai?
                    </AccordionSummary>
                    <AccordionDetails className='text-white'>
                        Absolutely! Indians can certainly set up their own companies in Dubai. With its strategic location, ample raw materials, and a highly skilled workforce, the UAE offers an ideal environment for business. Setting up a company in Dubai has become simpler because of Safe Ledger.                    </AccordionDetails>
                </Accordion>
                <Accordion className='mt-6' defaultExpanded={true} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q9. How do you start a business in a free Dubai zone?                    </AccordionSummary>
                    <AccordionDetails className='text-white'>
                        Setting up a business in a free zone involves several key steps:
                        <ul>
                            <ListItem>Identify the type of legal entity you want to establish.</ListItem>
                            <ListItem>Select a trade name for your business.</ListItem>
                            <ListItem>Submit an application for a business license.</ListItem>
                            <ListItem>Choose suitable office space within the free zone.</ListItem>
                            <ListItem>Obtain necessary pre-approvals, register your business, and acquire your license.</ListItem>

                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='mt-6 mb-6' defaultExpanded={true} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Q10. How much does it cost to open a company in the UAE?
                    </AccordionSummary>
                    <AccordionDetails className='text-white'>
                        The cost of starting a company in the UAE depends on factors such as the business structure and location. Costs usually encompass license fees, registration fees, immigration fees, office rent, and other operational expenses. For precise information, it's advisable to consult professionals at Safe Ledger.                        </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}
export default Faq;