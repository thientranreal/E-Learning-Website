import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import React from "react";

const CourseCard = ({
  image,
  title,
  author,
  starRatings,
  numberPeopelRate,
}) => {
  // Get integer part
  let integerPart = parseInt(starRatings);
  // Get decimal part
  let decimalPart = Number(Number(starRatings).toFixed(1).split(".")[1]);

  if (decimalPart <= 2) {
    decimalPart = 0;
  } else if (decimalPart >= 3 && decimalPart <= 8) {
    decimalPart = 0.5;
  } else {
    decimalPart = 0;
    integerPart += 1;
  }

  const starArr = new Array(5).fill(0);
  for (let i = 0; i < 5; i++) {
    integerPart = integerPart - 1;
    if (integerPart < 0) {
      if (decimalPart !== 0) {
        starArr[i] = decimalPart;
      }
      break;
    }
    starArr[i] = 1;
  }

  return (
    <Card sx={{ maxWidth: 300, mt: 5, ml: 5, p: 0.3 }}>
      <CardMedia
        component="img"
        alt="course-img"
        height="140"
        image={image}
        sx={{ border: "0.5px solid #ccc", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: "500" }}>
          {title}
        </Typography>
        <Typography sx={{ mb: 2 }} variant="body2" color="text.secondary">
          {author}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ mr: 0.5, fontWeight: "500" }}>
            {starRatings}
          </Typography>
          <Box sx={{ mr: 0.5 }}>
            {starArr.map((value, index) => {
              if (value === 1) {
                return (
                  <StarIcon
                    key={index}
                    fontSize="small"
                    sx={{ color: "#FFC107" }}
                  />
                );
              }
              if (value === 0) {
                return (
                  <StarOutlineIcon
                    key={index}
                    fontSize="small"
                    sx={{ color: "#FFC107" }}
                  />
                );
              } else {
                return (
                  <StarHalfIcon
                    key={index}
                    fontSize="small"
                    sx={{ color: "#FFC107" }}
                  />
                );
              }
            })}
          </Box>
          <Typography variant="body2" color="text.secondary">
            ({numberPeopelRate})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
