import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "./redux/store/store-redux";
import Preloader from "./common/Preloader/Preloader";
import {AllPostsActions} from "./redux/reducers/all-posts-reducer";
import {HashRouter} from "react-router-dom";
import ErrorBoundary from "./common/ErrorBoundary/ErrorBoundary";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Container} from "react-bootstrap";

const App: React.FC = () => {
    const initialisedApp: boolean = useSelector( (state: GlobalStateType) => state.app.initialisedApp )


    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( AllPostsActions.getAllPostsAC() )// запускаем инициализацию приложения (получение данных с сервера)
    }, [] )

    if (!initialisedApp) { // если не инициализировано приложение, показать прелоадер
        return <Preloader/>
    }

    return <div>
        <HashRouter> {/*BrowserRouter для продакшн, HashRouter для gh-pages*/}
            <ErrorBoundary> {/*Общий обработчик ошибок во всем приложении*/}
                <HeaderContainer /> {/*заголовок*/}
                <ContentContainer/> {/*страницы контента в зависмости от URL*/}
                {/*<FooterBS/> */}
            </ErrorBoundary>
        </HashRouter></div>
}

export default App;
