import * as React from "react"
import { graphql } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 5,
  maxWidth: 320,
}
const th = {
  paddingTop: "12px",
  paddingBottom: "12px",
  textAlign: "left",
  backgroundColor: "#04AA6D",
  color: "white"
}

const table = {
  width: "100%"
}




// markup
const IndexPage = ({ data }) => {


  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
       BFI IMAX Films
      </h1>
      {data.allFilmsYaml.edges.map(item => (
        <table style={table} key={item.node.id}>
          <tr>
            <th colSpan="2" style={th}>{item.node.title}</th>
          </tr>
          {item.node.showtimes.map(showtime => (
            <tr>
              <td>Date</td><td><a href={"https://www.odeon.co.uk/ticketing/seat-picker/?showtimeId=" + showtime.bookingid}>{showtime.time}</a></td>
            </tr>
          ))}


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
