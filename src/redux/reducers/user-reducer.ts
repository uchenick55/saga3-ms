import {InferActionsTypes} from "../store/store-redux";
import {UserDataType} from "../../common/commonTypes/commonTypes";

export const GET_USER_DATA = "myApp/app-reducer/GET_USER_DATA"; //константа получения данных по пользователю
export const SET_USER_DATA_TO_STATE = "myApp/app-reducer/SET_USER_DATA_TO_STATE"; //константа записи данных по пользователю в стей

export const UserActions = {
    getUserDataAC: (id:number) => { // экшн креатор получения данных по ID пользователя
        return {type: GET_USER_DATA, id} as const
    },
    setUserDataAC: (UserData: UserDataType) => { // экшн креатор записи данных пользователя в стейт
        return {type: SET_USER_DATA_TO_STATE, UserData} as const
    },
}

export type UserActionsTypes = InferActionsTypes<typeof UserActions>

const initialState = {//стейт по умолчанию
    UserData: {} as UserDataType, // данные по выбранному пользователю
}
export type UserInitialStateType = typeof initialState

const UserReducer = (state: UserInitialStateType = initialState, action: UserActionsTypes): UserInitialStateType => {//редьюсер инициализации приложения
    let stateCopy: UserInitialStateType;// объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_USER_DATA_TO_STATE:  // экшн записи данных пользователя в стейт
            stateCopy = {
                ...state, // копия всего стейта
                UserData: action.UserData, // запись данных пользователя в стейт
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default UserReducer