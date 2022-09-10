import "./Spinner.css";
import React from "react";
class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`spinner-container w-full h-full flex flex-col justify-center items-center bg-slate-700 text-white gap-10 ${this.props.className} `}
      >
        <div className="box h-24 w-24 border-white border-8 border-t-emerald-400 rounded-full animate-spin"></div>
        <div className="text font-bold">{this.props.text}</div>
      </div>
    );
  }
}
Spinner.defaultProps = { text: "Loading..." };
export default Spinner;
