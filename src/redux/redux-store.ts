import {combineReducers, } from "redux";
import { legacy_createStore as createStore} from 'redux'

import {counterReducer} from "./couter-reducer";
import {valueReducer} from "./value-setter-reducer";
import {UiReducer} from "./ui-reducer";

export let RootReducer = combineReducers({
    counter:counterReducer,
    valueSetter:valueReducer,
    UI:UiReducer
 })

export type AppStateType = ReturnType<typeof RootReducer>

let store = createStore (RootReducer)

export default store