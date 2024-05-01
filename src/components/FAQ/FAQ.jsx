import * as React from "react";
import { useState } from "react"; // Added useState import
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import styles from "./FAQ.module.css";

const accordionData = [
  {
    header: "Do I need a personal injury report?",
    summary: "Accordian 1 Summary",
    content: `Amet minim mollit non deserunt ullamco est sit
    aliqua dolor do amet sint. Velit officia consequatduis
    enim velit mollit Exer. Amet minim mollit non deserunt
    ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer`,
  },
  {
    header: "How much is my case worth?",
    summary: "Accordian 2 Summary",
    content: `Amet minim mollit non deserunt ullamco est sit
    aliqua dolor do amet sint. Velit officia consequatduis
    enim velit mollit Exer. Amet minim mollit non deserunt
    ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer`,
  },
  {
    header: "What should I do right after car accident?",
    summary: "Accordian 3 Summary",
    content: `Amet minim mollit non deserunt ullamco est sit
    aliqua dolor do amet sint. Velit officia consequatduis
    enim velit mollit Exer. Amet minim mollit non deserunt
    ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer`,
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  // Render accordion components dynamically based on accordionData
  const renderAccordions = () => {
    return accordionData.map((item, index) => (
      <Accordion
        key={index}
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
        className={styles.accordianContainer}
      >
        <AccordionSummary
          expandIcon={
            expanded === `panel${index}` ? (
              <RemoveCircleOutlinedIcon
                sx={{ color: "var(--color-primary)" }}
              />
            ) : (
              <AddCircleOutlinedIcon sx={{ color: "var(--color-primary)" }} />
            )
          }
          aria-controls={`panel${index}a-content`}
          id={`panel${index}a-header`}
          className={styles.accordianSummary}
        >
          {item.header}
        </AccordionSummary>
        <AccordionDetails className={styles.accordianDetails}>
          {item.content}
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>FAQ</h1>
      </div>
      <div className={styles.accordiansDetails}>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div className={styles.accordiansContainer}>{renderAccordions()}</div>
      </div>
    </div>
  );
};

export default FAQ;
