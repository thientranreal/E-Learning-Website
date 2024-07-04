import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import CourseCard from "../components/CourseCard";

const CourseRow = ({ data, sx, title, description }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    smallDesktop: {
      breakpoint: { max: 1325, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 725 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 725, min: 0 },
      items: 1,
    },
  };

  return (
    <Box sx={{ ...sx, border: "1px solid #BBBCB6", p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "500" }}>
        {title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {description}
      </Typography>
      <Carousel
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {data.map((element) => (
          <CourseCard
            key={element.id}
            image={element.image}
            title={element.title}
            author={element.author}
            starRatings={element.starRatings}
            numberPeopelRate={element.numberPeopelRate}
          />
        ))}
      </Carousel>
    </Box>
  );
};

CourseRow.propTypes = {
  data: PropTypes.array.isRequired,
  sx: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CourseRow;
