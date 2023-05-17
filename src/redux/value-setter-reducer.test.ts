import {
    setMinValueAC,
    setMaxValueAC,
    valueReducer,
    ValueSetterType
} from "./value-setter-reducer";
import {ActionTypes} from './types/actionTypes'

describe("valueReducer", () => {
    let initialState: ValueSetterType;

    beforeEach(() => {
        initialState = {
            minInputValue: 0,
            maxInputValue: 5,
        };
    });

    it("should handle SET_MIN_INPUT_VALUE action", () => {
        const newMinValue = 10;
        const action: ActionTypes = setMinValueAC(newMinValue);

        const newState = valueReducer(initialState, action);

        expect(newState).toEqual({
            minInputValue: newMinValue,
            maxInputValue: initialState.maxInputValue,
        });

        // Additional assertions for localStorage
        // ...
    });

    it("should handle SET_MAX_INPUT_VALUE action", () => {
        const newMaxValue = 20;
        const action: ActionTypes = setMaxValueAC(newMaxValue);

        const newState = valueReducer(initialState, action);

        expect(newState).toEqual({
            minInputValue: initialState.minInputValue,
            maxInputValue: newMaxValue,
        });

        // Additional assertions for localStorage
        // ...
    });
});
