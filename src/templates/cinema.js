import * as  React from "react"
import { graphql } from "gatsby"
import "/src/styles/main.scss"
import Heading from "/src/components/heading"
import MovieCard from "/src/components/movie-card"

// markup
const CinemaPage = ({ data }) => {

  return (
    <main>
      <Heading title={data.filmsYaml.title} />

      {data.filmsYaml.movies.map(movie=>(
        <MovieCard
          key ={movie.id} 
          id={movie.id}
          title={movie.title} 
          length={movie.length} 
          synopsis={movie.synopsis}
          genres={movie.genres}
          showtimes={movie.showtimes} 
          rating={movie.rating}
        />
      ))
      }
    </main>
  )
}

export const query = graphql`
query MyQuery($id: String) {
  filmsYaml(id: {eq: $id}) {
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

`
export default CinemaPage
