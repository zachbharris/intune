module.exports = {
  siteMetadata: { title: 'InTune' },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}
