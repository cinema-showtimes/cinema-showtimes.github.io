import * as  React from "react"
import { graphql } from "gatsby"
import "/src/styles/main.scss"
import Heading from "/src/components/heading"
import MovieCard from "/src/components/movie-card"

// markup
const IndexPage = ({ data }) => {
console.log(data);
  return (
    <main>
      <Heading title="BFI IMAX Films" />
      {data.allFilmsYaml.edges.map(item => (
        item.node.movies.map(movie=>(
          <MovieCard 
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
