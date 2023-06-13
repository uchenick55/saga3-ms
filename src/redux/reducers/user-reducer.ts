import {InferActionsTypes} from "../store/store-redux";
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

type userActionsTypes = InferActionsTypes<typeof userActions>

const initialState = {//стейт по умолчанию
    userData: {} as userDataType, // данные по выбранному пользователю
}
export type UserInitialStateType = typeof initialState

const UserReducer = (state: UserInitialStateType = initialState, action: userActionsTypes): UserInitialStateType => {//редьюсер инициализации приложения
    let stateCopy: UserInitialStateType;// объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_USER_DATA_TO_STATE:  // экшн записи данных пользователя в стейт
            stateCopy = {
                ...state, // копия всего стейта
                userData: action.userData, // запись данных пользователя в стейт
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default UserReducer