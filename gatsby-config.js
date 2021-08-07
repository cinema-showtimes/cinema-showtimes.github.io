module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        cinemas : {
            odeon: {
                bookingUrl : "https://www.odeon.co.uk/ticketing/seat-picker/?showtimeId="
            },
            cineworld : {
                bookingUrl : ""
            }
        }
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
              endpoints: [
                "https://crimson-thunder-0139.arsenalhistory.workers.dev/"
              ],
            },
          },
    ]
}