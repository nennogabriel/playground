import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

// import { Container } from './styles';

export default function ContactPage() {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>here will going contact information</p>
      <p>
        you can find some help <a href="//google.com/">here</a>
      </p>
    </Layout>
  )
}
