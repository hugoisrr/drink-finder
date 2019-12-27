import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Drinks from './components/drinks/Drinks';
import Search from './components/drinks/Search';
import About from './components/pages/About';
import axios from 'axios';
import M from 'materialize-css';

import './App.css';

class App extends Component {
  state = {
    drinks: [],
    loading: false
  };

  async componentDidMount() {
    // Get random drink
    this.setState({ loading: true });

    const res = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    );

    // console.log(res.data.drinks);

    this.setState({ drinks: res.data.drinks, loading: false });

    M.AutoInit();
  }

  searchDrinks = async drink => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    );
    if (res.data.drinks === null) {
      this.setAlert(`Sorry, your drink ${drink} is not found!`, 'brown');
      this.setState({ loading: false });
    } else {
      this.setState({ drinks: res.data.drinks, loading: false });
    }
  };

  clearDrinks = () => this.setState({ drinks: [], loading: false });

  setAlert = (msg, color) => {
    M.toast({ html: `${msg}`, classes: `${color}` });
  };

  render() {
    const { drinks, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchDrinks={this.searchDrinks}
                      clearDrinks={this.clearDrinks}
                      showClear={drinks.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Drinks drinks={drinks} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
