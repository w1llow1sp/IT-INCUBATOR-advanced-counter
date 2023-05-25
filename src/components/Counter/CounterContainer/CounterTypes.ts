
export type CounterStateToProps = {
    counter:number
    isDisabled: boolean
    plusBtnColor: string
    minusBtnColor: string
    isInvalidValues: boolean
    isCriticalCounterValues: boolean
}
export type CounterDispatchProps = {
    plus:()=>void
    minus:()=>void
    reset:()=>void
    show:()=>void
    setBtnColor:()=>void
    setCounterColor:()=>void
}

export type CounterContainerProps =  CounterDispatchProps & CounterStateToProps