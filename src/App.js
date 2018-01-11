import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DropListSections from "./Components/GeneralRendering/DropListSections";
import MainWarmingUp from './Components/WarmingUp/MainWarmingUp';
import MainObstacle from './Components/Obstacle/MainObstacle';
import MainAcceleration from './Components/Acceleration/MainAcceleration';
import MainFinishing from './Components/Finishing/MainFinishing';
import MainExtraSection from './Components/ExtraSection/MainExtraSection';
import MainResultShowing from './Components/ResultShowing/MainResultShowing';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <DropListSections/>
                        <Switch>
                            <Route exact path="/" component={MainWarmingUp}/>
                            <Route exact path="/warming-up" component={MainWarmingUp}/>
                            <Route exact path="/obstacle" component={MainObstacle}/>
                            <Route exact path="/acceleration" component={MainAcceleration}/>
                            <Route exact path="/finishing" component={MainFinishing}/>
                            <Route exact path="/extra-section" component={MainExtraSection}/>
                            <Route exact path="/result-showing" component={MainResultShowing}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
