import React, { Component, Fragment } from "react"

class Test extends React.Component {
  constructor() {
    super();
    this.state = { message: "" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: "Googlebot will always crawl"
      })
    }, 20000);
  }
  render() {
    return (
      <div>
        <h1>Test Page!!</h1>
        <h1>{ this.state.message }</h1>
      </div>
    )
  }
}
export default Test;