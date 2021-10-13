import * as React  from "react"
import Moment from 'react-moment';

const FilmDate = (props) => {
    return (
        <Moment format="ddd DD MMM">
        {props.date}
        </Moment>
    )
  }

  export default FilmDate

