import React from "react"
import { css } from "@emotion/core"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  // console.log(data.swapi.allSpecies.length)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Using Reusable Templates
        </h1>
        <h4>There are {data.marketing.allMarketingPages.length} Pages</h4>
        <ul>
          {data.marketing.allMarketingPages.map(({ url }, i) => (
            <Link key={`${i}`} to={url}>
              <li>{url.slice(1)}</li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  )
}




export const query = graphql`
  query {
    marketing{
      allMarketingPages {
        url
      }
    }
  }
`