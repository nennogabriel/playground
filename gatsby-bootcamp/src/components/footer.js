import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { Container } from './styles';

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>Created by {data.site.siteMetadata.author} in 2019</p>
    </footer>
  )
}
