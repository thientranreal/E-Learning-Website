import NotFoundImg from "../assets/images/404NotFound.png";
import { CardMedia, Container } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={NotFoundImg}
        alt="Not Found"
        sx={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Container>
  );
};

export default NotFoundPage;
