import DessertsList from "../components/desserts/DessertsList";
import { useState, useEffect } from "react";
import axios from "axios";

function MainDessertsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDesserts, setLoadedDesserts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://infinite-waters-04259.herokuapp.com/desserts")
      .then((response) => {
        console.log(response.data);
        // const desserts = [response.data];
        setIsLoading(false);
        setLoadedDesserts(response.data);
        //console.log(desserts);
        console.log(loadedDesserts);
      });

    // setIsLoading(true);
    // fetch("https://www.recipetineats.com/easy-tiramisu/")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     const desserts = [];
    //     console.log(data);
    //     for (const key in data) {
    //       const dessert = {
    //         id: key,
    //         ...data[key],
    //       };
    //       desserts.push(dessert);
    //     }
    //     setIsLoading(false);
    //     setLoadedDesserts(desserts);
    // });
  }, []);

  if (isLoading) {
    return (
      <section>
        <div className="loading">Loading...</div>
        <img
          className="loadingImg"
          src="https://www.grandbazaarist.com/wp-content/uploads/2019/12/Turkish-Delight-Rose-Flavoured-buy.jpg"
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
