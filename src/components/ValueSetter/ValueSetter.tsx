import React from 'react';
import styles from './ValueSetter.module.css'
import {Input} from "../../components-ui/Input/Input";
import {Button} from "../../components-ui/Button/Button";

type AppPropsType = {
    minInputValue:string
    setMinInputValue:(minInputValue:string)=>void

    maxInputValue:string
    setMaxInputValue:(maxInputValue:string)=>void

    addNumbersToLocalStorage:()=>void

}

export const ValueSetter = (props:AppPropsType) => {

    return (
        <div>
            <h2>Please, write max and min values</h2>

                <div className={styles.input__wrapper}>
                    <p className={styles.input__text}>Max value:</p>
                    <Input type={"number"}
                           styles={'primary'}
                           min={0}
                           required={true}
                           setInputValue={props.setMaxInputValue}
                           inputValue={props.maxInputValue}/>

                </div>
                <div className={styles.input__wrapper}>
                    <p className={styles.input__text}>Min value:</p>
                    <Input type={"number"}
                           min={0}
                           styles={'primary'}
                           required={true}
                           setInputValue={props.setMinInputValue}
                           inputValue={props.minInputValue}/>
                </div>
                <Button color={'green'} callBack={props.addNumbersToLocalStorage} >Set Values</Button>
        </div>
    );
};

//TODO: Сделать обрабочик ошибки от нуля