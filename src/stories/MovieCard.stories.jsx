import React from "react"
import MovieCard from "/src/components/movie-card"
export default {
  component: MovieCard,
  title: "Components/MovieCard",
}
const Template = args => <MovieCard {...args} />
export const Default = Template.bind({})
Default.args = {
  siteTitle: "Something",
  key:"123456",
  id: "123456",
  poster:"https://image.tmdb.org/t/p/w500//ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
  title:"John Wick 3",
  length:"2h 20m",
  synopsis:"Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail.",
  genres:[{id:1, genre: "Action"}],
  //showtimes={movie.showtimes},
  rating:"18"
}