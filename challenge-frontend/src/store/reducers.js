import { combineReducers } from "redux";
// import { appearanceReducer } from "./appearance/reducer";
import { characterReducer } from "./character/reducer";
import { userLoggedReducer } from "./login/reducer";
import { searchCharacterReducer } from "./search-character/reducer";


export default combineReducers({
   userLogged: userLoggedReducer,
   infoCharacter: characterReducer,
   result_search : searchCharacterReducer
   // appearance_character: appearanceReducer,
})