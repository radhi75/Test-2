import React from "react";
import ListCard from "../ListCard";

const Home = ({ moviesData }) => {
  return (
    <div className="List">
      {moviesData.map((el) => (
        <ListCard el={el} />
      ))}
    </div>
  );
};

export default Home;
