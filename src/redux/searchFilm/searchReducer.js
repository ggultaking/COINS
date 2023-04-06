import { SEARCH_FILM, SHOW_UP,SHOW_BELOW } from "../constant";


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
