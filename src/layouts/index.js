import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'InTune is the simplest method for finding six-string guitar tunings ranging from standard to drop-c' },
        { name: 'keywords', content: 'guitar, guitar tuning, tuning, standard tuning, drop-d tuning, drop-c tuning, drop tuning' },
      ]}
    />
      {children()}
    < Footer / >
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
