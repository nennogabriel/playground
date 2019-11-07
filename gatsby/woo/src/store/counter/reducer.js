import * as types from "./types"

export const initialState = {
  qtd: 0,
}

export const reducer = (state = initialState, action = {}) => {
  const { qtd } = state
  switch (action.type) {
    case types.INCREMENT: {
      return {
        ...state,
        qtd: qtd + 1,
      }
    }
    case types.DECREMENT: {
      return {
        ...state,
        qtd: qtd - 1,
      }
    }
    default:
      return state
  }
}
