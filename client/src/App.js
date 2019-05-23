import React from 'react';
import logo from './logo.svg';
import './App.css';
import Requester from "./service/Requester";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={Requester.getBaseUrl}/>
      </header>
    </div>
  );
}

export default App;
