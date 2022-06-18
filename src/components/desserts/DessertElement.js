import { useContext } from "react";
import "./DessertElement.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import StarredContext from "../../context/starred-context";

function DessertElement(props) {
  const starredCtx = useContext(StarredContext);
  const itemIsStarred = starredCtx.itemIsStarred(props.name);

  const toggleStarredItemsHandler = () => {
    if (itemIsStarred) {
      starredCtx.removeStarred(props.name);
    } else {
      starredCtx.addStarred({
        name: props.name,
        image: props.image,
        recipe: props.recipe,
      });
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
            className={itemIsStarred ? `starred` : `not-starred`}
            onClick={toggleStarredItemsHandler}
          />
          <div></div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DessertElement;
