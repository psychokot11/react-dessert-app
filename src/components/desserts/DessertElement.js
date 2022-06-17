import { useState } from "react";
import "./DessertElement.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function DessertElement(props) {
  const [isStarClicked, setIsStarClicked] = useState(false);
  const [starredClass, setStarredClass] = useState("not-starred");
  const handleFavourites = () => {
    if (!isStarClicked) {
      setIsStarClicked(true);
      setStarredClass("starred");
    } else {
      setIsStarClicked(false);
      setStarredClass("not-starred");
    }
  };

  return (
    <div className="DessertElement">
      <Card className="card" style={{ width: "22rem" }}>
        <Card.Img variant="top" src={props.image} className="card__img" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <a href={props.recipe} target="_blank" rel="noreferrer">
            <Button className="button">Go to recipe</Button>
          </a>
          <FontAwesomeIcon
            icon={faStar}
            className={starredClass}
            onClick={handleFavourites}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default DessertElement;
