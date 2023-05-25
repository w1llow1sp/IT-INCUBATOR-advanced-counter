import {connect} from "react-redux";
import {ValueSetterRedux} from "../ValueSetterRedux";
import {AppStateType} from "../../../redux/redux-store";
import {DispatchValueSetterPropsType, ValueSetterPropsType} from "./ValueSetterTypes";
import {Dispatch} from "redux";
import {
    isShowAC,
    setButtonColorsAC,
    setErrorsTextAC,
    setMaxValueAC,
    setMinValueAC
} from "../../../redux/common-reducer";

let ValueSetterProps = (state: AppStateType):ValueSetterPropsType => {
    return {
        minInputValue:state.commonReducer.minInputValue,
        maxInputValue:state.commonReducer.maxInputValue,
        isDisabled:state.commonReducer.isDisabled,
        errorText:state.commonReducer.errorText
    }
}

let DispatchValueSetterProps = (dispatch:Dispatch):DispatchValueSetterPropsType => {
    return  {
        setErrorsText:() => {
            dispatch(setErrorsTextAC())
        },
        setShow:() => {
            dispatch(isShowAC())
        },
        setMaxInputValue:(value:number) => {
            dispatch(setMaxValueAC(value))
        },
        setMinInputValue:(value:number) => {
            dispatch(setMinValueAC(value))
        },

    }
}




export const ValueSetterContainer = connect (ValueSetterProps,DispatchValueSetterProps)(ValueSetterRedux)