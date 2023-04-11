import { SEARCH_GROUP,SHOW_UP ,SHOW_BELOW,INIT_GROUPS} from "../constant";

export const initializeGroupsAction = (groups) => {
  return {
    type: INIT_GROUPS,
    payload: groups
  };
};

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

