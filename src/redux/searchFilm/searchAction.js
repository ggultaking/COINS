import { SEARCH_FILM,HIDE_UP ,SHOW_BELOW} from "../constant";

export const searchFilmAction=(film)=>({
    type:SEARCH_FILM,
    payload:film
})
export const hideUpAction=()=>({
    type:HIDE_UP
})
export const showBelowAction=()=>({
    type:SHOW_BELOW
})