import React from "react";
import Spinner from "./Spinner";
import SeasonDisplAY from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  returnBody() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplAY lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>{this.state.errorMessage}</div>;
    }
    return (
      <Spinner
        className={"h-full w-full"}
        text={"Please allow our detection"}
      />
    );
  }
  render() {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        {this.returnBody()}
      </div>
    );
  }
}
export default App;
