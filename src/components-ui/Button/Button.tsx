import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './Button.module.scss'
import {v1} from 'uuid/index';
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>
type ButtonProps = DefaultButtonPropsType & {
    //id:string
    color: string
    children : string
}

export type BtnNameTypes = '+' | '-' | 'Reset'

 export  const Button = ({color, children, ...rest}:ButtonProps) => {
    const className= `${styles.button} ${styles[`button_${color}`]}`
     //const disabled = props.disabledFunction ? props.disabledFunction() : false;
    return (
        <button  className={className} { ...rest } >{children}</button>
    );
};

