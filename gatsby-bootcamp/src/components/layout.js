import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
// import { Container } from './styles';

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header title="Home" />
        {children}
      </div>
      <Footer />
    </div>
  )
}
