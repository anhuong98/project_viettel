import { createStore, combineReducers } from "redux";
import accountReducer from "../reducers/accountReducer";
const rootReducer = combineReducers({
    accountReducer: accountReducer
})
const configureStore= () => createStore(rootReducer);
export default configureStore;