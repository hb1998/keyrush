import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypingComponent from './Components/TypingsComponent/TypingComponent';
import RaceComponent from './Components/RaceComponent/RaceComponent';
import { GlobalProvider } from './state/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <RaceComponent />
        <TypingComponent />
      </GlobalProvider>
    </div>
  );
}

export default App;
