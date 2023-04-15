import React, {useState} from "react";
import './App.css';

import {Counter} from './components/Counter/Counter';
import {Card} from "./components-ui/Card/Card";
import {ValueSetter} from "./components/ValueSetter/ValueSetter";

//TODO: Counter.tsx
//TODO: Разобраться со стилями в Counter.tsx (counterColor)
//TODO: Вывести надпись до ввода значений 'Please set values' до отправки в Counter.tsx
//TODO: ValueSetter.tsx
//TODO: Спросить про поведение кнопки в ValueSetter.tsx


function App() {

  // Значения из LocalStorage
  const minValueAsString = localStorage.getItem('minInputValue')
  const initMinValue = minValueAsString && JSON.parse(minValueAsString)
  const [minInputValue, setMinInputValue] = useState<number>
  (initMinValue ? initMinValue : 0);

  const maxValueAsString = localStorage.getItem('maxInputValue')
  const initMaxValue = maxValueAsString && JSON.parse(maxValueAsString)
  const [maxInputValue, setMaxInputValue] = useState<number>
  (initMaxValue? initMaxValue : 5);


  // Локальные стейты
  const [disabled, setDisabled] = useState<boolean>(false);
  let [counter, setCounter] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false)

  // Создание переменных
  let maxValue= Number(maxInputValue)
  let minValue = Number(minInputValue)

  // Функции
  function saveValuesToLocalStorage(){
    localStorage.setItem('minInputValue',JSON.stringify(minInputValue))
    localStorage.setItem('maxInputValue',JSON.stringify(maxInputValue))
      setCounter(minInputValue)
    setDisabled(true)
    }

    function showHandler () {
      setShow(!show)
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
        {show === false
            ?
            <Counter
                counter={counter}
          minInputValue={minInputValue}
          maxInputValue={maxInputValue}

          PlusButtonHandler={PlusButtonHandler}
          MinusButtonHandler={MinusButtonHandler}
          ResetButtonHandler={ResetButtonHandler}
          disabled={disabled}
                show={show}
                setShow={showHandler}
          />
        :
            <ValueSetter setMinInputValue={setMinInputValue}
                         minInputValue={minInputValue}
                         maxInputValue={maxInputValue}
                         setMaxInputValue={setMaxInputValue}
                         saveValuesToLocalStorage={saveValuesToLocalStorage}
                         disabled={disabled}
                         show={show}
                         setShow={showHandler}

            />
        }</Card>
      </div>
    </div>


  );
}

export default App;
