import React from 'react';
import './faq.scss';
import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <div className="about">
            <div className="marginer"></div>
            <div className="content">
                <div className="header">
                    Часто задаваемые вопросы
                </div>
                <div className="mainContent">
                    <Box>
                        <Accordion defaultExpanded className='bub'>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography color='#808080' variant="h5">
                                    An Important Question
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color='#606060'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded className='bub'>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography color='#808080' variant="h5">
                                    Another Important Question
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color='#606060'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded className='bub'>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography color='#808080' variant="h5">
                                    Your Favorite Question
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color='#606060'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded className='bub'>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography color='#808080'  variant="h5">
                                    Some Random Question
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color='#606060'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded className='bub'>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography color='#808080' variant="h5">
                                    The Final Question
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography color='#606060'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Faq;