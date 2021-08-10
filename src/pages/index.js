import * as React from "react"
import { graphql } from "gatsby"
import "/src/styles/main.scss"

// markup
const IndexPage = ({ data }) => {


  return (
    <main>
      <title>BFI IMAX Films</title>
      <h1>
        BFI IMAX Films
      </h1>
      {data.allFilmsYaml.edges.map(item => (
        <div key={item.node.id} className="movie-card">
          <div className="poster">
            <img src="https://via.placeholder.com/256x384" />
          </div>
          <div>
            <div class="title"><h2>{item.node.title}</h2></div>
            {item.node.showtimes.map(showtime => (
              <div key={showtime}>
                <div>{showtime.date}</div>
                <div>
                  {showtime.times.map(time => (
                    <a target="_blank" href={"https://www.odeon.co.uk/ticketing/seat-picker/?showtimeId=" + time.bookingid}>{time.time}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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
