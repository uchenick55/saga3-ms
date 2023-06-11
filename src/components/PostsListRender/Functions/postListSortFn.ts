import {PostType} from "../../../common/commonTypes/commonTypes";

type postListSortFnType = (PostsList: Array<PostType>, sortHeaderDirection: boolean | undefined) => Array<PostType>
const postListSortFn:postListSortFnType = (PostsList, sortHeaderDirection) => {
    sortHeaderDirection !== undefined &&
    PostsList.sort( (a: PostType, b: PostType) => { // сортируем массив постов по заголовкам
        const partA = a.title.toLowerCase(); // ignore upper and lowercase
        const partB = b.title.toLowerCase(); // ignore upper and lowercase
        return sortHeaderDirection // если прямая/обратная сортировка
            ? (partA > partB) ? 1 : -1 // прямая сортировка
            : (partA < partB) ? 1 : -1 // возврат 1 или -1 для сортировки
    } )

    return PostsList
}
export default postListSortFn