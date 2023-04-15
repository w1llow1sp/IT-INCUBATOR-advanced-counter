//TODO:Как-то задезейблить кнопочку при ошибках

import React, {FC} from 'react';
import styles from './ValueSetter.module.css'
import {Input} from "../../components-ui/Input/Input";
import {Button} from "../../components-ui/Button/Button";

type AppPropsType = {
    minInputValue:number
    setMinInputValue:(minInputValue:number)=>void

    maxInputValue:number
    setMaxInputValue:(maxInputValue:number)=>void

    saveValuesToLocalStorage:()=>void
    disabled: boolean
    show:boolean
    setShow:any
}

export const ValueSetter:FC<AppPropsType> = ({
                                                 minInputValue,
                                                 setMinInputValue,
                                                 maxInputValue,
                                                 setMaxInputValue,
                                                 saveValuesToLocalStorage,
                                                 disabled,
                                                 show,
                                                 setShow
                                             }) => {

    // Функции

    const handleValueChange  = (value: string, name: 'start' | 'max') => {
        name === 'start'
            ? setMinInputValue(+value)
            : setMaxInputValue(+value)
    }
    const buttonFunc = ()=> {
        setShow();
        saveValuesToLocalStorage()}


    const getError = (minValue: number, maxValue: number): string => {
        if (minValue === maxValue) {
            return 'Values cant be equal!';
        } else if (minValue <= 0 || maxValue <= 0) {
            return 'Values must be greater zero!';
        } else if (minValue > maxValue) {
            return 'Min value cant be greater than Max';
        } else {
            return '';
        }
    };

    // Создание переменных

    const error=getError(minInputValue,maxInputValue)

    //Рендер
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
                           callback={handleValueChange }
                           inputValue={maxInputValue}
                           />

                </div>
            <div className={styles.error}>
                {error}
            </div>

                <div className={styles.input__wrapper}>
                    <p className={styles.input__text}>Min value:</p>
                    <Input type={"number"}
                           name='start'
                           min={0}
                           styles={'primary'}
                           required={true}
                           callback={handleValueChange }
                           inputValue={minInputValue}/>

                </div>
            <div className={styles.error }>
                {error}
            </div>

            <div>
                <Button color={'green'}
                        callBack={buttonFunc}
                >Set Values

                </Button>
            </div>

        </div>
    );
};


/*
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
                {/!*                    <input className={styles.input_primary}
                           value={props.maxInputValue}
                           onChange={setMaxValue}
                           min={0}
                           type={'number'}
                           required/>*!/}

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
                {/!*                    <input className={styles.input_primary}
                           value={props.minInputValue}
                           onChange={setMinValue}
                           min={0}
                           type={'number'}
                           required
                    />*!/}
            </div>
            <Button color={props.disabled ? 'disabled':'green'}
                    disabled={props.disabled}
                    callBack={props.addNumbersToLocalStorage}
            >Set Values

            </Button>
        </div>
    );
};*/
