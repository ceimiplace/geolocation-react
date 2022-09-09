import React from "react";
import Spinner from "./Spinner";
import SeasonDisplAY from "./SeasonDisplay";
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("mounted");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }
  componentDidUpdate() {
    console.log("updated");
  }
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplAY lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>{this.state.errorMessage}</div>;
    }
    return <Spinner />;
  }
}
export default App;
