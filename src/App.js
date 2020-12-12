import React from 'react';
import logo from './logo.svg';
import './App.css';
import useActiveToggle, { HelloWorld } from 'hello-world-react-npm-package-example';

function App() {
  const [isOn, setIsOn] = useActiveToggle();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorld name="Noby" />
        <button onClick={() => setIsOn(isOn => !isOn)}>Is active {`${isOn}`}</button>
      </header>
    </div>
  );
}

export default App;
