import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import fetchAlone2 from "../services/FetchAlone";

const Card2 = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          movie={props.movie}
          src={props.poster}
          alt="Card image cap"
        />

        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <input className="titulo" defaultValue="test" />
          <Button onClick={() => fetchAlone2(props.movie)}>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card2;
