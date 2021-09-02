import * as  React from "react"
import { graphql } from "gatsby"
import "/src/styles/main.scss"
import Heading from "/src/components/heading"
import MovieCard from "/src/components/movie-card"
import { Helmet } from "react-helmet"

// markup
const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <main>
      <Helmet>
          <title>All Films</title>
      </Helmet>

      {data.allFilmsYaml.edges.map(item => (
        <div>
          <Heading title={item.node.title}></Heading>
          {item.node.movies.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
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
