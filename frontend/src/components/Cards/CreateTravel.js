import React, { useState, useEffect, useRef } from "react";

import Geocoder from "../../services/googleRequest";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import IconButton from "@mui/material/IconButton";
import PrintIcon from "@mui/icons-material/Print";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from '@mui/material/Typography';

import { useReactToPrint } from "react-to-print";

async function getAddress(adresse) {
  const results = [];
  try {
    const array = Array.isArray(adresse) ? adresse : [adresse];
    for (let i = 0; i < array.length; i++) {
      const lat = array[i].lat || array[i].latitude;
      const lng = array[i].lng || array[i].longitude;
      const response = await Geocoder.geocode(lat, lng);

      const result = response.results[0];
      const addressComponents = result.address_components;

      const localisation = result.formatted_address;

      let placeName = "";
      for (let component of addressComponents) {
        if (
          component.types.includes("establishment") ||
          component.types.includes("point_of_interest")
        ) {
          placeName = component.long_name;
          break;
        }
      }
      results.push({ placeName, localisation });
    }
  } catch (error) {
    console.error(error);
  }
  return results;
}

const Travel = React.forwardRef((props, ref) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "My Trip Timeline", // optional document title
    onBeforeGetContent: () => {
      // optional hook that can modify the printed content
      // do something before getting the content to print
    },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAddress(props?.coordonnees);
        setResults(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [props?.coordonnees]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDelete = (index) => {
    const newResults = [...results];
    newResults.splice(index, 1);
    setResults(newResults);
    props.supprimerCoordonnees(index)
  };

  return (
    <div ref={ref}>
      <IconButton aria-label="delete" size="large" onClick={handlePrint}>
        <PrintIcon />
      </IconButton>
      {Array.isArray(results) && (
        <Timeline mode="horizontal" position="alternate" ref={componentRef}>
          {results.map(function (step, index) {
            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  {index !== results.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  {" "}
                  <Typography variant="h6" component="span">
                    {step.placeName}
                  </Typography>
                  <Typography>{step.localisation}</Typography>
                </TimelineContent>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </TimelineItem>
            );
          })}
        </Timeline>
      )}
    </div>
  );
});

export default Travel;
