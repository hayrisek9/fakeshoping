import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductListing from "./containers/productListing"
import Header from "./containers/header.js";
import "./App.css";
import ProductDetails from "./containers/productDetail"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;