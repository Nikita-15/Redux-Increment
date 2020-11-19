import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  // state = {
  //   age: 21
  // };
  // onAgeUp = () => {
  //   this.setState({
  //     ...this.state,
  //     age: ++this.state.age
  //   });
  // };
  // onAgeDown = () => {
  //   this.setState({
  //     ...this.state,
  //     age: --this.state.age
  //   });
  // };
  render() {
    return (
      <div className="App">
        <div>
          Age : <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age DOWN</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    age: state.age
  };
};
const mapDispatchToProps = dispach => {
  return {
    onAgeUp: () => dispach({ type: "AGE_UP" }),
    onAgeDown: () => dispach({ type: "AGE_DOWN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
