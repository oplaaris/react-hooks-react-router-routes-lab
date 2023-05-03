import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return <div>{
    function NavBar(){return(  
      <div className="navbar">
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/movies">Movies</NavLink>
        <NavLink to ="/directors">Directors</NavLink>
        <NavLink to ="/actors">Actors</NavLink>
       </div>
    )}
    }</div>;
}


export default App;
