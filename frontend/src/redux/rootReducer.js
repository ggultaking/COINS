
import { combineReducers } from "redux"
import favoriteReducer from "./addFavorite/favoriteReducer"
import searchReducer from "./searchCoin/searchReducer"

 const rootReducer=combineReducers({favoriteReducer,searchReducer})
 export default rootReducer