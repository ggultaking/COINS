
import { combineReducers } from "redux"

import searchReducer from "./searchCoin/searchReducer"

 const rootReducer=combineReducers({searchReducer})
 export default rootReducer