import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// import { Container } from './styles';

export default function AboutPage() {
  return (
    <Layout>
      <h1>About</h1>
      <p>Here will have a descrption of the business</p>
      <p>
        Get in touch with me by clicking <Link to="/contact">here</Link>
      </p>
    </Layout>
  )
}
