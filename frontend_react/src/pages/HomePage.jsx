import Navbar from "../components/Navbar";
import CourseRow from "../components/CourseRow";
import { Container } from "@mui/material";

const data = [
  {
    id: "1",
    image: "Hello",
    title: "test",
    author: "tester",
    starRatings: "3.9",
    numberPeopelRate: "12000",
  },
  {
    id: "2",
    image: "Hello2",
    title: "test2",
    author: "tester2",
    starRatings: "3.9",
    numberPeopelRate: "12000",
  },
  {
    id: "3",
    image: "Hello3",
    title: "test3",
    author: "tester3",
    starRatings: "3.9",
    numberPeopelRate: "12000",
  },
  {
    id: "4",
    image: "Hello4",
    title: "test4",
    author: "tester4",
    starRatings: "3.9",
    numberPeopelRate: "12000",
  },
  {
    id: "5",
    image: "Hello5",
    title: "test5",
    author: "tester5",
    starRatings: "3.9",
    numberPeopelRate: "12000",
  },
  {
    id: "6",
    image: "Hello6",
    title: "test6",
    author: "tester6",
    starRatings: "3.9",
    numberPeopelRate: "12000",
  },
];

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        <CourseRow
          sx={{ mt: 5 }}
          data={data}
          title="Title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo
        blanditiis quam eos quos? Nihil aut quia libero minima, explicabo non
        voluptates alias! Ipsa cumque iure doloremque, sunt atque vero."
        />
      </Container>
    </div>
  );
};

export default HomePage;
