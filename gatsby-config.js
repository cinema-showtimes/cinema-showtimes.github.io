module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        cinemas: {
            odeon: {
                bookingUrl: "https://www.odeon.co.uk/ticketing/seat-picker/?showtimeId="
            },
            cineworld: {
                bookingUrl: ""
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
                name: 'cineworld-api',
                endpoints: [
                    "https://www.cineworld.co.uk/uk/data-api-service/v1/quickbook/10108/film-events/in-cinema/8045/at-date/2021-08-21"
                ],
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`
    ]
}