import React from "react";
import StaticPage from "./components/staticPage";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () =>{
    return (

<Router>
<Switch>
  <Route path="/staticPage">
    <StaticPage />
    </Route>
    <Route path="/">
    <App />
  </Route>
</Switch>
</Router>
    );
}
export default Routing;