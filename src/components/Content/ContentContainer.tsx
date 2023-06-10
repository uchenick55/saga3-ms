import React, {memo, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import classes from "./ContentContainer.module.css"
import ErrorBoundary from "../../common/ErrorBoundary/ErrorBoundary";

 const AllPostsList2 = React.lazy( () => import("../AllPostsList2/AllPostsList2") )
 const UserPosts = React.lazy( () => import("../UserPosts/UserPosts") )
 const AboutMe = React.lazy( () => import("../AboutMe/AboutMe") )

let ContentContainer: React.FC =  () => { // вынес роутинг контента в отдельную компоненту

    return <div>
        <ErrorBoundary> {/*Локальный обработчик ошибок ContentContainer*/}
            <Suspense fallback={
                <div>Загрузка...</div>}> {/*Оборачивает компоненты, по которым идет Lazy import и выдает fallback на время загрузки*/}
                <div className={classes.contentContainer}>
                    <Routes> {/*в зависимости от URL подгрузка разного контента*/}
                        <Route path='' element={<AllPostsList2/>}/> {/*Общий список постов*/}
                        <Route path='/user-posts/*' element={<UserPosts/>}/> {/*посты выбранного пользователя*/}
                        <Route path='/about-me/*' element={<AboutMe/>}/> {/*Обо мне*/}
                     </Routes>
                </div>
            </Suspense>
        </ErrorBoundary>
    </div>
}
export default ContentContainer
