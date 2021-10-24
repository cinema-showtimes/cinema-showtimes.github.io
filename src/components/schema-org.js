import * as React  from "react"

const SchemaOrg = (movie) => {
    return (

<script type="application/ld+json">
{
    `{
    "@context": "https://schema.org",
    "@type": "Movie",
    "description": "${movie.synopsis}",
    "name": "${movie.title}",
    "image": "${movie.poster}"
    }`
}
</script>
    )
}
export default SchemaOrg