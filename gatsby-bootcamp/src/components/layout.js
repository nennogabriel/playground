import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
// import { Container } from './styles';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
