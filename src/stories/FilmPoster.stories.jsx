import React from "react"
import FilmPoster from "/src/components/film-poster.jsx"
// design addon removed for build compatibility
export default {
  component: FilmPoster,
  title: "Components/FilmPoster",
  decorators: [withDesign],
}
const Template = args => <FilmPoster {...args} />
export const Default = Template.bind({})
Default.args = {
  src:"https://image.tmdb.org/t/p/w500//ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
  alt:"John Wick: Chapter 3 - Parabellum",
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/G1aaQplpyvNjr2HpkXwxRx/IMAX-Movie-Release?node-id=5%3A5',
  },
}

