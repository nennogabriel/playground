import * as types from "./types"
import produce from "immer"

export const initialState = {
  qtd: 0,
}

export const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.INCREMENT: {
        draft.qtd++
        break
      }
      case types.DECREMENT: {
        draft.qtd--
        break
      }
      default:
    }
  })
}
