import {combineReducers, } from "redux";
import { legacy_createStore as createStore} from 'redux'
import {commonReducer} from "./common-reducer";


export let RootReducer = combineReducers({
    commonReducer:commonReducer
 })

export type AppStateType = ReturnType<typeof RootReducer>

let store = createStore (RootReducer)

export default store