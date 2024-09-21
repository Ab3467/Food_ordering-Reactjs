export default function MealsItems({ meal }) {
  return (
    <>
      <li className="meal-item"></li>
      <article>
        <img src={meal.image} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
            
        </p>
      </article>
    </>
  );
}
