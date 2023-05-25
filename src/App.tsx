import React, {FC} from "react";
import './App.css';
import {AppContainerProps} from "./components/AppContainer";
import {Card} from "./components-ui/Card/Card";
import {CounterContainer} from "./components/Counter/CounterContainer/CounterContaiter";
import {ValueSetterContainer} from "./components/ValueSetter/ValueSetterContainer/ValueSetterContainer";


export const App: FC<AppContainerProps> = ({isShow}) => {
    return (
        <div className="App">
            <div className={'appWrap'}>
                <Card>
                    {isShow === false
                        ? <CounterContainer/>
                        : <ValueSetterContainer/>
                    }</Card>
            </div>
        </div>


    );
}

