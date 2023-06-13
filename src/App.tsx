import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {globalStateType} from "./redux/store/store-redux";
import Preloader from "./common/Preloader/Preloader";
import {allPostsActions} from "./redux/reducers/all-posts-reducer";
import {HashRouter} from "react-router-dom";
import ErrorBoundary from "./common/ErrorBoundary/ErrorBoundary";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {errorType} from "./common/commonTypes/commonTypes";
import ErrorsRender from "./components/ErrorsRender";
import FooterContainer from "./components/Footer/FooterContainer";

const App: React.FC = () => {
    const initialisedApp: boolean = useSelector( (state: globalStateType) => state.app.initialisedApp )
    const error: errorType = useSelector( (state: globalStateType) => state.app.error )


    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( allPostsActions.getAllPostsAC() )// запускаем инициализацию приложения (получение данных с сервера)
    }, [dispatch] )

    if (!initialisedApp && !error) { // если не инициализировано приложение и ошибки отсутствуют, показать прелоадер
        return <Preloader/>
    }

    return <div>
        {error.stack // вывод ошибок запроса или контента
            ? <ErrorsRender error={error} /> //вывод ошибок при наличии
            : <HashRouter> {/*BrowserRouter для продакшн, HashRouter для gh-pages*/}
                <ErrorBoundary> {/*Общий обработчик ошибок во всем приложении*/}
                    <HeaderContainer/> {/*заголовок*/}
                    <ContentContainer/> {/*страницы контента в зависмости от URL*/}
                    <FooterContainer/>
                </ErrorBoundary>
            </HashRouter>
        }

    </div>
}

export default App;
