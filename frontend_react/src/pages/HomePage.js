import React from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CourseCard
        image="Hello"
        title="test"
        author="tester"
        starRatings="3.9"
        numberPeopelRate="12000"
      />
    </div>
  );
};

export default HomePage;
