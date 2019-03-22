import React from "react"
import { css } from "@emotion/core"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data.swapi.allSpecies.length)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Star Wars Species List
        </h1>
        <h4>{data.swapi.allSpecies.length} Species</h4>
        <ul>
          {data.swapi.allSpecies.map(({ name }) => (
            // console.log(species)
            <Link to={`/${name.toLowerCase()}`}>
              <li>{name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    swapi {
      allSpecies {
        name
        classification
      }
    }
  }
`