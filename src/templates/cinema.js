import * as  React from "react"
import { graphql } from "gatsby"
import "/src/styles/main.scss"
import Heading from "/src/components/heading"
import MovieCard from "/src/components/movie-card"

// markup
const CinemaPage = ({ data }) => {
console.log(data)
const item = data;
  return (
    <main>
      <Heading title="BFI IMAX Films" />
        <MovieCard 
          id={item.id}
          title={item.title} 
          length={item.length} 
          //props={item}
          synopsis={item.synopsis}
          genres={item.genres}
          showtimes={item.showtimes} 
          rating={item.rating}
        />
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
