import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchDrinks, showClear, clearDrinks, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter a drink', 'brown');
    } else {
      searchDrinks(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div className="row">
      <div className="col s12">
        <form onSubmit={onSubmit}>
          <div className="input-field col s12 l8">
            <i className="material-icons prefix">search</i>
            <input
              id="search_drink"
              type="text"
              className="validate"
              name="text"
              value={text}
              onChange={onChange}
            />
            <label htmlFor="search_drink">Search Drink</label>
          </div>
          <div className="input-field col s6 l2">
            <button className="btn waves-effect waves-light" type="submit">
              Search
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
        {showClear && (
          <div className="input-field col s6 l2">
            <button
              className="btn waves-effect waves-light red"
              onClick={clearDrinks}
            >
              Clear
              <i className="material-icons right">clear</i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  searchDrinks: PropTypes.func.isRequired,
  clearDrinks: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
