import * as Action from "./ActionsTypes";

export const changeTheme =()=>({type: Action.Theme });
export const changeLangue =(langue)=>({type: Action.Langue, payload: langue});
export const toggleNotification =()=>({type: Action.Notification});
