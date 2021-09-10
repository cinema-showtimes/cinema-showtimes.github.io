import React from "react"
import FilmPoster from "/src/components/film-poster"
export default {
  component: FilmPoster,
  title: "Components/FilmPoster",
}
const Template = args => <FilmPoster {...args} />
export const Default = Template.bind({})
Default.args = {
  src:"https://image.tmdb.org/t/p/w500//ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
  alt:"John Wick: Chapter 3 - Parabellum",
}