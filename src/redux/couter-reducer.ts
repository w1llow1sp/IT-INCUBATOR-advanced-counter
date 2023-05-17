import {ActionTypes, DECREMENT_COUNTER, INCREMENT_COUNTER, RESET_COUNTER} from "./types/actionTypes";

// Начальное состояние
const initialState = {
    counter:0
}
export type initialCounterType = {
    counter:number
}

//Редьюсеры

 export const counterReducer = (state = initialState, action:ActionTypes): initialCounterType => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return  {
                ...state,
                counter:state.counter + 1
            }
        case DECREMENT_COUNTER :
            return  {
                ...state,
                counter:state.counter - 1
            }
        case RESET_COUNTER :
            return  {
                ...state,
                counter:action.payload
            }
        default:
            return state
    }
}


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

export const resetCounterAC = (value:number) => {
    return {
        type: RESET_COUNTER,
        payload:value
    } as const
}