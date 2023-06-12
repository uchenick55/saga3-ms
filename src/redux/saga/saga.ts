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
import {CommentType, ErrorType, JSPHResponseType, PostType, UserDataType} from "../../common/commonTypes/commonTypes";
import {GET_USER_DATA, UserActions} from "../reducers/user-reducer";
import {GlobalStateType} from "../store/store-redux";

const {toggleIsFetchingAC, setInitialisedAppAC, setErrorAC} = AppActions // прелоадер и инициализация приложения
const {setAllPostsAC, setCommentsByPostIdAC, setShowCommentsAC} = AllPostsActions // задание всех постов и комментариев в стор
const {setUserDataAC} = UserActions // получение данных пользователя по ID

function* workerInitialApp() { // получение всех постов и инициализация приложения
    yield put( toggleIsFetchingAC( true ) ) // прелоадер показать
    yield delay( 500 ) // задержка из ТЗ

    const {response, error}:{response:JSPHResponseType<Array<PostType>>, error: ErrorType}  =
        yield call( apiJsonPlaceholder.getPosts ) // данные всех постов с сервера

    if (response) { // если есть данные
        yield put( setAllPostsAC( response.data ) )// записываем данные постов в стейт
        yield put( setInitialisedAppAC() ) // сменить флаг - приложение инициализировано
    } else {
        yield put( setErrorAC( error) )// записываем ошибку ответа от сервера
    }
    yield put( toggleIsFetchingAC( false ) ) // прелоадер убрать
}

function* workerGetUserDataById(props: {type: string, id: number}) { // получить данные о пользователе
    yield put( toggleIsFetchingAC( true ) ) // прелоадер показать
    yield delay( 500 ) // задержка из ТЗ
    const {response, error}:{response:JSPHResponseType<Array<UserDataType>>, error: ErrorType}  =
        yield call( apiJsonPlaceholder.getUserDataById, props.id )
    if (response) {// если есть данные
        yield put( setUserDataAC( response.data[0] ) )// записываем данные постов в стор
    } else {
        yield put( setErrorAC( error) )// записываем ошибку ответа от сервера
    }
    yield put( toggleIsFetchingAC( false ) ) // прелоадер убрать
}

function* workerGetCommentsById(props: {type: string, postId: number}) { // получить комментарии к посту
    // получаем массив ShowComments - какие комментарии отображаются, какие нет
    const ShowComments:Array<number> = yield select((state:GlobalStateType) => state.allPosts.ShowComments) // массив что показывать из комментариев

    if (ShowComments.includes(props.postId)) {// Если такой ID есть в ShowComments, то
        // без загрузки удаляем postId из ShowComments через локальный AC
        yield put( setShowCommentsAC(ShowComments.filter((postId:number)=>postId!==props.postId) ) )// удаляем id поста, комментарии где нужно скрыть

    }
    else {// Если Id нет в ShowComments, то
        //1) загружаем пачку комментариев (вдруг напечатали новые)
        yield put( toggleIsFetchingAC( true ) ) // прелоадер показать
        yield delay( 500 ) // задержка из ТЗ        const response: Array<CommentType> = yield call( apiJsonPlaceholder.getCommentsByPostId, props.postId )
           const {response, error}:{response:JSPHResponseType<Array<CommentType>>, error: ErrorType}  =
               yield call( apiJsonPlaceholder.getCommentsByPostId, props.postId )
        if (response) {// если есть данные
            yield put( setCommentsByPostIdAC( response.data ) )// записываем данные постов в стор
            //2) добавляем postId в ShowComments через локальный AC
            yield put( setShowCommentsAC([...ShowComments, props.postId] ) )// записываем данные постов в стор
        } else {
            yield put( setErrorAC( error) )// записываем ошибку ответа от сервера
        }
        yield put( toggleIsFetchingAC( false ) ) // прелоадер убрать

    }
}

function* watchSaga() {
    yield takeLeading( GET_ALL_POSTS, workerInitialApp );
    yield takeEvery( GET_COMMENTS_BY_POST_ID, workerGetCommentsById )
    yield takeEvery( GET_USER_DATA, workerGetUserDataById )
}

export default function* rootSaga() {
    yield watchSaga()
}
