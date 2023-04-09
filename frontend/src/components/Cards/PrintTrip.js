import Timeline from "@mui/lab/Timeline";
import React, { useState, useEffect, useRef } from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from '@mui/material/Typography';

import IconButton from "@mui/material/IconButton";
import PrintIcon from "@mui/icons-material/Print";

import { useReactToPrint } from 'react-to-print';

const PrintTrip = React.forwardRef((props, ref) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'My Trip Timeline', // optional document title
    onBeforeGetContent: () => { // optional hook that can modify the printed content
      // do something before getting the content to print
    },
  });

  return (
    <div ref={ref}>
      <IconButton aria-label="delete" size="large" onClick={handlePrint}>
        <PrintIcon />
      </IconButton>
      <Timeline mode="horizontal" position="alternate" ref={componentRef}>
        {props?.results?.map((step, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              {index !== props.results.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <Typography variant="h6" component="span">
                    {step.placeName}
                  </Typography>
                  <Typography>{step.localisation}</Typography>
          </TimelineItem>
        ))}
      </Timeline>

    </div>
  );
});

export default PrintTrip;
