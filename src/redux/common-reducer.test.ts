import {commonReducer, counterReducerType, initialState} from "./common-reducer";
import {
    DECREMENT_COUNTER,
    INCREMENT_COUNTER,
    RESET_COUNTER,
    SET_BUTTON_COLORS,
    SET_COUNTER_COLOR,
    SET_DISABLED,
    SET_ERROR_TEXT,
    SET_IS_VALID_VALUES,
    SET_MAX_INPUT_VALUE, SET_MIN_INPUT_VALUE,
    TOGGLE_SHOW
} from "./types/actionTypes";

beforeEach(() => {
        const initialState: counterReducerType = {
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
    }
)

test('IncrementCounterAC should work correctly', () => {

    let testInitialState1 = {
        ...initialState,
        counter: 0,
        maxInputValue: 7
    }

    let testInitialState2 = {
        ...initialState,
        counter: 7,
        maxInputValue: 7
    }

    const testEndState1 = commonReducer(testInitialState1, {type: INCREMENT_COUNTER})
    const testEndState2 = commonReducer(testInitialState2, {type: INCREMENT_COUNTER})

    expect(testEndState1.counter).toBe(1)
    expect(testEndState2.counter).toBe(7)

})
test('DecrementCounterAC should work correctly', () => {

    let testInitialState1 = {
        ...initialState,
        counter: 6,
        minInputValue: 7
    }

    let testInitialState2 = {
        ...initialState,
        counter: 10,
        minInputValue: 7
    }

    const testEndState1 = commonReducer(testInitialState1, {type: DECREMENT_COUNTER})
    const testEndState2 = commonReducer(testInitialState2, {type: DECREMENT_COUNTER})

    expect(testEndState1.counter).toBe(7)
    expect(testEndState2.counter).toBe(9)

})
test('ResetCounterAC should work correctly', () => {

    let testInitialState1 = {
        ...initialState,
        counter: 10,
        minInputValue: 7
    }
    const testEndState1 = commonReducer(testInitialState1, {type: RESET_COUNTER})

    expect(testEndState1.counter).toBe(7)

})
test('isShowAC should work correctly', () => {

    let testInitialState1 = {
        ...initialState,
        isShow: true
    }
    let testInitialState2 = {
        ...initialState,
        isShow: false
    }
    const testEndState1 = commonReducer(testInitialState1, {type: TOGGLE_SHOW})
    const testEndState2 = commonReducer(testInitialState2, {type: TOGGLE_SHOW})

    expect(testEndState1.isShow).toBe(false)
    expect(testEndState2.isShow).toBe(true)

})
test('isDisableAC should work correctly', () => {

    let testInitialState1 = {
        ...initialState,
        isDisabled: true
    }
    let testInitialState2 = {
        ...initialState,
        isDisabled: false
    }
    const testEndState1 = commonReducer(testInitialState1, {type: SET_DISABLED})
    const testEndState2 = commonReducer(testInitialState2, {type: SET_DISABLED})

    expect(testEndState1.isDisabled).toBe(false)
    expect(testEndState2.isDisabled).toBe(true)

})
test('setButtonColorsAC should work correctly', () => {

    let plusBtnColorInitialState1 = {
        ...initialState,
        counter: 1,
        maxInputValue:2
    }
    let plusBtnColorInitialState2 = {
        ...initialState,
        counter: 4,
        maxInputValue:2
    }

    const testEndState1 = commonReducer(plusBtnColorInitialState1, {type: SET_BUTTON_COLORS})
    const testEndState2 = commonReducer(plusBtnColorInitialState2, {type: SET_BUTTON_COLORS})

    let minusBtnColorInitialState1 = {
        ...initialState,
        counter: 1,
        minInputValue:2
    }
    let minusBtnColorInitialState2 = {
        ...initialState,
        counter: 4,
        minInputValue:2
    }

    const testEndState3 = commonReducer(minusBtnColorInitialState1, {type: SET_BUTTON_COLORS})
    const testEndState4 = commonReducer(minusBtnColorInitialState2, {type: SET_BUTTON_COLORS})


    expect(testEndState1.plusBtnColor).toBe("green")
    expect(testEndState2.plusBtnColor).toBe("disabled")
    expect(testEndState3.minusBtnColor).toBe("disabled")
    expect(testEndState4.minusBtnColor).toBe("red")

})
test('setIsValidAC should work correctly',()=>{
    //case 1 - true
    let testInitialState1 = {
        ...initialState,
        minInputValue:3,
        maxInputValue:3
    }

    const testEndState1 = commonReducer(testInitialState1,{type:SET_IS_VALID_VALUES})

    expect(testEndState1.isInvalidValues).toBe(true)

        //case 2 - true
    let testInitialState2 = {
        ...initialState,
        minInputValue:-1,
    }

    const testEndState2 = commonReducer(testInitialState2,{type:SET_IS_VALID_VALUES})

    expect(testEndState2.isInvalidValues).toBe(true)

    //case 3 - true
    let testInitialState3 = {
        ...initialState,
        maxInputValue:-1,
    }

    const testEndState3 = commonReducer(testInitialState3,{type:SET_IS_VALID_VALUES})

    expect(testEndState3.isInvalidValues).toBe(true)

    //case 4 - true
    let testInitialState4 = {
        ...initialState,
        minInputValue:4,
        maxInputValue:3,
    }

    const testEndState4 = commonReducer(testInitialState4,{type:SET_IS_VALID_VALUES})

    expect(testEndState4.isInvalidValues).toBe(true)

    //case 5 - true
    let testInitialState5 = {
        ...initialState,
        minInputValue:3,
        maxInputValue:4,
    }

    const testEndState5 = commonReducer(testInitialState5,{type:SET_IS_VALID_VALUES})

    expect(testEndState5.isInvalidValues).toBe(false)
})
test('setCounterColorAC should work correctly', () => {
    //case 1 -- true
    let testInitialState1 = {
        ...initialState,
        counter:4,
        maxInputValue:4,
    }

    const testEndState1= commonReducer(testInitialState1,{type:SET_COUNTER_COLOR })

    expect(testEndState1.isCriticalCounterValues).toBe(true)

    //case 2 -- true
    let testInitialState2 = {
        ...initialState,
        counter:4,
        minInputValue:4,
    }

    const testEndState2= commonReducer(testInitialState2,{type:SET_COUNTER_COLOR })

    expect(testEndState2.isCriticalCounterValues).toBe(true)

    //case 3 -- false
    let testInitialState3 = {
        ...initialState,
        counter:7,
        minInputValue:4,
    }

    const testEndState3= commonReducer(testInitialState3,{type:SET_COUNTER_COLOR })

    expect(testEndState3.isCriticalCounterValues).toBe(false)

    //case 4-- false
    let testInitialState4 = {
        ...initialState,
        counter:4,
        maxInputValue:9,
    }

    const testEndState4= commonReducer(testInitialState4,{type:SET_COUNTER_COLOR })

    expect(testEndState4.isCriticalCounterValues).toBe(false)

})
test('setErrorsTextAC should work correctly',()=>{
    //case 1 -- 'Values cant be equal!'
    let testInitialState1 = {
        ...initialState,
        minInputValue:5,
        maxInputValue:5,
    }

    const testEndState1= commonReducer(testInitialState1,{type:SET_ERROR_TEXT })

    expect(testEndState1.errorText).toBe('Values cant be equal!')
    expect(testEndState1.isDisabled).toBe(true)


    //case 2 -- 'Values must be greater zero!'
    let testInitialState2 = {
        ...initialState,
        minInputValue:0,
        maxInputValue:5,
    }

    const testEndState2= commonReducer(testInitialState2,{type:SET_ERROR_TEXT })

    expect(testEndState2.errorText).toBe('Values must be greater zero!')
    expect(testEndState2.isDisabled).toBe(true)

    //case 3 -- 'Values must be greater zero!'
    let testInitialState3 = {
        ...initialState,
        minInputValue:5,
        maxInputValue:0,
    }

    const testEndState3= commonReducer(testInitialState3,{type:SET_ERROR_TEXT })

    expect(testEndState3.errorText).toBe('Values must be greater zero!')
    expect(testEndState3.isDisabled).toBe(true)

    //case 4 -- 'Min value cant be greater than Max'
    let testInitialState4 = {
        ...initialState,
        minInputValue:5,
        maxInputValue:2,
    }

    const testEndState4= commonReducer(testInitialState4,{type:SET_ERROR_TEXT })

    expect(testEndState4.errorText).toBe('Min value cant be greater than Max')
    expect(testEndState4.isDisabled).toBe(true)

    //case 5 -- ''
    let testInitialState5 = {
        ...initialState,
        minInputValue:2,
        maxInputValue:6,
    }

    const testEndState5= commonReducer(testInitialState5,{type:SET_ERROR_TEXT })

    expect(testEndState5.errorText).toBe('')
    expect(testEndState5.isDisabled).toBe(false)
})
test('setMaxValueAC should work correctly',()=>{
    let testInitialState1 = {
        ...initialState,
        minInputValue:5,
        maxInputValue:5,
    }

    const testEndState1= commonReducer(testInitialState1,{type: SET_MAX_INPUT_VALUE, payload: 3 })
    const test = JSON.parse(localStorage.getItem('maxInputValue') as string)
    expect(testEndState1.maxInputValue).toBe(3)
    expect(test).toBe('3')

})
test('setMinValueAC should work correctly',()=>{
    let testInitialState1 = {
        ...initialState,
        minInputValue:5,
        maxInputValue:5,
    }

    const testEndState1= commonReducer(testInitialState1,{type: SET_MIN_INPUT_VALUE, payload: 3 })
    const test = JSON.parse(localStorage.getItem('minInputValue') as string)
    expect(testEndState1.minInputValue).toBe(3)
    expect(test).toBe('3')

})