import React, {Component} from "react";
import './App.css';
import Section from './components/section';
import Menu from './components/menu';
import Container from 'react-bootstrap/Container';
import ReactDOM from 'react-dom';

class App extends Component {
render() {
  return (
      <Container fluid bsPrefix>
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
    </Container>
    );
  }
}
export default App;
