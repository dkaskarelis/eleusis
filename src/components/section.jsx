import React, {Component} from "react";
import ReactDom from "react-dom";

class Section extends Component {
  state = {
  	content: null
  }

  constructor(props) {
  	super(props);
  	this.state.content = props.content;
  }

  render() {
  	return(
      this.renderSection()
    );
  }

  renderSection() {
    return (
      <div className="section fp-section">
        <p>
          {this.state.content}
        </p>
      </div>
    );
  }
}

export default Section;