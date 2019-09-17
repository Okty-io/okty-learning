import React from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import NotFound from "./components/NotFound";
import Home from "./containers/Home";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
