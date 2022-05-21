import DessertElement from "./DessertElement";
import "./DessertsList.css";

function DessertsList(props) {
  return (
    <div className="DessertsList">
      {props.desserts.map((desert, index) => (
        <div key={index} className="cardList" md={4}>
          <DessertElement
            name={desert.name}
            image={desert.image}
            recipe={desert.recipe}
          />
        </div>
      ))}
    </div>
  );
}

export default DessertsList;
