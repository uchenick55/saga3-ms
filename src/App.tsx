import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppActions} from "./redux/reducers/app-reducer";
import {GlobalStateType} from "./redux/store/store-redux";
import Preloader from "./common/Preloader/Preloader";
import {delay} from "./redux/saga/saga";

const App: React.FC = () => {
    const initialisedApp: boolean = useSelector( (state: GlobalStateType) => state.app.initialisedApp )

    const dispatch = useDispatch()
    useEffect( () => {
        delay(0.5).then(()=>{
                dispatch( AppActions.setInitialisedApp() )// запускаем инициализацию приложения
            }
        )
    }, [] )
    if (!initialisedApp) { // если приложение еще не инициализировано
        return <Preloader/> // показать статус загрузки
    }

    return <div>
        123
    </div>
}

export default App;
