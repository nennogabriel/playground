import React from "react"
import { useStore, useActions } from "../store"

function Counter() {
  const { counter } = useStore()
  const actions = useActions()
  return (
    <>
      Count: {counter.qtd}
      <button onClick={actions.counter.subtract}>-</button>
      <button onClick={actions.counter.add}>+</button>
    </>
  )
}

export default Counter
