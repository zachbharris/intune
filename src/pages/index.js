import React from 'react'
import Link from 'gatsby-link'
import Tune from '../components/tune'

const IndexPage = ({data}) => (
  <div className="container">
    <h1>InTune</h1>
    <div>
      {data.tuning.edges.map(tune => (
        <div key={tune.node.id}>
          <select>
            {tune.node.tuning.map(tuneType => (
              <Tune name={tuneType.name} tuning={tuneType.tunes} />
            ))}
          </select>
        </div>
      ))}
    </div>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query tuningQuery {
    tuning: allDataJson {
      edges {
        node {
          id
          tuning {
            name
            tunes
          }
        }
      }
    }
  }
`