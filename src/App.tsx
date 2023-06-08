import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "./redux/store/store-redux";
import Preloader from "./common/Preloader/Preloader";
import {AllPostsActions} from "./redux/reducers/all-posts-reducer";

const App: React.FC = () => {
    const isFetching: boolean = useSelector( (state: GlobalStateType) => state.app.isFetching )

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( AllPostsActions.getAllPostsAC() )// запускаем инициализацию приложения (получение данных с сервера)
    }, [] )

    if (isFetching) { // если идет загрузка, показать прелоадер
        return <Preloader/>
    }

    return <div>
        123
    </div>
}

export default App;
