import React from "react"
import { useStore, useDispatch, useActions } from "../store"
import * as counterTypes from "../store/counter/types"

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
