import { useState, useContext } from "react";
import "./DessertElement.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import StarredContext from "../../context/starred-context";

function DessertElement(props) {
  const starredCtx = useContext(StarredContext);
  const itemIsStarred = starredCtx.itemIsStarred(props.name);

  const [starredClass, setStarredClass] = useState("not-starred");

  const toggleStarredItemsHandler = () => {
    if (itemIsStarred) {
      starredCtx.removeStarred(props.name);
      setStarredClass("not-starred");
    } else {
      starredCtx.addStarred({
        name: props.name,
        image: props.image,
        recipe: props.recipe,
      });
      setStarredClass("starred");
    }
    // if (!isStarClicked) {
    //   setIsStarClicked(true);
    //   setStarredClass("starred");
    // } else {
    //   setIsStarClicked(false);
    //   setStarredClass("not-starred");
    // }
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
            onClick={toggleStarredItemsHandler}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default DessertElement;
