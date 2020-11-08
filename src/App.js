import React, {Component} from "react";
import './App.css';
import Section from './components/section';
import Menu from './components/menu';


class App extends Component {
render() {
  return (
    <div id="fullpage" className="container">
      <Menu />
      <Section 
        content="passing content as argument" 
        sectionID="foo" 
        theme="bg-dark" 
      />
      <Section 
        content="Another dynamic section" 
        sectionID="bar" 
        theme="bg-primary" 
      />
      <Section 
        content="Booooring" 
        sectionID="zed"
        theme="bg-warning" 
      />
    </div>
    );
  }
}
export default App;
