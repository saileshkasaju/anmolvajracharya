module.exports = {
  siteMetadata: {
    title: "ANMOLVAJRACHARYA - Portfolio site",
    author: "Anmol Bajracharya",
    description: "Portfolio of a photographer"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'anmolvajracharya',
        short_name: 'anmol',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
