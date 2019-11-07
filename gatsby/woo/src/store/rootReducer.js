import combineStores from "./combineStores"

import * as counter from "./counter/reducer"

const combinedStore = combineStores({
  counter,
})

const { rootInitialState, rootReducer } = combinedStore

export { rootInitialState, rootReducer }
