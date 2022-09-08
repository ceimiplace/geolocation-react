import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }
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
      return <div> Latitude: {this.state.lat}</div>;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>{this.state.errorMessage}</div>;
    }
    return <div>Loading...</div>;
  }
}
export default App;
