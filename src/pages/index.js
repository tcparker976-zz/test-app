import React, { Component, Fragment } from "react"
import Helmet from "react-helmet"

class App extends Component {
  render() {
    return (
    <Fragment>
      <Helmet
        title="Test-Project"
        meta={[
          { name: 'google-site-verification', content: 'bCj3HhIqDlnOUnl8OuWzxcoPCcWXIYLNEI68kALtrKQ' }
        ]}
      />
      <div>
        <h1>Googlebot will always crawl</h1>
        <p>This is a test</p>
      </div>
    </Fragment>
    
    );
  }
}


export default App
