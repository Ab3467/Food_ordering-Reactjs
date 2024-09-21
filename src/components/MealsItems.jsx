export default function MealsItems({ meal }) {
  return (
    <>
      <li className="meal-items"></li>
      <article>
        <img src={meal.image} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
        </div>
      </article>
    </>
  );
}
