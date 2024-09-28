import UseHttp from "../hooks/UseHttp";
import Error from "./Error";
import MealsItems from "./MealsItems";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = UseHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching Melas...</p>;
  }

  if (error) {
    return <Error title="Failed to Fetch" messgae={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealsItems key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
