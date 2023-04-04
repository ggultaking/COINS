import { SEARCH_FILM, HIDE_UP,SHOW_BELOW } from "../constant";


const initialState = {
  films: [],
  showUp:true,
  showBelow:false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FILM:
      return {
        ...state,
        films: action.payload,
      };
      case HIDE_UP:
        return{
          ...state,
          showUp:false,
        
        }
        case SHOW_BELOW:
          return{
            ...state,
            showBelow:true
          }
    default:
      return state;
  }
};
export default searchReducer;
