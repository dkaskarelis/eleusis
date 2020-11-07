import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Section from './components/section';


class App extends Component {
render() {
  return (
    <div id="fullpage">
      <Section content={"passing content as argument"}/>
      <Section content={"Another dynamic section"}/>
      <Section content={"Booooring"}/>
      <div className="section">
        <div className="slide"> Slide 1 </div>
        <div className="slide"> Slide 2 </div>
        <div className="slide"> Slide 3 </div>
        <div className="slide"> Slide 4 </div>
      </div>
      <div className="section">
        <p>
          This is the second section
        </p>
      </div>    
      <div className="section">
        <p>
          This is the third section
        </p>
      </div>
      <div className="section">
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
          </header>
        </div>
      </div>
    </div>

    
  );
}
}
export default App;
