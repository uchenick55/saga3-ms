import {InferActionsTypes} from "../store/store-redux";
import {ErrorType} from "../../common/commonTypes/commonTypes";

export const SET_INITIALISED_APP = "myApp/app-reducer/SET_INITIALISED_APP"; //константа инициализации приложения
export const TOGGLE_IS_FETCHING = "myApp/users-reducer/TOGGLE_IS_FETCHING";// константа отображения/скрытия прелоадера
export const SET_ERROR = "myApp/users-reducer/SET_ERROR"; // константа ошибки с сервера

export const AppActions = {
    setInitialisedAppAC: () => { // экшн креатор  инициализации приложения
        return {type: SET_INITIALISED_APP} as const
    },
    toggleIsFetchingAC: (isFetching: boolean) => {
        return {type: TOGGLE_IS_FETCHING, isFetching} as const
    },
    setErrorAC: (error: ErrorType) => {
        return {type: SET_ERROR, error} as const
    },
}

type AppActionTypes = InferActionsTypes<typeof AppActions>

const initialState = {//стейт по умолчанию для инициализации приложения
    initialisedApp: false, // флаг приложение инициализировано?
    isFetching: false, // статус загрузки (крутилка)
    error: {} as ErrorType
}

export type AppInitialStateType = typeof initialState

const appReducer = (state: AppInitialStateType = initialState, action: AppActionTypes): AppInitialStateType => {//редьюсер инициализации приложения
    let stateCopy: AppInitialStateType;// объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_INITIALISED_APP:  // экшн инициализации приложения
            stateCopy = {
                ...state, // копия всего стейта
                initialisedApp: true, // смена флага инициализации приложения на true
            }
            return stateCopy; // возврат копии стейта после изменения
        case TOGGLE_IS_FETCHING:
            stateCopy = {
                ...state,
                isFetching: action.isFetching
            }
            return stateCopy; // возврат копии стейта после изменения
        case SET_ERROR:
            stateCopy = {
                ...state,
                error: action.error
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default appReducer