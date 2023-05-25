import React, {FC} from 'react';
import {Button} from "../../components-ui/Button/Button";
import styles from './Counter.module.css'
import {CounterContainerProps} from "./CounterContainer/CounterTypes";


export const CounterRedux: FC<CounterContainerProps> = ({
                                                            counter,
                                                            isDisabled,
                                                            plusBtnColor,
                                                            minusBtnColor,
                                                            isInvalidValues,
                                                            isCriticalCounterValues,

                                                            setBtnColor,
                                                            setCounterColor,
                                                            plus,
                                                            minus,
                                                            reset,
                                                            show,
                                                        }) => {

    /*--Для лучшей читаемости и рефакторинга кода вынесла все условные стили наверх--*/
    const PlusBtnFunc = () => {
        plus()
        setBtnColor()
        setCounterColor()
    }
    const MinusBtnFunc = () => {
        minus()
        setBtnColor()
        setCounterColor()
    }

    let counterColor = isCriticalCounterValues
        ? styles.criticalCounter
        : styles.defaultCounter
    /*----*/

    return (
        <div className={styles.counterWrapper}>
            <h1>Counter</h1>
            <div className={counterColor}>
                {counter}
            </div>
            <div className={'btnWrapper'}>
                <Button
                    color={plusBtnColor}
                    onClick={PlusBtnFunc}>+</Button>
                <Button
                    color={minusBtnColor}
                    onClick={MinusBtnFunc}>-</Button>
                <Button
                    color={'blue'}
                    onClick={reset}>
                    Reset</Button>
                <Button
                    color={'blue'}
                    onClick={show}>
                    Set</Button>
            </div>
        </div>
    );
};