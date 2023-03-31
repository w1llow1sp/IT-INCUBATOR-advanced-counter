import React, {useState} from "react";
import './App.css';

import {BtnNameTypes} from "./components-ui/Button/Button";
import {Counter} from './components/Counter/Counter';
import {Card} from "./components-ui/Card/Card";
import {ValueSetter} from "./components/ValueSetter/ValueSetter";

function App() {

  const minValueAsString = localStorage.getItem('minInputValue')
  const initMinValue = minValueAsString && JSON.parse(minValueAsString)
  console.log('initMinValue', initMinValue)

  let [counter, setCounter] = useState<number>(0);

  //создадим локальный стейт для минимального числа из инпута
  //сетаем его в ValueSetter в localstorage
    const [minInputValue, setMinInputValue] = useState<number>(initMinValue ? initMinValue : 0);
    console.log(minInputValue)

  //создадим локальный стейт для максимального числа из инпута
  //сетаем его в ValueSetter в localstorage
    const [maxInputValue, setMaxInputValue] = useState<number>(0);
    console.log(maxInputValue)
    const [disabled, setDisabled] = useState<boolean>(false);


  //функция, которая отправляет числа из инпута в localstorage
  // мы ее кидаем как props в ValueSetter и используем на кнопке
  function addNumbersToLocalStorage(){
    localStorage.setItem('minInputValue',JSON.stringify(minInputValue))
    localStorage.setItem('maxInputValue',JSON.stringify(maxInputValue))
      setCounter(minInputValue)
    setDisabled(true)
    }


  // создадим переменные для минимального и максимального значения
  // и конвертнем из строки в число

    /* Универсальная функция для компоненты Button ,
     в зависимости от имени кнопки  */
  const universalBtnHandler = (name:BtnNameTypes) => {
    let maxValue= Number(maxInputValue)
    let minValue = Number(minInputValue)
    switch (name) {
      case "+": {
         return counter === maxValue
             ? counter=maxValue
             : setCounter(++counter)
           // localStorage.setItem('counter',JSON.stringify(counter))

      }
      // обрабатываем  не выводим значения до нуля
      case "-": {
        return counter < minValue
            ? counter=minValue
            : setCounter(--counter)
      }
      //обнуляем
      default : {
        return setCounter(minValue)
      }
    }}

  return (
    <div className="App">
      <Card>
        <ValueSetter setMinInputValue={setMinInputValue}
                     minInputValue={minInputValue}
                     maxInputValue={maxInputValue}
                     setMaxInputValue={setMaxInputValue}
                     addNumbersToLocalStorage={addNumbersToLocalStorage}
                     disabled={disabled}

        />
      </Card>
      <Card>
        <Counter counter={counter}
                 universalBtnHandler={universalBtnHandler}
                 minInputValue={minInputValue}
                 maxInputValue={maxInputValue}
        />
      </Card>

    </div>
  );
}

export default App;
