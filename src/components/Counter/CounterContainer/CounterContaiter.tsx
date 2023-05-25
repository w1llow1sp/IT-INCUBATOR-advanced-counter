import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {CounterRedux} from "../CounterRedux";
import {
    decrementCounterAC,
    incrementCounterAC,
    isShowAC,
    resetCounterAC,
    setButtonColorsAC, setCounterColorAC
} from "../../../redux/common-reducer";
import {CounterDispatchProps, CounterStateToProps} from "./CounterTypes";




// Функции
let StateToProps = (state:AppStateType):CounterStateToProps => {
    return  {
        counter:state.commonReducer.counter,
        isDisabled:state.commonReducer.isDisabled,
        plusBtnColor:state.commonReducer.plusBtnColor,
        minusBtnColor:state.commonReducer.minusBtnColor,
        isInvalidValues:state.commonReducer.isInvalidValues,
        isCriticalCounterValues:state.commonReducer.isCriticalCounterValues
    }
}

let DispatchProps = (dispatch:Dispatch):CounterDispatchProps => {
    return {
        plus: () => {
            dispatch(incrementCounterAC())
        },
        minus: () => {
            dispatch(decrementCounterAC())
        },
        reset : () => {
            dispatch(resetCounterAC())
        },
        show: () => {
            dispatch(isShowAC())
        },
        setBtnColor:() => {
            dispatch(setButtonColorsAC())
        },
        setCounterColor: () => {
            dispatch(setCounterColorAC())
        }
    }
}

export const CounterContainer = connect(StateToProps,DispatchProps)(CounterRedux)

