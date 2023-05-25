import React, {ChangeEvent} from 'react';
import styles from './Input.module.scss'


export type InputPropsTypes = {
    type: 'text' | 'number'
    callBack?: () => void
    styles: 'default' | 'primary'
    required:boolean

    inputValue:number
    setInputValue?:(inputValue:string)=>void
    min?:number
    callback: (value: string, name: 'min' | 'max') => void
    name: 'min' | 'max'
}


export const Input = (props:InputPropsTypes) => {
    const className = `${styles.input} ${styles[`input_${props.styles}`]}`
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
       // props.setInputValue(event.currentTarget.value)
        props.callback(event.currentTarget.value, props.name)
    }
    // попробуем получить значение из интпута
    return (
        <div>
           <input min={props.min}
                  value={props.inputValue}
                  className={className} type={props.type}
                  onChange={onChangeHandler}
                  required={props.required}
                  name={props.name}

           />

        </div>
    );
};

