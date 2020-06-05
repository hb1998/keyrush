import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypingComponent from './Components/TypingsComponent/TypingComponent';
import RaceComponent from './Components/RaceComponent/RaceComponent';

function App() {
  return (
    <div className="App">
      <RaceComponent/>
      <TypingComponent />
    </div>
  );
}

export default App;
