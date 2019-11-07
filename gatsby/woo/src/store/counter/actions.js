import * as types from "./types"

export function add(params = {}, dispatch) {
  dispatch({ type: types.INCREMENT })
}

export function subtract(params = {}, dispatch) {
  dispatch({ type: types.DECREMENT })
}
