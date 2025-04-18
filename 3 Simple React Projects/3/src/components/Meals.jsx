import React from "react";
import "../index.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <li>
      <section className="card">
        <img src={strMealThumb} alt={strMeal} />
        <section>
          <p>{strMeal}</p> <p>#{idMeal}</p>
        </section>
      </section>
    </li>
  ));

  return <div className="items-container">{itemslist}</div>;
};

export default Meals;
