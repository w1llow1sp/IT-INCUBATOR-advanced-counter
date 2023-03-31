import React, {ChangeEvent, useState} from 'react';
import styles from './ValueSetter.module.css'
import {Input} from "../../components-ui/Input/Input";
import {Button} from "../../components-ui/Button/Button";

type AppPropsType = {
    minInputValue:number
    setMinInputValue:(minInputValue:number)=>void

    maxInputValue:number
    setMaxInputValue:(maxInputValue:number)=>void

    addNumbersToLocalStorage:()=>void
    disabled: boolean

}

export const ValueSetter = (props:AppPropsType) => {

    const setMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.setMaxInputValue(+e.currentTarget.value)
        // setDosabled(false)
    }

    const setMinValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.setMinInputValue(+e.currentTarget.value)

    }

    const testFunc = (value: string, name: 'start' | 'max') => {
        name === 'start' ?
            props.setMinInputValue(+value)
            :  props.setMaxInputValue(+value)
        // setDisabled(false)
    }

    return (
        <div>
            <h2>Please, write max and min values</h2>
                <div className={styles.input__wrapper}>
                    <p className={styles.input__text}>Max value:</p>
                    <Input type={"number"}
                           styles={'primary'}
                           min={0}
                           name='max'
                           required={true}
                           callback={testFunc}
                           inputValue={props.maxInputValue}
                           />
{/*                    <input className={styles.input_primary}
                           value={props.maxInputValue}
                           onChange={setMaxValue}
                           min={0}
                           type={'number'}
                           required/>*/}

                </div>
                <div className={styles.input__wrapper}>
                    <p className={styles.input__text}>Min value:</p>
                    <Input type={"number"}
                           name='start'
                           min={0}
                           styles={'primary'}
                           required={true}
                           callback={testFunc}
                           inputValue={props.minInputValue}/>
{/*                    <input className={styles.input_primary}
                           value={props.minInputValue}
                           onChange={setMinValue}
                           min={0}
                           type={'number'}
                           required
                    />*/}
                </div>
                <Button color={props.disabled ? 'disabled':'green'}
                        disabled={props.disabled}
                        callBack={props.addNumbersToLocalStorage}
                >Set Values

                </Button>
        </div>
    );
};

//TODO: Сделать обрабочик ошибки от нуля