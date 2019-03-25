import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Component1 from "../components/component1"
import Component3 from "../components/component3"

export default ({ data }) => {
  console.log('PROPS', data)
  const templateData = JSON.parse(data.marketing.marketingPage.data)
  console.log(templateData)
  return (
    <Layout>
      <div style={{backgroundColor: "pink"}} >
        <h1>This is Template 2</h1>
        {templateData.map(({ component, props }) => {
          switch (component) {
            case 'component1':
              return <Component1 props={props} />
            case 'component3':
              return <Component3 props={props} />
            default:
              return <div>Default!</div>
          }
        })}
      </div>
    </Layout>
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
