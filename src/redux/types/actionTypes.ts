import {
    decrementCounterAC, getMaxValueAC,
    incrementCounterAC,
    isDisableAC,
    isShowAC,
    resetCounterAC,
    setButtonColorsAC, setCounterColorAC, setErrorsTextAC, setIsValidAC, setMaxValueAC, setMinValueAC
} from "../common-reducer";

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
export const SET_MIN_INPUT_VALUE = 'SET_MIN_INPUT_VALUE';
export const SET_MAX_INPUT_VALUE = 'SET_MAX_INPUT_VALUE';
export const TOGGLE_SHOW = "TOGGLE_SHOW";
export const SET_DISABLED = "SET_DISABLED";
export const SET_BUTTON_COLORS = "SET_BUTTON_COLORS";
export const SET_IS_VALID_VALUES = "SET_IS_VALID_VALUES";
export const SET_COUNTER_COLOR = "SET_COUNTER_COLOR";
export const SET_ERROR_TEXT = "SET_ERROR_TEXT";
export const GET_MAX_VALUE_FROM_LS = "GET_MAX_VALUE_FROM_LS";



export type ActionTypes =
    ReturnType<typeof incrementCounterAC> |
    ReturnType<typeof decrementCounterAC> |
    ReturnType<typeof resetCounterAC> |
    ReturnType<typeof isShowAC> |
    ReturnType<typeof isDisableAC> |
    ReturnType<typeof setButtonColorsAC> |
    ReturnType<typeof setIsValidAC> |
    ReturnType<typeof setCounterColorAC> |
    ReturnType<typeof setMinValueAC> |
    ReturnType<typeof setMaxValueAC> |
    ReturnType<typeof setErrorsTextAC> |
    ReturnType<typeof getMaxValueAC>