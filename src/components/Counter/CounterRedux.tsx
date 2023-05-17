import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {Button} from "../../components-ui/Button/Button";
import styles from './Counter.module.css'

type AppPropsType = {
    counter: number
    minInputValue: number
    maxInputValue: number

    PlusButtonHandler: () => void
    MinusButtonHandler: () => void
    ResetButtonHandler: () => void

    disabled: boolean
    show: boolean
    setShow: any
}

const invalidValues =
    (minValue: number, maxValue: number) =>
        minValue === maxValue ||
        minValue < 0 ||
        maxValue === 0 ||
        minValue >= maxValue;

export const CounterRedux: FC<AppPropsType> = ({
                                              counter,
                                              minInputValue,
                                              maxInputValue,
                                              PlusButtonHandler,
                                              MinusButtonHandler,
                                              ResetButtonHandler,
                                              disabled,
                                              show,
                                              setShow,
                                          }) => {
    let maxValue = Number(maxInputValue)
    let minValue = Number(minInputValue)

    let isEqualValues = invalidValues(minValue,maxValue)
            ? 'Invalid Values!'
            : counter

    /*--Для лучшей читаемости и рефакторинга кода вынесла все стили наверх--*/
    const plusBtnColor = counter >= maxValue ? 'disabled' : 'green';
    const minusBtnColor = counter <= minValue ? 'disabled' : 'red';
    let counterColor = counter === maxValue || counter === minValue ? styles.criticalCounter : styles.defaultCounter
    let styleField = disabled ? counterColor : styles.defaultCounter
    /*----*/

    /*----*/


    return (
        <div className={styles.counterWrapper}>
            <h1>Counter</h1>
            <div className={styleField}>
                {isEqualValues}
            </div>
            <div className={'btnWrapper'}>
                <Button
                    color={plusBtnColor}
                    callBack={()=>PlusButtonHandler()}>+</Button>
                <Button
                    color={minusBtnColor}
                    callBack={()=>MinusButtonHandler()}>-</Button>
                <Button
                    color={'blue'}
                    callBack={()=>ResetButtonHandler()}>
                    Reset</Button>
                <Button
                    color={'blue'}
                    callBack={()=>setShow()}>
                    Set</Button>
            </div>
        </div>
    );
};

//TODO: Что-то сделать со стилями