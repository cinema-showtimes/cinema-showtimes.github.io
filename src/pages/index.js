import * as  React from "react"
import { graphql } from "gatsby"
import "/src/styles/main.scss"
import Heading from "/src/components/heading"
import FilmPoster from "/src/components/film-poster"
import MovieCard from "/src/components/movie-card"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
//import 'react-tabs/style/react-tabs.scss';

// markup
const IndexPage = ({ data }) => {

  return (
    <main>
      <Heading title="BFI IMAX Films" />
      {data.allFilmsYaml.edges.map(item => (
        <MovieCard 
          id={item.node.id}
          title={item.node.title} 
          length={item.node.length} 
          props={item.node}
          synopsis={item.node.synopsis}
          genres={item.node.genres}
          showtimes={item.node.showtimes} 
        />
      ))
      }
    </main>
  )
}

export const query = graphql`
query MyQuery {
  allFilmsYaml {
    edges {
      node {
				id
        title
        length
        synopsis
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
`
export default IndexPage
