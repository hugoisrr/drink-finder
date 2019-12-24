import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchDrinks: PropTypes.func.isRequired,
    clearDrinks: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter a drink', 'brown');
    } else {
      this.props.searchDrinks(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearDrinks } = this.props;
    return (
      <div className="row">
        <div className="col s12">
          <form onSubmit={this.onSubmit}>
            <div className="input-field col s12 l8">
              <i className="material-icons prefix">search</i>
              <input
                id="search_drink"
                type="text"
                className="validate"
                name="text"
                value={this.state.text}
                onChange={this.onChange}
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
  }
}

export default Search;
