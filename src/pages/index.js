import * as  React from "react"
import { graphql } from "gatsby"
import "/src/styles/main.scss"
import Heading from "/src/components/heading"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
//import 'react-tabs/style/react-tabs.scss';

// markup
const IndexPage = ({ data }) => {

  return (
    <main>
      <Heading title="BFI IMAX Films" />
      {data.allFilmsYaml.edges.map(item => (
        <div key={item.node.id} className="movie-card">
          <div className="left-panel">
            <img src="https://via.placeholder.com/256x384" />
          </div>
          <div className="right-panel">
            <h2 className="title">{item.node.title}</h2>
            <div className="classification">
              <span class="rating">12</span>
              <span class="length">{item.node.length}</span>
            </div>
            <ul className="categories">
              {item.node.genres.map(genre => (
                <li key={genre.genre.id}>{genre.genre}</li>
              ))}
            </ul>
            <div class="synopsis">
              {item.node.synopsis}
            </div>
            <Tabs>
              <TabList>
                {item.node.showtimes.map(showtime => (
                  <Tab key={showtime.id}>{showtime.date}</Tab>
                ))}
              </TabList>

              {item.node.showtimes.map(showtime => (
                <TabPanel key={showtime.id}>
                  {showtime.times.map(time => (
                    <a key={time.bookingid} target="_blank" href={"https://www.odeon.co.uk/ticketing/seat-picker/?showtimeId=" + time.bookingid}>{time.time}</a>
                  ))}
                </TabPanel>
              ))}
            </Tabs>
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
