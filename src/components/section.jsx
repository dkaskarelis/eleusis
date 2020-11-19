import React, {Component} from "react";
import ReactDom from "react-dom";
import Container from 'react-bootstrap/Container';

class Section extends Component {
  state = {
  	content: null,
  	sectionID: null,
  	theme: null

  }

  constructor(props) {
  	super(props);
  	this.state.content = props.content;
  	this.state.sectionID = props.sectionID;
  	this.state.theme = props.theme;
  }

  render() {
  	return(
      this.renderSection()
    );
  }

  renderSection() {
    return (
      <div className={"row min-vh-100 " + this.state.theme} id={this.state.sectionID}>
        <h1 style={{ color: 'white' }}>
          {this.state.content}
        </h1>
      </div>
    );
  }
}

export default Section;