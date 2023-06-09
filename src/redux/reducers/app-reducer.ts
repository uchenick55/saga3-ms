import {inferActionsTypes} from "../store/store-redux";
import {errorType} from "../../common/commonTypes/commonTypes";

export const SET_INITIALISED_APP = "myApp/app-reducer/SET_INITIALISED_APP"; //константа инициализации приложения
export const TOGGLE_IS_FETCHING = "myApp/users-reducer/TOGGLE_IS_FETCHING";// константа отображения/скрытия прелоадера
export const SET_ERROR = "myApp/users-reducer/SET_ERROR"; // константа ошибки с сервера
export const SET_PATCH = "myApp/users-reducer/SET_PATCH"; // константа пути из URL

export const appActions = {
    setInitialisedAppAC: () => { // экшн креатор  инициализации приложения
        return {type: SET_INITIALISED_APP} as const
    },
    toggleIsFetchingAC: (isFetching: boolean) => {
        return {type: TOGGLE_IS_FETCHING, isFetching} as const
    },
    setErrorAC: (error: errorType) => {
        return {type: SET_ERROR, error} as const
    },
    setPatchAC: (patch: string) => {
        return {type: SET_PATCH, patch} as const
    },
}

type appActionTypes = inferActionsTypes<typeof appActions>

const initialState = {//стейт по умолчанию для инициализации приложения
    initialisedApp: false, // флаг приложение инициализировано?
    isFetching: false, // статус загрузки (крутилка)
    error: {} as errorType, // объект ошибки с сервера
    patch: "" // путь из адресной строки
}

type appInitialStateType = typeof initialState

const appReducer = (state: appInitialStateType = initialState, action: appActionTypes): appInitialStateType => {//редьюсер инициализации приложения
    switch (action.type) {
        case SET_INITIALISED_APP:  // экшн инициализации приложения
            return {
                ...state, // копия всего стейта
                initialisedApp: true, // смена флага инициализации приложения на true
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_PATCH:
            return {
                ...state,
                patch: action.patch
            }
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default appReducer