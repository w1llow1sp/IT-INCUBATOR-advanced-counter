import {decrementCounterAC, incrementCounterAC, initialCounterType, resetCounterAC} from "../../redux/couter-reducer";
import {ValueSetterType} from "../../redux/value-setter-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Counter} from "./Counter";
import {isDisableAC, isShowAC, UIStateType} from "../../redux/ui-reducer";
import {CounterRedux} from "./CounterRedux";



// Типизация
type StateToProps = {
    counter: initialCounterType
    valueSetter: ValueSetterType
    UI:UIStateType
}
type DispatchProps = {
    plus:()=>void
    minus:()=>void
    reset:(number:number)=>void
    show:()=>void
    disabled:()=>void
}

export type CounterContainerProps =  DispatchProps & StateToProps

// Функции
let StateToProps = (state:AppStateType):StateToProps => {
    return  {
        counter: state.counter,
        valueSetter: state.valueSetter,
        UI:state.UI
    }
}

let DispatchProps = (dispatch:Dispatch):DispatchProps => {
    return {
        plus: () => {
            dispatch(incrementCounterAC())
        },
        minus: () => {
            dispatch(decrementCounterAC())
        },
        reset : (number:number) => {
            dispatch(resetCounterAC(number))
        },
        show: () => {
            dispatch(isShowAC())
        },
        disabled: () => {
            dispatch(isDisableAC())
        }
    }
}

const CounterContainer = connect(StateToProps,DispatchProps)(CounterRedux)

export default CounterContainer