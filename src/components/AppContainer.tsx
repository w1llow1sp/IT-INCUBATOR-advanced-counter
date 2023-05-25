import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {App} from "../App";

// Типы
export type AppContainerProps = {
    isShow:boolean
}

const PropsToApp = (state:AppStateType):AppContainerProps => {
    return  {
        isShow:state.commonReducer.isShow
    }
}


export const AppContainer = connect(PropsToApp)(App)