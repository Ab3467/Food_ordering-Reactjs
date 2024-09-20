import { useState, useEffect } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  

  useEffect(() => {
    async function fetchMeals() {
        const response = await fetch("http//localhost:3000/meals");
        const meals = response.json();
        setLoadedMeals(meals);
        setLoadedMeals()
      }
   fetchMeals()
  }, [])
  

  return (
    <div>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </div>
  );
}
