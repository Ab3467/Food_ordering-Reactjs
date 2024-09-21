import PropTypes from 'prop-types';

export default function MealsItems({ meal }) {
  return (
    <>
      <li className="meal-item"></li>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions"></p>
      </article>
    </>
  );
}

// Adding prop validation using prop-types
MealsItems.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
