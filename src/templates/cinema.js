import * as  React from "react"
import { graphql } from "gatsby"
import "/src/styles/main.scss"
import Heading from "/src/components/heading"
import MovieCard from "/src/components/movie-card"
import { Helmet } from "react-helmet"

// markup
const CinemaPage = ({ data }) => {

  return (
    <main>
      <Helmet>
          <title>BFI IMAX showtimes | All Films</title>
      </Helmet>
      <Heading title={data.filmsYaml.title} />

      {data.filmsYaml.movies.map(movie=>(
        <MovieCard
          key ={movie.id} 
          id={movie.id}
          title={movie.title} 
          poster={movie.poster}
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

`
export default CinemaPage
