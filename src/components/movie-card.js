import * as React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import FilmPoster from "/src/components/film-poster"
import Moment from 'react-moment';
import "/src/styles/movie-card.scss"


const MovieCard = (props) => {
  return (
    <div key={props.id} className="movie-card">
      <div className="left-panel">
        <FilmPoster src={props.poster} alt={props.title} />
      </div>
      <div className="right-panel">
        <h2 className="title">{props.title}</h2>
        <div className="classification">
          <span className={"rating r"+ props.rating}></span>
          <span className="length">{props.length}</span>
        </div>
        <ul className="categories">
          
          {props.genres && props.genres.map(genre => (
            <li key={genre.genre.id}>{genre.genre}</li>
          ))}
        </ul>
        <div className="synopsis">
          {props.synopsis}
        </div>
        <Tabs>
          <TabList>
            {props.showtimes && props.showtimes.map(showtime => (
              <Tab key={showtime.date}>
                <Moment format="ddd DD MMM">
                {showtime.date}
                </Moment>
                </Tab>
            ))}
          </TabList>

          {props.showtimes && props.showtimes.map(showtime => (
            <TabPanel key={showtime.id}>
              {showtime.times.map(time => (
                <a key={time.bookingid} target="_blank" href={"https://www.odeon.co.uk/ticketing/seat-picker/?showtimeId=" + time.bookingid}>{time.time}</a>
              ))}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>

  )
}

export default MovieCard