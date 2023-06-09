import {
    call, //Блокирующий, выполнение последовательно - в воркерах (сагах) вызывает функции, как синхронные, так и асинхронные с аргументами.
    put, // аналог dispatch для actionCreator внутри генератора. Является блокирующей.
    takeLeading, // выполнить только первый в серии повторных вызовов экшена
    delay, // задержка из эффектов
    takeEvery, //Создать новую сагу - выполнить при каждом вызове экшена
    select, // аналог useSelector внутри генератора
    //takeLatest,  выполнить только последний в серии повторных вызовов экшена
    //take,  приостанавливает выполнение саги до тех пор, пока не будет выполнен указанный Action из паттерна take(pattern). Является блокирующей.
    //fork,  неблокирующий аналог put - паралельный вызов функций
    //all,  неблокирующий - возвращает данные в стейт после того как все из массива зарезолвятся
    //race, неблокирующий - возвращает данные в стейт после первого из массива зарезолвится
} from "@redux-saga/core/effects";
import {apiJsonPlaceholder} from "../../api/api";
import {appActions} from "../reducers/app-reducer";
import {allPostsActions, GET_ALL_POSTS, GET_COMMENTS_BY_POST_ID} from "../reducers/all-posts-reducer";
import {commentType, errorType, jSPHResponseType, postType, userDataType} from "../../common/commonTypes/commonTypes";
import {GET_USER_DATA, userActions} from "../reducers/user-reducer";
import {globalStateType} from "../store/store-redux";

const {toggleIsFetchingAC, setInitialisedAppAC, setErrorAC} = appActions // прелоадер и инициализация приложения
const {setAllPostsAC, setCommentsByPostIdAC, setShowCommentsAC} = allPostsActions // задание всех постов и комментариев в стор
const {setUserDataAC} = userActions // получение данных пользователя по ID

function* workerInitialApp() { // получение всех постов и инициализация приложения
    yield put( toggleIsFetchingAC( true ) ) // прелоадер показать
    yield delay( 500 ) // задержка из ТЗ

    const {response, error}:{response:jSPHResponseType<Array<postType>>, error: errorType}  =
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
    const {response, error}:{response:jSPHResponseType<Array<userDataType>>, error: errorType}  =
        yield call( apiJsonPlaceholder.getUserDataById, props.id )
    if (response) {// если есть данные
        yield put( setUserDataAC( response.data[0] ) )// записываем данные постов в стор
    } else {
        yield put( setErrorAC( error) )// записываем ошибку ответа от сервера
    }
    yield put( toggleIsFetchingAC( false ) ) // прелоадер убрать
}

function* workerGetCommentsById(props: {type: string, postId: number}) { // получить комментарии к посту
    // получаем массив showComments - какие комментарии отображаются, какие нет
    const showComments:Array<number> = yield select((state:globalStateType) => state.allPosts.showComments) // массив что показывать из комментариев

    if (showComments.includes(props.postId)) {// Если такой ID есть в showComments, то
        // без загрузки удаляем postId из showComments через локальный AC
        yield put( setShowCommentsAC(showComments.filter((postId:number)=>postId!==props.postId) ) )// удаляем id поста, комментарии где нужно скрыть

    }
    else {// Если Id нет в showComments, то
        //1) загружаем пачку комментариев (вдруг напечатали новые)
        yield put( toggleIsFetchingAC( true ) ) // прелоадер показать
        yield delay( 500 ) // задержка из ТЗ        const response: Array<commentType> = yield call( apiJsonPlaceholder.getCommentsByPostId, props.postId )
           const {response, error}:{response:jSPHResponseType<Array<commentType>>, error: errorType}  =
               yield call( apiJsonPlaceholder.getCommentsByPostId, props.postId )
        if (response) {// если есть данные
            yield put( setCommentsByPostIdAC( response.data ) )// записываем данные постов в стор
            //2) добавляем postId в showComments через локальный AC
            yield put( setShowCommentsAC([...showComments, props.postId] ) )// записываем данные постов в стор
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
