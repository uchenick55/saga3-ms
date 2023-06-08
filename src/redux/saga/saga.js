import {
    select, // аналог useSelector внутри генератора
    call, //Блокирующий, выполнение последовательно - в воркерах (сагах) вызывает функции, как синхронные, так и асинхронные с аргументами.
    //     const {hits} = yield call (getQueryNews, "123")
    //     yield put(setQueryNewsAC(hits))
    put, // аналог dispatch для actionCreator внутри генератора. Является блокирующей.
    take, // приостанавливает выполнение саги до тех пор, пока не будет выполнен указанный Action из паттерна take(pattern). Является блокирующей.
    takeEvery, // выполнить при каждом вызове экшена
    takeLatest, // выполнить только последний в серии повторных вызовов экшена
    takeLeading, // выполнить только первый в серии повторных вызовов экшена
    fork, // неблокирующий аналог put - паралельный вызов функций
    all, // неблокирующий - возвращает данные в стейт после того как все из массива зарезолвятся
    race,// неблокирующий - возвращает данные в стейт после первого из массива зарезолвится
} from "@redux-saga/core/effects";
import {apiJsonPlaceholder} from "../../api/api";
import {SET_INITIALISED_APP} from "../reducers/app-reducer";

export const delay = (time) => new Promise ((resolve, reject) =>{ // задержка в выполнении yield
    setTimeout(resolve, time*1000)
})

function* workerInitialApp () {
    const response = yield call(apiJsonPlaceholder.getPosts)
    console.log(response)
}

function* watchInitialAppSaga () {

    yield takeEvery (SET_INITIALISED_APP, workerInitialApp)

}

export default function* rootSaga () {
    yield watchInitialAppSaga()

}
