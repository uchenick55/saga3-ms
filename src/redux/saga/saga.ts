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
import {AppActions} from "../reducers/app-reducer";
import {AllPostsActions, GET_ALL_POSTS, GET_COMMENTS_BY_POST_ID} from "../reducers/all-posts-reducer";
import {CommentType, PostType, UserDataType} from "../../common/commonTypes/commonTypes";
import {GET_USER_DATA, UserActions} from "../reducers/user-reducer";

const {toggleIsFetchingAC, setInitialisedAppAC} = AppActions // прелоадер и инициализация приложения
const {setAllPostsAC, setCommentsByPostIdAC} = AllPostsActions // задание всех постов и комментариев в стор
const {setUserDataAC} = UserActions // получение данных пользователя по ID

function* workerInitialApp() {
    yield put( toggleIsFetchingAC( true ) ) // прелоадер показать
    const response: Array<PostType> = yield call( apiJsonPlaceholder.getPosts ) // данные всех постов с сервера
    yield delay( 500 ) // задержка из ТЗ
    yield put( setAllPostsAC( response ) )// записываем данные постов в стор
    yield put( setInitialisedAppAC() ) // сменить флаг - приложение инициализировано
    yield put( toggleIsFetchingAC( false ) ) // прелоадер убрать
}

function* workerGetCommentsById(props: {type: string, postId: number}) {
    yield put( toggleIsFetchingAC( true ) ) // прелоадер показать
    yield delay( 500 ) // задержка из ТЗ
    const response: Array<CommentType> = yield call( apiJsonPlaceholder.getCommentsByPostId, props.postId )
    console.log(response)
    yield put( setCommentsByPostIdAC( response ) )// записываем данные постов в стор
    yield put( toggleIsFetchingAC( false ) ) // прелоадер убрать
}
function* workerGetUserDataById(props: {type: string, id: number}) {
    yield put( toggleIsFetchingAC( true ) ) // прелоадер показать
    yield delay( 500 ) // задержка из ТЗ
    const response: UserDataType = yield call( apiJsonPlaceholder.getUserDataById, props.id )
    yield put( setUserDataAC( response ) )// записываем данные постов в стор
    yield put( toggleIsFetchingAC( false ) ) // прелоадер убрать
}

function* watchSaga() {
    yield takeLeading( GET_ALL_POSTS, workerInitialApp );
    yield takeEvery( GET_COMMENTS_BY_POST_ID, workerGetCommentsById )
    yield takeEvery( GET_USER_DATA, workerGetUserDataById )
}

export default function* rootSaga() {
    yield watchSaga()
}
