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




// markup
const IndexPage = ({ data }) => {


  return (
    <main style={pageStyles}>
      <title>BFI IMAX Films</title>
      <h1 style={headingStyles}>
       BFI IMAX Films
      </h1>
      {/* {data.restApi.film} */}

    </main>
  )
}

// export const query = graphql`
// query MyQueryTest {
//     restApi {
//         film
//     }
//   }
// `

export default IndexPage
