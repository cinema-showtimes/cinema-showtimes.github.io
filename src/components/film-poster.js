import * as React  from "react"
import "/src/styles/film-poster.scss"

const FilmPoster = (props) => {
    return (
        <img className="film-poster" alt={props.alt} src={props.src} />
    )
  }

  export default FilmPoster

