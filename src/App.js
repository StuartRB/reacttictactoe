import logo from './logo.svg';
import './App.css';
import  React from 'react';
//import Game from './Game.js';
//import Conference from './Conference.js';
import Speakers from './Speakers.js';
import UseEffect from './UseEffect.js';

export const ConfigContext = React.createContext();

function App() {
  const configuration = {
    doAThing: false
  }

  return (
    <ConfigContext.Provider value={configuration}>
        <div>
            <Speakers />
        </div>
    </ConfigContext.Provider>
  );
}

export default App;
