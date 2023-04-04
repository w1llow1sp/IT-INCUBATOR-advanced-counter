import React, {useState} from "react";
import './App.css';

import {Counter} from './components/Counter/Counter';
import {Card} from "./components-ui/Card/Card";
import {ValueSetter} from "./components/ValueSetter/ValueSetter";

//TODO: Разобраться со стилями в Counter.tsx counterColor
//TODO: Спросить про поведение кнопки в ValueSetter.tsx
//TODO: Код-ревью
//TODO: Спросить, как реализовать


function App() {

  // Значения из LocalStorage
  const minValueAsString = localStorage.getItem('minInputValue')
  const initMinValue = minValueAsString && JSON.parse(minValueAsString)
  const [minInputValue, setMinInputValue] = useState<number>
  (initMinValue ? initMinValue : 0);

  // Локальные стейты
  const [maxInputValue, setMaxInputValue] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  let [counter, setCounter] = useState<number>(0);

  // Создание переменных
  let maxValue= Number(maxInputValue)
  let minValue = Number(minInputValue)

  // Функции
  function addNumbersToLocalStorage(){
    localStorage.setItem('minInputValue',JSON.stringify(minInputValue))
    localStorage.setItem('maxInputValue',JSON.stringify(maxInputValue))
      setCounter(minInputValue)
    setDisabled(true)
    }

  function PlusButtonHandler () {
    if (counter >= maxValue) {
    return  counter=maxValue
    }
    setCounter(++counter)
  }

  function MinusButtonHandler () {
    if ( counter <= minValue) {
     return  counter=minValue
    }
    setCounter(--counter)
  }

  function ResetButtonHandler () {
    return setCounter(minValue)
  }

  //Рендер
  return (
    <div className="App">
      <div className={'appWrap'}>
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
                 minInputValue={minInputValue}
                 maxInputValue={maxInputValue}

                 PlusButtonHandler={PlusButtonHandler}
                 MinusButtonHandler={MinusButtonHandler}
                 ResetButtonHandler={ResetButtonHandler}
        />
      </Card>
      </div>
    </div>
  );
}

export default App;
