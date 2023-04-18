import { SEARCH_GROUP, SHOW_UP,SHOW_BELOW } from "../constant";


const initialState = {
  coingroup: [],

  showUp:true,
  showBelow:false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_GROUP:
      return {
        ...state,
        coingroup: action.payload,
      };
    
      case SHOW_UP:
       return{
        ...state,
        showUp:true,
        showBelow:false,
        }
    case SHOW_BELOW:
      return{
        ...state,
        showBelow:true,
        showUp:false
          }
    default:
      return state;
  }
};
export default searchReducer;
