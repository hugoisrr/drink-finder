import React from 'react';
import DrinkItem from './DrinkItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Drinks = ({ drinks, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="row">
        {drinks.map(drink => (
          <DrinkItem key={drink.idDrink} drink={drink} />
        ))}
      </div>
    );
  }
};

Drinks.propTypes = {
  drinks: PropTypes.array.isRequired
};

export default Drinks;
