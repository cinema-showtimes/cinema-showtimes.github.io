import * as  React from "react"
import { graphql } from "gatsby"
import "/src/styles/main.scss"
import Heading from "/src/components/heading"
import MovieCard from "/src/components/movie-card"
import { Helmet } from "react-helmet"

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <Helmet>
          <title>ODEON BFI IMAX Cinema showtimes | All Films</title>
          <meta property="og:title" content="ODEON BFI IMAX Cinema showtimes | All Films" />
          <meta name="description" content="Book all films directly available for the Odeon BFI IMAX Cinema. Choose the film and showing of your choice." />
          <meta property="og:description" content="Book all films directly available for the Odeon BFI IMAX Cinema. Choose the film and showing of your choice." />
          <meta property="og:locale" content="en_GB" />
          <meta name="robots" content="index,follow" />
          <meta http-equiv="content-language" content="en-gb" />
          <html lang="en" />
      </Helmet>

      {data.allFilmsYaml.edges.map(item => (
        <div>
          <Heading title="ODEON BFI IMAX"></Heading>
          {item.node.movies.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster={movie.poster}
              title={movie.title}
              length={movie.length}
              props={movie}
              synopsis={movie.synopsis}
              genres={movie.genres}
              showtimes={movie.showtimes}
              rating={movie.rating}
            />
          ))
          }
        </div>
      ))
      }
    </main>
  )
}

export const query = graphql`
query MovieQuery {
  allFilmsYaml {
    edges {
      node {
        id
        title
        slug
        movies {
          id
          title
          length
          poster
          synopsis
          rating
          genres {
            genre
          }
          showtimes {
            date
            times {
              time
              bookingid
            }          
          }
      }
      }
    }
  }
}
`
export default IndexPage
