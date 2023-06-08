const SET_INITIALISED_APP = "myApp/app-reducer/SET_INITIALISED_APP"; //константа инициализации приложения

export const AppActions = {
    setInitialisedApp: () => { // экшн креатор  инициализации приложения
        return {type: SET_INITIALISED_APP} as const
    }
}

type AppActionTypes = any //InferActionsTypes<typeof AppActions>

const initialState = {//стейт по умолчанию для инициализации приложения
    initialisedApp: false, // флаг приложение инициализировано?
    isFetching: false, // статус загрузки (крутилка)
}

type initialStateType = typeof initialState

const appReducer = (state: initialStateType = initialState, action:AppActionTypes): initialStateType => {//редьюсер инициализации приложения
    let stateCopy: initialStateType;// объявлениечасти части стейта до изменения редьюсером
    switch (action.type) {
        case SET_INITIALISED_APP:  // экшн инициализации приложения
            stateCopy = {
                ...state, // копия всего стейта
                initialisedApp: true, // смена флага инициализации приложения на true
            }
            return stateCopy; // возврат копии стейта после изменения
        default:
            return state; // по умолчанию стейт возврашается неизмененным
    }
}

export default appReducer