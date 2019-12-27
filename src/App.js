import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Drinks from './components/drinks/Drinks';
import Search from './components/drinks/Search';
import About from './components/pages/About';
import axios from 'axios';
import M from 'materialize-css';

import './App.css';

const App = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      );
      setDrinks(res.data.drinks);
    };
    setLoading(true);
    fetchData();
    setLoading(false);
    M.AutoInit();
  }, []);

  const searchDrinks = async drink => {
    setLoading(true);
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    );
    if (res.data.drinks === null) {
      setAlert(`Sorry, your drink ${drink} is not found!`, 'brown');

      setLoading(false);
    } else {
      setDrinks(res.data.drinks);
      setLoading(false);
    }
  };

  const clearDrinks = () => {
    setDrinks([]);
    setLoading(false);
  };

  const setAlert = (msg, color) => {
    M.toast({ html: `${msg}`, classes: `${color}` });
  };

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
                    searchDrinks={searchDrinks}
                    clearDrinks={clearDrinks}
                    showClear={drinks.length > 0 ? true : false}
                    setAlert={setAlert}
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
};

export default App;
