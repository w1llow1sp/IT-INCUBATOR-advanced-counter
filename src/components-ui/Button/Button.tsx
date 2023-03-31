import React from 'react';
import styles from './Button.module.scss'
import {v1} from 'uuid/index';

type ButtonProps = {
    //id:string
    color: string
    callBack: () => void
    children : string
    disabledFunction?: () => boolean
}

export type BtnNameTypes = '+' | '-' | 'Reset'

 export  const Button = (props:ButtonProps) => {
    const className= `${styles.button} ${styles[`button_${props.color}`]}`
     const disabled = props.disabledFunction ? props.disabledFunction() : false;

    return (
        <button  className={className} onClick={props.callBack} disabled={disabled} >{props.children}</button>
    );
};

