import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import NotFound from './components/NotFound';
import Home from './containers/Home';
import Chapters from './containers/Chapters';
import Chapter from './containers/Chapter';
import Lesson from "./containers/Lesson";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Redirect exact from="/" to="/en"/>
                <Route path="/:locale(en|fr)">
                    <Switch>
                        <Route exact path={`/:locale(en|fr)/`} component={Home}/>
                        <Route exact path={`/:locale(en|fr)/chapters`} component={Chapters}/>
                        <Route exact path={`/:locale(en|fr)/chapters/:chapterId`} component={Chapter}/>
                        <Route exact path={`/:locale(en|fr)/chapters/:chapterId/lessons/:lessonId`} component={Lesson}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Route>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
