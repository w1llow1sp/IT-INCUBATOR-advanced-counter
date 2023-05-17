import { ActionTypes, SET_MAX_INPUT_VALUE, SET_MIN_INPUT_VALUE } from "./types/actionTypes";
import { loadState, saveState } from "../utils/localStorage";

// Инициализационные значения
const initialState = loadState() || {
    minInputValue: 0,
    maxInputValue: 5
};

export type ValueSetterType = {
    minInputValue: number;
    maxInputValue: number;
};


export const valueReducer = (
    state: ValueSetterType = initialState,
    action: ActionTypes
): ValueSetterType => {
    switch (action.type) {
        case SET_MIN_INPUT_VALUE:
            const newMinValue = action.payload;
            saveState(state.maxInputValue.toString(), newMinValue.toString());
            return {
                ...state,
                minInputValue: newMinValue
            };
        case SET_MAX_INPUT_VALUE:
            const newMaxValue = action.payload;
            saveState(newMaxValue.toString(), state.minInputValue.toString());
            return {
                ...state,
                maxInputValue: newMaxValue
            };
        default:
            return state;
    }
};

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
