import React, { Component } from "react"

class App extends Component {
  componentDidMount() {
    const tag = document.createElement('meta')
    tag.setAttribute("name", "google-site-verification")
    tag.setAttribute("content", "bCj3HhIqDlnOUnl8OuWzxcoPCcWXIYLNEI68kALtrKQ")
    document.head.append(tag)
  }
  render() {
    return (
     <div>
        <h1>Googlebot will always crawl</h1>
        <p>This is a test</p>
      </div>
    );
  }
}


export default App
