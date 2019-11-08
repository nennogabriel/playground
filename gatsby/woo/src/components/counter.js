import React from "react"
import { useStore, useActions } from "../store"

function Counter() {
  const { ux, counter } = useStore()
  const actions = useActions()
  return (
    <>
      Count: {counter.qtd}
      <button onClick={actions.counter.subtract} disabled={ux.working}>
        -
      </button>
      <button
        onClick={() => actions.counter.change({ qtd: counter.qtd + 1 })}
        disabled={ux.working}
      >
        +
      </button>
    </>
  )
}

export default Counter
