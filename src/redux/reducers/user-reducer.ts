import {inferActionsTypes} from "../store/store-redux";
import {userDataType} from "../../common/commonTypes/commonTypes";

export const GET_USER_DATA = "myApp/app-reducer/GET_USER_DATA"; //константа получения данных по пользователю
export const SET_USER_DATA_TO_STATE = "myApp/app-reducer/SET_USER_DATA_TO_STATE"; //константа записи данных по пользователю в стей

export const userActions = {
    getUserDataAC: (id:number) => { // экшн креатор получения данных по ID пользователя
        return {type: GET_USER_DATA, id} as const
    },
    setUserDataAC: (userData: userDataType) => { // экшн креатор записи данных пользователя в стейт
        return {type: SET_USER_DATA_TO_STATE, userData} as const
    },
}

type userActionsTypes = inferActionsTypes<typeof userActions>

const initialState = {//стейт по умолчанию
    userData: {} as userDataType, // данные по выбранному пользователю
}
type userInitialStateType = typeof initialState

const userReducer = (state: userInitialStateType = initialState, action: userActionsTypes): userInitialStateType => {//редьюсер инициализации приложения
    switch (action.type) {
        case SET_USER_DATA_TO_STATE:  // экшн записи данных пользователя в стейт
            return {
                ...state, // копия всего стейта
                userData: action.userData, // запись данных пользователя в стейт
            }
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default userReducer