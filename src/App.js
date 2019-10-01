import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import NotFound from './components/NotFound';
import Home from './containers/Home';
import Chapters from './containers/Chapters';
import Chapter from './containers/Chapter';
import Lesson from "./containers/Lesson";
import { connect } from "react-redux";
import { updateLocale } from "./redux/actions/locale";
import Navigator from "./containers/Navigator";

class App extends React.Component {
    switchLocale = () => {
        const locale = this.props.locale === 'fr_FR' ? 'en_US' : 'fr_FR';

        console.log(this.props  );

        this.props.updateLocale(locale, this.props.history);
    }

    render() {
        return (
            <BrowserRouter>
                <Header onSwitchLocale={this.switchLocale} locale={this.props.locale}/>
                <Navigator/>
                <Switch>
                    <Redirect exact from="/" to="/en"/>
                    <Route path="/:locale(en|fr)">
                        <Switch>
                            <Route exact path={`/:locale(en|fr)/`} component={Home}/>
                            <Route exact path={`/:locale(en|fr)/chapters`} component={Chapters}/>
                            <Route exact path={`/:locale(en|fr)/chapters/:chapterId`} component={Chapter}/>
                            <Route exact path={`/:locale(en|fr)/chapters/:chapterId/lessons/:lessonId`}
                                   component={Lesson}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Route>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {

    const { locale } = state.localeReducer;

    return { locale }
}

const mapDispatchToProps = dispatch => ({
    updateLocale: (locale) => dispatch(updateLocale(locale, dispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
