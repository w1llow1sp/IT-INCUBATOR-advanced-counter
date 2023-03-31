import React from 'react';
import {BtnNameTypes, Button} from "../../components-ui/Button/Button";
import styles from './Counter.module.css'

type AppPropsType ={
    counter:number
    universalBtnHandler : (name:BtnNameTypes) => void
    minInputValue:number
    maxInputValue:number
}

export const Counter = (props:AppPropsType) => {
    let maxValue= Number(props.maxInputValue)
    let minValue = Number(props.minInputValue)

    function disablePlusButton () {
        // counter -- это MinValue
      return  minValue >= maxValue
    }
    function disableMinusButton () {
        // counter -- это MinValue
        return  props.counter < minValue
    }
    function disableResetrButton () {
        // counter -- это MinValue
        return  props.counter === 0
    }
    return (
        <div className={styles.counterWrapper}>
            <h1>Counter</h1>
            <div className={`${props.counter === maxValue? styles.criticalCounter :styles.defaultCounter}`}>{props.counter}</div>
            <div className={'btnWrapper'}>
                <Button
                   // disabledFunction={disablePlusButton}
                    color={minValue === maxValue  ?'green' :'disabled' } callBack={()=>props.universalBtnHandler('+')}>+</Button>
                <Button
                    //disabledFunction={disableMinusButton}
                        color={props.counter < minValue? 'disabled' :'red'} callBack={()=>props.universalBtnHandler('-')}>-</Button>
                <Button
                   // disabledFunction={disableResetrButton}
                    color={props.counter === 0 ? 'disabled' :'blue'} callBack={()=>props.universalBtnHandler('Reset')}>Reset</Button>
            </div>
        </div>
    );
};

