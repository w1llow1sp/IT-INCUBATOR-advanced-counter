import {decrementCounterAC, incrementCounterAC, resetCounterAC} from "../couter-reducer";
import {setMaxValueAC, setMinValueAC} from "../value-setter-reducer";
import {isDisableAC, isShowAC} from "../ui-reducer";

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
export const SET_MIN_INPUT_VALUE = 'SET_MIN_INPUT_VALUE';
export const SET_MAX_INPUT_VALUE = 'SET_MAX_INPUT_VALUE';
export const TOGGLE_SHOW = "TOGGLE_SHOW";
export const SET_DISABLED = "SET_DISABLED";


export type ActionTypes =
    ReturnType<typeof incrementCounterAC> |
    ReturnType<typeof decrementCounterAC> |
    ReturnType<typeof resetCounterAC> |
    ReturnType<typeof setMinValueAC> |
    ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof isShowAC> |
    ReturnType<typeof isDisableAC>