import React, { Component } from "react";
import Navbar from "./component/layout/Navbar";
import Drinks from "./component/drinks/Drinks";
import Search from "./component/drinks/Search";
import axios from "axios";
import M from "materialize-css";

import "./App.css";

class App extends Component {
  state = {
    drinks: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );

    this.setState({ drinks: res.data, loading: false });

    M.AutoInit();
  }

  searchDrinks = search_drink => {
    console.log("search_drink:", search_drink);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchDrinks={this.searchDrinks} />
          <Drinks drinks={this.state.drinks.drinks} />
        </div>
      </div>
    );
  }
}

export default App;
