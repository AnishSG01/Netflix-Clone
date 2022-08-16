import React from "react";
import "./Home.scss";

const Home = () => {
  const Card = ({ image }) => <img src={image} className="card" alt="cover" />;

  const Row = ({
    title,
    arr = [
      {
        img: "https://assets.nflxext.com/us/boxshots/hd1080/81058097.jpg",
      },
      {
        img: "https://assets.nflxext.com/us/boxshots/hd1080/81058097.jpg",
      },
      {
        img: "https://assets.nflxext.com/us/boxshots/hd1080/81058097.jpg",
      },
      {
        img: "https://assets.nflxext.com/us/boxshots/hd1080/81058097.jpg",
      },
      {
        img: "https://assets.nflxext.com/us/boxshots/hd1080/81058097.jpg",
      },
      {
        img: "https://assets.nflxext.com/us/boxshots/hd1080/81058097.jpg",
      },
      {
        img: "https://assets.nflxext.com/us/boxshots/hd1080/81058097.jpg",
      },
    ],
  }) => (
    <div className="row">
      <h2>{title}</h2>

      <div className="cols">
        {arr.map((item) => (
          <Card image={item.img} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="home">
      <div className="banner"></div>

      <Row title={"Popular on Netflix"} />
      <Row title={"Movies"} />
      <Row title={"Recently Added"} />
    </div>
  );
};

export default Home;
