import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.value
  };

  // constructor() {
  //   super()
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatvalue() {
    const { value } = this.state;
    return value === 0 ? <h2>Zero</h2> : value;
  }

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button
          onClick={() => this.doHandleIncrement()}
          className="btn btn-primary btn-lg m-2"
        >
          Increment
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger btn-lg">
          Delete
        </button>
      </div>
    );
  }
}
