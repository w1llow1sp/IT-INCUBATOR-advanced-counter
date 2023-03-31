import React from 'react';
import {BtnNameTypes, Button} from "../../components-ui/Button/Button";
import styles from './Counter.module.css'

type AppPropsType ={
    counter:number
    universalBtnHandler : (name:BtnNameTypes) => void
    minInputValue:string
    maxInputValue:string
}

export const Counter = (props:AppPropsType) => {
    let maxValue= Number(props.maxInputValue)
    let minValue = Number(props.minInputValue)
    return (
        <div className={styles.counterWrapper}>
            <h1>Counter</h1>
            <div className={`${props.counter === maxValue? styles.criticalCounter :styles.defaultCounter}`}>{props.counter}</div>
            <div className={'btnWrapper'}>
                <Button disabledFunction={() => props.counter === maxValue} color={props.counter >= maxValue  ?'disabled' : 'green'} callBack={()=>props.universalBtnHandler('+')}>+</Button>
                <Button disabledFunction={() => props.counter < minValue} color={props.counter < minValue? 'disabled' :'red'} callBack={()=>props.universalBtnHandler('-')}>-</Button>
                <Button disabledFunction={() => props.counter === 0} color={props.counter === 0 ? 'disabled' :'blue'} callBack={()=>props.universalBtnHandler('Reset')}>Reset</Button>
            </div>
        </div>
    );
};

