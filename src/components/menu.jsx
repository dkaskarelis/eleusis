import React, {Component} from "react";
import ReactDom from "react-dom";
import Nav from 'react-bootstrap/Nav'

class Menu extends Component {
  state = {
  	content: null,
  }

  constructor(props) {
  	super(props);
  	this.state.content = props.content;
  }

  render() {
  	return(
      this.renderMenu()
    );
  }

  renderMenu() {
    return (
<Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="#foo">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#bar">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="#zed">
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>

    );
  }
}

export default Menu;