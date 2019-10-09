require(`dotenv`).config({
  path: `.env`,
})

console.log(process.env.CONTEXT, "process.env.CONTEXT");

const cfg = {
  siteMetadata: {
    siteTitle: `AnmolVajracharya`,
    siteTitleAlt: `Anmol Bajracharya - My Portfolio`,
    siteHeadline: `Emilia - Gatsby Theme from @lekoarts`,
    siteUrl: `https://www.anmolvajracharya.tk`,
    // Used for SEO
    siteDescription: `Portfolio/photography site of Anmol Bajracharya.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@anmol_vajracharya`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: 'anmol_vajracharya',
        location: 'Nepal',
        socialMedia: [{ title: `Instagram`, href: `https://www.instagram.com/anmol_vajracharya/` }],
        showThemeAuthor: false
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AnmolVajracharya - @anmol_vajracharya`,
        short_name: `AnmolVajracharya`,
        description: `Portfolio/photography site of Anmol Bajracharya.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};

if (process.env.CONTEXT === 'production') {
  const googleAnalyticsCfg = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_ID,
    },
  };
  cfg.plugins.push(googleAnalyticsCfg);
}
module.exports = cfg;