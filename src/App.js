import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainWarmingUp from './Components/WarmingUp/MainWarmingUp';
import MainObstacle from './Components/Obstacle/MainObstacle';
import MainAcceleration from './Components/Acceleration/MainAcceleration';

class App extends React.Component {
  render() {
    return (
     <div>
         <MainAcceleration/>
     </div>
    );
  }
}

export default App;
