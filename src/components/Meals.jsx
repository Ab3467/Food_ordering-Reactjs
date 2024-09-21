import { useState, useEffect } from "react";
import MealsItems from "./MealsItems.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //..
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <div>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealsItems meal={meal} key={meal.id} />
        ))}
      </ul>
    </div>
  );
}
