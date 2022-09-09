import "./Spinner.css";
import React from "react";
class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="spinner-container"
        style={{ height: this.props.height, width: this.props.width }}
      >
        <div className="box"></div>
        <div className="text">{this.props.text}</div>
      </div>
    );
  }
}
export default Spinner;
