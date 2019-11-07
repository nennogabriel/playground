import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Counter from "../components/counter"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <Counter />
    <Link to="/">Go back to the homepage</Link>
    <p>Welcome to page 2</p>
  </Layout>
)

export default SecondPage
