import {postType} from "../../../common/commonTypes/commonTypes";

type postListSortFnType = (postsList: Array<postType>, sortHeaderDirection: boolean | undefined) => Array<postType>
const postListSortFn:postListSortFnType = (postsList, sortHeaderDirection) => {
    sortHeaderDirection !== undefined &&
    postsList.sort( (a: postType, b: postType) => { // сортируем массив постов по заголовкам
        const partA = a.title.toLowerCase(); // ignore upper and lowercase
        const partB = b.title.toLowerCase(); // ignore upper and lowercase
        return sortHeaderDirection // если прямая/обратная сортировка
            ? (partA > partB) ? 1 : -1 // прямая сортировка
            : (partA < partB) ? 1 : -1 // возврат 1 или -1 для сортировки
    } )

    return postsList
}
export default postListSortFn