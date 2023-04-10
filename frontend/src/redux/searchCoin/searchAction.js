import { SEARCH_GROUP,SHOW_UP ,SHOW_BELOW} from "../constant";

export const searchGroupAction=(coingroup)=>({
    type:SEARCH_GROUP,
    payload:coingroup
})
export const showUpAction=()=>({
    type:SHOW_UP
})
export const showBelowAction=()=>({
    type:SHOW_BELOW
})