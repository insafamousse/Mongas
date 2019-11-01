import React from "react";
import "./App.css";

import BookList from "./components/bookslist";
import NavMenu from "./components/navbar";
import Edit from "./components/editbook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./components/addbook";
import Header from "./components/Header/Header.js";
import HeaderLinks from "./components/Header/HeaderLinks.js";

import LandingPage from './views/LandingPage/LandingPage'



const dashboardRoutes = ['/dsf'];


function App(props) {
// const { ...rest } = props;
  return (
    <Router>
        <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="MANGA-SEKAI"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/mangas" component={BookList} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/add" component={Add}/>
          
        </Switch>
    </Router>
  );
}

export default App;
