import {
    call, //Блокирующий, выполнение последовательно - в воркерах (сагах) вызывает функции, как синхронные, так и асинхронные с аргументами.
    put, // аналог dispatch для actionCreator внутри генератора. Является блокирующей.
    takeLeading, // выполнить только первый в серии повторных вызовов экшена
    delay, // задержка из эффектов
    takeEvery, //Создать новую сагу - выполнить при каждом вызове экшена
    takeLatest, // выполнить только последний в серии повторных вызовов экшена
    select, // аналог useSelector внутри генератора
    take, // приостанавливает выполнение саги до тех пор, пока не будет выполнен указанный Action из паттерна take(pattern). Является блокирующей.
    fork, // неблокирующий аналог put - паралельный вызов функций
    all, // неблокирующий - возвращает данные в стейт после того как все из массива зарезолвятся
    race,// неблокирующий - возвращает данные в стейт после первого из массива зарезолвится
} from "@redux-saga/core/effects";
import {apiJsonPlaceholder} from "../../api/api";
import {SET_INITIALISED_APP, AppActions} from "../reducers/app-reducer";
import {AllPostsActions, GET_ALL_POSTS} from "../reducers/all-posts-reducer";
import {PostType} from "../../common/commonTypes/commonTypes";

const {toggleIsFetchingAC, setInitialisedAppAC} = AppActions // прелоадер на время загрузки
const {setAllPostsAC} = AllPostsActions // задание всех постов в стор

function* workerInitialApp () {
    yield put(toggleIsFetchingAC(true)) // прелоадер показать
    const response: Array<PostType> = yield call(apiJsonPlaceholder.getPosts) // данные всех постов с сервера
    yield delay(500) // задержка из ТЗ
    yield put(setAllPostsAC(response))// записываем данные постов в стор
    yield put(setInitialisedAppAC()) // сменить флаг - приложение инициализировано
    yield put(toggleIsFetchingAC(false)) // прелоадер убрать
}

function* watchInitialAppSaga () {
    yield takeLeading (GET_ALL_POSTS, workerInitialApp)
}

export default function* rootSaga () {
    yield watchInitialAppSaga()
}
