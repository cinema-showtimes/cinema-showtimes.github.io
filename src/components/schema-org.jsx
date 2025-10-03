import * as React from "react"

const SchemaOrg = (movie) => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Movie",
    description: movie.synopsis,
    name: movie.title,
    image: movie.poster,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  )
}

export default SchemaOrg
