import React, {Component} from "react";
import ReactDom from "react-dom";
import Container from 'react-bootstrap/Container';
import logo from '../logo.png';
import Image from 'react-bootstrap/Image';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Logo extends Component {
  state = {
  }

  constructor(props) {
  	super(props);
  }

  render() {
  	return(
      this.renderLogo()
    );
  }

  renderLogo() {
    return (
      <Router>
      <div id='logocontainer' className='fixed-top' >
        <Link to="/">
          <Image src={logo} alt="Logo" />
        </Link>
      </div>
      </Router>
    );
  }
}

export default Logo;