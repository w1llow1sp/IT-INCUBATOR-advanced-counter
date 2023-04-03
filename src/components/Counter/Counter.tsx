import React, {useState} from 'react';
import {Button} from "../../components-ui/Button/Button";
import styles from './Counter.module.css'

type AppPropsType ={
    counter:number
    minInputValue:number
    maxInputValue:number

    PlusButtonHandler:()=>void
    MinusButtonHandler:()=>void
    ResetButtonHandler:()=>void
}

export const Counter = (props:AppPropsType) => {
    let maxValue= Number(props.maxInputValue)
    let minValue = Number(props.minInputValue)

    let isEqualValues =
        minValue === maxValue
        || minValue === 0
        || maxValue === 0
        || minValue >= maxValue
            ? 'Invalid Values!'
            : props.counter

    /*--Для лучшей читаемости и рефакторинга кода вынесла все стили наверх--*/
    const plusBtnColor = props.counter >= maxValue ? 'disabled' :'green' ;
    const minusBtnColor = props.counter <= minValue ? 'disabled' : 'red';
    const resetBtnColor = props.counter === 0 ? 'disabled' : 'blue';
    const counterColor= props.counter === maxValue || props.counter === minValue ||isEqualValues ? styles.criticalCounter :styles.defaultCounter
    /*----*/
    /*--Для лучшей читаемости и рефакторинга кода вынесла все функции для кнопок наверх--*/
    const plusBtnHandler = () => {props.PlusButtonHandler()}
    const minusBtnHandler = () => {props.MinusButtonHandler()}
    const resetBtnHandler = () => {props.ResetButtonHandler()}
    /*----*/


    return (
        <div className={styles.counterWrapper}>
            <h1>Counter</h1>
            <div className={counterColor}>
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
                    color={resetBtnColor}
                    callBack={resetBtnHandler}>Reset</Button>
            </div>
        </div>
    );
};

//TODO: Что-то сделать со стилями