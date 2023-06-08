import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga'

import rootSaga from "../saga/saga";
import appReducer from "../reducers/app-reducer";

const reducers = combineReducers({
    app: appReducer
})

const sagaMiddleware = createSagaMiddleware()

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)
    ));
type reducersType = typeof reducers

export type GlobalStateType = ReturnType<reducersType>// глобальный тип стейта

//https://habr.com/ru/companies/alfa/articles/452620/ + https://www.youtube.com/watch?v=2yJXFMqEbJs&list=PLcvhF2Wqh7DM3z1XqMw0kPuxpbyMo3HvN&index=9&t=870s
//Конструкция, позволяющая автоматически получать общий тип, основываясь на объекте из ActionCreator для каждого редьюсера
type PropertiesTypes<T>=T extends {[key:string]: infer U}? U:never
//определяем тип переменной T = если переменная T является объектом {}, у которой ключ key является строкой (setStatus)
// например setStatus: (newStatus: string) => { return {type: SET_STATUS, newStatus} as const},
// то определяем тип экшн креатора (infer U) и возвращаем определенный тип, иначе ничего не возвращаем (never)

export type InferActionsTypes<T extends {[key:string]: (...args: any) => any}> = ReturnType<PropertiesTypes<T>>
//автоматическое определение типов экшенов для работы в редюсерах

sagaMiddleware.run(rootSaga)

export default store

// @ts-ignore
window.store = store // добавить просмотр стора через консоль
