import { useState, useReducer } from "react";
import {ActionTypes, SET_DISABLED, TOGGLE_SHOW} from "./types/actionTypes";



// Исходное состояние
export  type UIStateType = {
    show: boolean;
    disabled: boolean;
}

// Редьюсер
export const UiReducer = (state: UIStateType, action: ActionTypes): UIStateType => {
    switch (action.type) {
        case TOGGLE_SHOW:
            return {
                ...state,
                show: !state.show,
            };
        case SET_DISABLED:
            return {
                ...state,
                disabled: !state.disabled,
            };
        default:
            return state;
    }
};

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