const initial_state = { 
    theme: "light",       // "light" ou "dark" 
    language: "fr",       // "fr", "en", "ar" ou "es" 
    notifications: true   // true ou false 
  } 

const reducerPreference=(state=initial_state, action)=>{
    switch(action.type){
        case "Theme":
            return {...state, theme: state.theme === "light" ? "dark" : "light" };
        case "Langue":
            return {...state, language: action.payload};
        case "Notification":
            return {...state, notifications:  !state.notifications};
        default:
            return state;
    }
}
export default reducerPreference;