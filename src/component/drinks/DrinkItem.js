import React from 'react';
import PropTypes from 'prop-types';

const DrinkItem = ({ drink }) => {
  const {
    strDrink,
    strCategory,
    strDrinkThumb,
    strAlcoholic,
    strGlass,
    strInstructions
  } = drink;
  return (
    <div className="col s12 l4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img src={strDrinkThumb} alt={strDrink} className="activator" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {strDrink}
            <i className="material-icons right">more_vert</i>
          </span>
          <p>
            <strong>Category:</strong> {strCategory}
            <strong> Type of Drink:</strong> {strAlcoholic}
            <strong> Glass:</strong> {strGlass}
          </p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {strDrink}
            <i className="material-icons right">close</i>
          </span>
          <h5>Ingredients</h5>
          <ul className="collection">
            <li className="collection-item">Alvin</li>
            <li className="collection-item">Alvin</li>
            <li className="collection-item">Alvin</li>
            <li className="collection-item">Alvin</li>
          </ul>
          <h5>Instructions</h5>
          <p>{strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

DrinkItem.protoTypes = {
  drink: PropTypes.object.isRequired
};

export default DrinkItem;
