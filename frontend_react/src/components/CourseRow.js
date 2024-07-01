import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

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

const CourseRow = ({ children, sx }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const [isReversable, setIsReversable] = useState(false);
  const [isForwardable, setIsForwardable] = useState(children.length > 4);

  useEffect(() => {
    setIsReversable(startIndex > 0);
    setIsForwardable(endIndex < children.length - 1);
  }, [startIndex, endIndex, children]);

  const handleNext = () => {
    if (endIndex < children.length - 1) {
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
      {isReversable && (
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
        {children.slice(startIndex, endIndex + 1).map((element) => (
          <Box key={element.props.id}>{element}</Box>
        ))}
      </Box>
      {isForwardable && (
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

export default CourseRow;
