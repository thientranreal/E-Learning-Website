import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import CourseCard from "../components/CourseCard";
import PropTypes from "prop-types";

const styleArrowBtn = {
  position: "absolute",
  top: "50%",
  bgcolor: "#2d2f31",
  color: "white",
  ":hover": {
    bgcolor: "#2d2f31",
    color: "white",
    opacity: "80%",
  },
};

const CourseRow = ({ data, sx }) => {
  const visibleCourses = 5;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);

  const handleNext = () => {
    if (endIndex < data.length - 1) {
      setStartIndex((prevIndex) => prevIndex + 1);
      setEndIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
      setEndIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <Box display="flex" position="relative" alignItems="center" sx={sx}>
      {data.length > visibleCourses && startIndex > 0 && (
        <IconButton
          onClick={handlePrev}
          sx={{
            left: 0,
            transform: "translate(-50%, -50%)",
            ...styleArrowBtn,
          }}
        >
          <ArrowBackIos />
        </IconButton>
      )}
      <Box
        width={1000}
        height={300}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        overflow="hidden"
      >
        {data.slice(startIndex, endIndex + 1).map((element) => (
          <CourseCard
            key={element.id}
            image={element.image}
            title={element.title}
            author={element.author}
            starRatings={element.starRatings}
            numberPeopelRate={element.numberPeopelRate}
          />
        ))}
      </Box>
      {data.length > visibleCourses && endIndex < data.length - 1 && (
        <IconButton
          onClick={handleNext}
          sx={{
            right: 0,
            transform: "translate(50%, -50%)",
            ...styleArrowBtn,
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      )}
    </Box>
  );
};

CourseRow.propTypes = {
  data: PropTypes.object,
  sx: PropTypes.object,
};

export default CourseRow;
