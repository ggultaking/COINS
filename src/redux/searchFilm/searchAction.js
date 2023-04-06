import { SEARCH_FILM,SHOW_UP ,SHOW_BELOW} from "../constant";

export const searchFilmAction=(film)=>({
    type:SEARCH_FILM,
    payload:film
})
export const showUpAction=()=>({
    type:SHOW_UP
})
export const showBelowAction=()=>({
    type:SHOW_BELOW
})