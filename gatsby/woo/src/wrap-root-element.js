import React from "react"
import StoreProvider from "./store"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
