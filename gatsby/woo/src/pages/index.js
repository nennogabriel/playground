import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Counter from "../components/counter"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <Counter />
      <Link to="/page-2/">Go to page 2</Link>

      <p>Welcome to your new Gatsby site.</p>
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.APP_NAME}</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
