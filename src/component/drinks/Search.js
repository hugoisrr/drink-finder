import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchDrinks(this.state.text);
    this.setState({ text: '' });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s10">
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
            <div className="input-field col s2">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Search
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
