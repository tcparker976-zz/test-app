import React, { Fragment, Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import Component1 from "../components/component1"
import Component2 from "../components/component2"

export default ({ data }) => {
  // console.log('DATA', data)
  const templateData = JSON.parse(data.marketing.marketingPage.data)
  // const metaData = JSON.parse(data.marketing.marketingPage.metaData)
  console.log('TEMPLATE DATA', templateData)
  return (
    <Fragment>
      <Helmet>
      </Helmet>
      <Layout>  
        <div style={{backgroundColor: "lightblue"}}>
          <h1>This is Template 1</h1>
          {templateData.map(({ component, props }) => {
            console.log('COMPONENT', component)
            console.log('PROPS', props)
            switch (component) {
              case 'component1':
                return <Component1 props={{...props}}/>
              case 'component2':
                return <Component2 props={{...props}}/>
              default:
                return <div>Default!</div>
            }
          })}
        </div>
      </Layout>
    </Fragment>

  )
}

export const query = graphql`
  query($keyword: String!) {
    marketing {
      marketingPage(keyword: $keyword) {
        data
        metadata
      }
    }
  }
`