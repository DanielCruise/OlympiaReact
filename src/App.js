import React from 'react';
import logo from './logo.svg';
import './App.css';
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
         <MainResultShowing/>
     </div>
    );
  }
}

export default App;
