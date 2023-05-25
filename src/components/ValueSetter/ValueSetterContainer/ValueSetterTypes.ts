export type ValueSetterPropsType = {
    minInputValue:number
    maxInputValue:number
    isDisabled:boolean
    errorText:string
}

export type DispatchValueSetterPropsType = {
    setErrorsText:()=>void
    setShow:()=>void
    setMinInputValue:(value: number)=>void
    setMaxInputValue:(value: number)=>void
}

export type ValueSetterContainerPropsType = DispatchValueSetterPropsType & ValueSetterPropsType


