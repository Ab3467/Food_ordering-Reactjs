import UseHttp from "../hooks/UseHttp";
import MealsItems from "./MealsItems";

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = UseHttp('http://localhost:3000/meals')

  if(isLoading){
    return <p>Fetching Melas...</p>
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealsItems key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
