import { useState } from "react";
import MealsItems from "./MealsItems"


export default function Meals() {
    const [loadedMeals,setLoadedMeals] = useState([]);
    async function fetchMeal(){
      let response = await fetch('http://localhost:3000/meals')

      let meals = response.json();
      setLoadedMeals(meals)
    }

  return (
    <div>
      {loadedMeals.map(meal => (
        <MealsItems key={meal.id} meal={meal}/>
      ))}
    </div>
  )
}
