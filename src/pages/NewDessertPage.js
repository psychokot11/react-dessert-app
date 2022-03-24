import NewDessertForm from "../components/desserts/NewDessertForm";
import { useNavigate } from "react-router-dom";

function NewDessertPage() {
  const navigate = useNavigate();

  function handleNewMeetup(newDessertData) {
    fetch("https://desserts-api-default-rtdb.firebaseio.com/desserts.json", {
      method: "POST",
      body: JSON.stringify(newDessertData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <div className="NewDessertPage">
      <NewDessertForm onAddNewDessert={handleNewMeetup} />
    </div>
  );
}

export default NewDessertPage;
