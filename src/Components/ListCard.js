import React from "react";
import { Card } from "react-bootstrap";

const ListCard = ({ el }) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "32rem" }}>
        <Card.Img style={{ height: "300px" }} variant="top" src={el.image} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListCard;
