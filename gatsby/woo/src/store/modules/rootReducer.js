import combineStores from "../combineStores"

import * as counter from "./counter/reducer"
import * as ux from "./ux/reducer"

const combinedStore = combineStores({
  counter,
  ux,
})

const { rootInitialState: cleanState, rootReducer } = combinedStore

const persistedStores =
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem(process.env.APP_NAME))

const rootInitialState = {
  ...cleanState,
  ...persistedStores,
}

export { rootInitialState, rootReducer }
