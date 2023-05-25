import {
    ActionTypes,
    GET_MAX_VALUE_FROM_LS,
    SET_BUTTON_COLORS,
    SET_COUNTER_COLOR,
    SET_ERROR_TEXT,
    SET_IS_VALID_VALUES,
    SET_MAX_INPUT_VALUE,
    SET_MIN_INPUT_VALUE
} from "./types/actionTypes";
import {DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER, SET_DISABLED, TOGGLE_SHOW} from "./types/actionTypes";
import {loadState, saveState} from "../utils/localStorage";

export type counterReducerType = {
    counter: number;
    minInputValue: number;
    maxInputValue: number;
    isShow: boolean;
    isDisabled: boolean;
    plusBtnColor: string
    minusBtnColor: string
    isInvalidValues: boolean
    isCriticalCounterValues: boolean
    errorText: string
}

export const initialState: counterReducerType = {
    counter: 0,
    minInputValue: 0,
    maxInputValue: 10,
    isShow: false,
    isDisabled: false,
    plusBtnColor: 'green',
    minusBtnColor: 'red',
    isInvalidValues: false,
    isCriticalCounterValues: false,
    errorText: ''
};

export const commonReducer = (state = initialState, action: ActionTypes): counterReducerType => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state.counter >= state.maxInputValue
                ? {
                    ...state,
                    counter: state.maxInputValue
                }
                : {
                    ...state,
                    counter: state.counter + 1
                }
        case DECREMENT_COUNTER:
            return state.counter <= state.minInputValue
                ? {
                    ...state,
                    counter: state.minInputValue
                }
                : {
                    ...state,
                    counter: state.counter - 1
                }
        case RESET_COUNTER:
            return {
                ...state,
                counter: state.minInputValue,
            };
        case TOGGLE_SHOW:
            return {
                ...state,
                isShow: !state.isShow,
            };
        case SET_DISABLED:
            return {
                ...state,
                isDisabled: !state.isDisabled,
            };
        case SET_BUTTON_COLORS:
            const plusBtnColor = state.counter >= state.maxInputValue ? "disabled" : "green";
            const minusBtnColor = state.counter <= state.minInputValue ? "disabled" : "red";
            return {
                ...state,
                plusBtnColor,
                minusBtnColor
            };
        case SET_IS_VALID_VALUES:
            const isInvalid =
                state.minInputValue === state.maxInputValue ||
                state.minInputValue < 0 ||
                state.maxInputValue === 0 ||
                state.minInputValue >= state.maxInputValue
            return {
                ...state,
                isInvalidValues: isInvalid
            }
        case SET_COUNTER_COLOR:
            const isCritialValues =
                state.counter === state.maxInputValue ||
                state.counter === state.minInputValue
            return {
                ...state,
                isCriticalCounterValues: isCritialValues
            }
        case SET_MAX_INPUT_VALUE:
            const newMaxValue = action.payload;
            saveState(newMaxValue.toString(),state.minInputValue.toString());
            loadState()
            return {
                ...state,
                maxInputValue: newMaxValue
            };
        case SET_MIN_INPUT_VALUE:
            const newMinValue = action.payload;
            saveState( state.maxInputValue.toString(),newMinValue.toString());
            loadState()
            return {
                ...state,
                counter: newMinValue,
                minInputValue: newMinValue
            };
        case SET_ERROR_TEXT:
            if (state.minInputValue === state.maxInputValue) {
                return {
                    ...state,
                    errorText: 'Values cant be equal!',
                    isDisabled: true
                }
            } else if (state.minInputValue <= 0 || state.maxInputValue <= 0) {
                return {
                    ...state,
                    errorText: 'Values must be greater zero!',
                    isDisabled: true
                }
            } else if (state.minInputValue > state.maxInputValue) {
                return {
                    ...state,
                    errorText: 'Min value cant be greater than Max',
                    isDisabled: true
                }
            } else {
                return {
                    ...state,
                    errorText: '',
                    isDisabled: false
                }
            }
        default:
            return state;
    }
};
export const incrementCounterAC = () => {
    return {
        type: INCREMENT_COUNTER
    } as const
}

export const decrementCounterAC = () => {
    return {
        type: DECREMENT_COUNTER
    } as const
}

export const resetCounterAC = () => {
    return {
        type: RESET_COUNTER,
    } as const
}

export const isShowAC = () => {
    return {
        type: TOGGLE_SHOW
    } as const
}

export const isDisableAC = () => {
    return {
        type: SET_DISABLED
    } as const
}

export const setButtonColorsAC = () => {
    return {
        type: SET_BUTTON_COLORS
    } as const
}

export const setIsValidAC = () => {
    return {
        type: SET_IS_VALID_VALUES
    } as const
}

export const setCounterColorAC = () => {
    return {
        type: SET_COUNTER_COLOR
    } as const
}
export const setMinValueAC = (value: number) => {
    return {
        type: SET_MIN_INPUT_VALUE,
        payload: value
    } as const;
};

export const setMaxValueAC = (value: number) => {
    return {
        type: SET_MAX_INPUT_VALUE,
        payload: value
    } as const;
};

export const setErrorsTextAC = () => {
    return {
        type: SET_ERROR_TEXT
    } as const
}

export const getMaxValueAC = (value: string) => {
    return {
        type: GET_MAX_VALUE_FROM_LS,
        payload: value
    } as const
}