module.exports = {
    siteMetadata: {
        siteUrl: `https://cinema-showtimes.github.io`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data/`,
            },
        },
        {
            resolve: 'gatsby-source-rest-api',            
            options: {
                name: 'cineworld-api',
                endpoints: [
                    "https://www.cineworld.co.uk/uk/data-api-service/v1/quickbook/10108/film-events/in-cinema/8045/at-date/2021-09-21"
                ],
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "G-V2XCHC5S55", // Google Analytics / GA
               // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
               // optimize_id: "OPT_CONTAINER_ID",
                anonymize_ip: true,
                cookie_expires: 0
              },
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: true,
                // Setting this parameter is also optional
                respectDNT: false,
                // Avoids sending pageview hits from custom paths
                //exclude: ["/preview/**", "/do-not-track/me/too/"],
              },
            },
          },
    ]
}