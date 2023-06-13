import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import classes from "./ContentContainer.module.css"
import ErrorBoundary from "../../common/ErrorBoundary/ErrorBoundary";
import {Container} from "react-bootstrap";
import s from "../../common/classes/common.module.css"

const AllPostsList2 = React.lazy( () => import("../AllPostsList/AllPostsList") )
const UserPosts = React.lazy( () => import("../UserPosts/UserCommon") )
const AboutMe = React.lazy( () => import("../AboutMe/AboutMe") )

let ContentContainer: React.FC = () => { // вынес роутинг контента в отдельную компоненту

    return <div>
        <Container style={{marginTop: "6rem", marginBottom: "2rem" }} className='border-1'>
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
        </Container>
    </div>
}
export default ContentContainer
