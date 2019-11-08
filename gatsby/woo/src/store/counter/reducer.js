import counterTypes from "./types"
import produce from "immer"

export const initialState = {
  qtd: 0,
}

export const reducer = (state = initialState, action = {}) => {
  return produce(state, draft => {
    switch (action.type) {
      case counterTypes.INCREMENT: {
        draft.qtd++
        break
      }
      case counterTypes.DECREMENT: {
        draft.qtd--
        break
      }
      case counterTypes.CHANGE: {
        draft.qtd = action.payload.qtd
        break
      }
      default:
    }
  })
}
