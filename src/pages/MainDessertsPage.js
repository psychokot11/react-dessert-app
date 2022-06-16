import DessertsList from "../components/desserts/DessertsList";
import { useState, useEffect } from "react";
// import axios from "axios";

function MainDessertsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDesserts, setLoadedDesserts] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
    // axios
    //   .get("https://desserts-32c1a-default-rtdb.firebaseio.com/desserts.json")
    //   .then((response) => {
    //     setIsLoading(false);
    //     setLoadedDesserts(response.data);
    //     console.log(response);
    //   });

    setIsLoading(true);
    fetch("https://desserts-32c1a-default-rtdb.firebaseio.com/desserts.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const desserts = [];
        console.log(data);
        for (const key in data) {
          const dessert = {
            id: key,
            ...data[key],
          };
          desserts.push(dessert);
        }
        setIsLoading(false);
        setLoadedDesserts(desserts);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <div className="loading">Loading...</div>
        <img
          className="loadingImg"
          src="https://c.tenor.com/0V0nvU2bzY4AAAAd/alf-birthday-cake.gif"
          alt="loading"
        ></img>
      </section>
    );
  } else {
    return (
      <div className="MainDessertsPage">
        <DessertsList desserts={loadedDesserts} />
      </div>
    );
  }
}

export default MainDessertsPage;
