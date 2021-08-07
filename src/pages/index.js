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
        <table key={item.node.id}>
          <thead>
            <tr>
              <th colSpan="2">{item.node.title}</th>
            </tr>
          </thead>
          <tbody>
            {item.node.showtimes.map(showtime => (
              <tr key={showtime.bookingid}>
                <td>Date</td><td><a target="_blank" href={"https://www.odeon.co.uk/ticketing/seat-picker/?showtimeId=" + showtime.bookingid}>{showtime.time}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
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
          time
          bookingid
        }
      }
    }
  }
}
`
export default IndexPage
