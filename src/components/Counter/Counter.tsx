import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button} from "../../components-ui/Button/Button";
import styles from './Counter.module.css'

type AppPropsType ={
    counter:number
    minInputValue:number
    maxInputValue:number

    PlusButtonHandler:()=>void
    MinusButtonHandler:()=>void
    ResetButtonHandler:()=>void

    disabled:boolean
    show:boolean
    setShow:any
}

export const Counter = (props:AppPropsType) => {
    let maxValue= Number(props.maxInputValue)
    let minValue = Number(props.minInputValue)

    let isEqualValues =
        minValue === maxValue
        || minValue < 0
        || maxValue === 0
        || minValue >= maxValue

            ? 'Invalid Values!'
            : props.counter

    /*--Для лучшей читаемости и рефакторинга кода вынесла все стили наверх--*/
    const plusBtnColor = props.counter >= maxValue ? 'disabled' :'green' ;
    const minusBtnColor = props.counter <= minValue ? 'disabled' : 'red';
    const resetBtnColor = props.counter === 0 ? 'disabled' : 'blue';
    let counterColor= props.counter === maxValue || props.counter === minValue ? styles.criticalCounter : styles.defaultCounter
    let styleField= props.disabled ? counterColor : styles.defaultCounter
    /*----*/
    /*--Для лучшей читаемости и рефакторинга кода вынесла все функции для кнопок наверх--*/
    const plusBtnHandler = () => {props.PlusButtonHandler()}
    const minusBtnHandler = () => {props.MinusButtonHandler()}
    const resetBtnHandler = () => {props.ResetButtonHandler() }
    /*----*/


    return (
        <div className={styles.counterWrapper}>
            <h1>Counter</h1>
            <div className={styleField }>
{/*                {!props.disabled
                    ? "Please,set initial values"
                    : isEqualValues}*/}
                {isEqualValues}
            </div>
            <div className={'btnWrapper'}>
                <Button
                    color={plusBtnColor}
                    callBack={plusBtnHandler}>+</Button>
                <Button
                        color={minusBtnColor}
                        callBack={minusBtnHandler}>-</Button>
                <Button
                    color={'blue'}
                    callBack={resetBtnHandler}>
                    Reset</Button>
                <Button
                    color={'blue'}
                    callBack={props.setShow}>
                    Set</Button>
            </div>
        </div>
    );
};

//TODO: Что-то сделать со стилями