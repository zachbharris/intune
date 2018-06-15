import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div className="container">
    <h1>InTune</h1>
    <div className="container">
      {data.tuning.edges.map(tune => (
        <div key={tune.node.id}>
          {tune.node.tuning.map(tuneTypes => (
            <div className="container">
              <p>{tuneTypes.name}</p>
              <ul>
                <li>{tuneTypes.tunes[0]}</li>
                <li>{tuneTypes.tunes[1]}</li>
                <li>{tuneTypes.tunes[2]}</li>
                <li>{tuneTypes.tunes[3]}</li>
                <li>{tuneTypes.tunes[4]}</li>
                <li>{tuneTypes.tunes[5]}</li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
)

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

export default IndexPage
