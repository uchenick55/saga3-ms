import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga'

import rootSaga from "../saga/saga";
import appReducer from "../reducers/app-reducer";

const reducer1 = combineReducers({
    app: appReducer
})

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => createStore(
    reducer1,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

const storeRedux = configureStore({});

sagaMiddleware.run(rootSaga)

export default storeRedux

window.store = storeRedux
